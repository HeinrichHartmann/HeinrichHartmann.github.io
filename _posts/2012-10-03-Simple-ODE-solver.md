<script src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML" type="text/javascript"></script>
<style> .center { margin-right: auto; margin-left:auto; display: block } </style>
<style src="/css/coderay.css"></style>

# Simple ODE Solver

In this note we explore the Euler and Runge-Kutta methods for solving
ODEs.

## Euler Method

This is the most basic implementation of an ODE solver.
Given a (vector valued) differential equation

$$ \dot{x} = F(x,t) $$

it computes an approximate $$x(t)$$ on discrete time steps using
[http://en.wikipedia.org/wiki/Euler_method Eulers method]:

$$ x_{n+1} = x_n + \Delta t \cdot  F(x_{n},t) $$


{% highlight python %}
#!/usr/bin/python

def Euler_step(F,X0,t,dt):
    return [ x0+dt*dx for x0,dx in zip(X0, F(X0,t)) ]


def solve(F,X0,dt=0.01,tmin=0,tmax=1):
    # Calculate numer of required steps
    N = int((tmax-tmin) / float(dt)) 

    # Initialize Solution
    X = [X0]*N 

    # Compute Solution iteratively
    for i in range(N-1):
        X[i+1] = Euler_step(F, X[i], tmin + i * dt ,dt)

    return X


## Example Differential Equation

import math

def F(X,t):
    m = 1000000
    r3 = math.pow(math.sqrt(X[0]*X[0] + X[1]*X[1]), 3)
    DX = [ X[2] , X[3] , - m/r3*X[0], - m/r3*X[1] ]
    return DX

X0 = [100,0,0,100]
X = solve(F,X0,tmax=10,dt=0.001)

## Output using pylab
P0 = [x[0] for x in X]
P1 = [x[1] for x in X]

from pylab import plot, show

plot(P1,P0)
show()
{% endhighlight %}

## Animation and Threading

In the next example we will show the ODE solution in form of an animation.
Therefore we write our own Graphical Output function using the TKinter library.
We separate the plotting and the solving of the ODE into two different threads
which are executed independently. These threads communicate through a Queue
into which solver thread pushes the computed points and the plotting thread
reads out at a constant rate of 30 items per second.

As example ODE we use the gravitational [two-body problem](http://en.wikipedia.org/wiki/Gravitational_two-body_problem).

{% highlight python %}
## Example ODE Initialization

import math

# We use the ODE of the gravitational two body system
def F(X,t):
    (x1,y1,xx1,yy1,x2,y2,xx2,yy2) = X
    m1 = 100000
    m2 = 500000
    
    dx = x2 - x1
    dy = y2 - y1
    r3 = math.sqrt(dx**2 + dy**2)**3
    
    DX = [ xx1 , yy1 , m2/r3*dx, m2/r3*dy, xx2, yy2, -m1/r3*dx, -m1/r3*dy ]
    return DX

X0 = [0,100,50,0,0,0,-8,-2]


## ODE Solver
def Eulerstep(F,X0,t,dt):
    return [ x0+dt*dx for x0,dx in zip(X0, F(X0,t)) ]

def solver(F,X0,XQueue,dt=0.0001,t0=0, Spacing = 1000):
    t = t0
    i = 0

    while True:
        t += dt
        X = Eulerstep(F,X0,t,dt)

	# Only show every 1000's step in the plot
        if i % Spacing == 0:
	    # Plot the points with cordinates X[0],X[1] and X[4],X[5]
            XQueue.put([X[:2],X[4:6]])
            i = 0
            
        X0 = X
        i += 1

## Plotting Function

from Tkinter import *

def plotter(XQueue):
    # Init graphics
    wd =  500
    ht  = 500

    shift_x = wd/2
    shift_y = ht/2

    def cords(X):
    # Convert ODE coordinates to screen pixels
        x,y = X[:2]
        return ( int(shift_x + x)  % wd, int(shift_y - y) % ht )

    def oval_xy(x=0,y=0,r=5):
        return (x-r,y-r,x+r,y+r)

    window = Tk()
    canvas = Canvas(window, width = wd, height = ht)    
    points = [canvas.create_oval(oval_xy(10,10,20), outline='black', fill='gray40') for X in XQueue.get() ]
    canvas.pack()

    while True:
        # Get the latest element form the Queue.
	# This contains the coordinates of several points in the format
	# [ [x0,y0], [x1,y1], ... , [xn,yn] ]
        for i,X in enumerate(XQueue.get()):
            P = cords(X[:2])

            # Draw oval centered at coordinates
            canvas.coords(points[i],oval_xy(*P))

            # Sleep 30 ms --> ca. 30fps frame rate
            canvas.after(30)
            canvas.update()

    window.mainloop()

### Threading
import threading as th
import Queue

# Queue of length 30, i.e. solver computes only 30 steps ahead
XQueue = Queue.Queue(10)

# Setup Thread objects
SolverT = th.Thread(target = solver, args = (F,X0,XQueue))
PlotterT = th.Thread(target = plotter, args = (XQueue,))

# Solver Stops with main program
SolverT.daemon = True

SolverT.start()
PlotterT.start()

# Wait until plotting window is closed
PlotterT.join()
{% endhighlight %}


## Runge Kutta Method

In a next step we want to use a more advanced
ODE solving algorithm, the [Runge-Kutta](http://en.wikipedia.org/wiki/Runge_Kutta). It turns out the implementation is vastly simplified if
we use the [NumPy](http://numpy.scipy.org/) package.

NumPy comes with a new data structure ''array'', which allows us to
perform vector addition and scalar multiplication without making the
required loops explicit. Using this package the Euler method becomes
strikingly simple:

{% highlight python %}
def Eulerstep(F,X0,t,dt):
    return X0 + dt * F(X0,t)
{% endhighlight %}

Where we assume, that X0 is of type numpy.array. A quick test (using [timeit](http://docs.python.org/library/timeit.html)) shows, that the performance of this function is only about 2% worse than the original implementation.

Similary, implementation of the Runge Kutta method:

{% highlight python %}
def RK4(F,X0,t,dt):
    k1 = dt * F(X0,t)
    k2 = dt * F(X0 + 0.5*k1, t + 0.5*dt)
    k3 = dt * F(X0 + 0.5*k2, t + 0.5*dt)
    k4 = dt * F(X0 +     k3, t +     dt)
    return X0 + 1./6*(k1 + 2*k2 + 2*k3 + k4)
{% endhighlight %}

Let's see how these functions are used in the example of the ''harmonic oscillator'':

{% highlight python %}
import numpy as np

X0 = np.array([1,0])
def F(X,t): return np.array([ X[1], -X[0] ])

print Eulerstep(F,X0,0,0.1)
# returns [1.  -0.1]

print RK4(F,X0,0,0.1)
# returns [ 0.99500417 -0.09983333]
{% endhighlight %}