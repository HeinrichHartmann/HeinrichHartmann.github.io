---
author: "Heinrich Hartmann"
layout: "post"
category: "blog"
---

<!-- EMACS PREAMBLE: -->
<!-- (global-set-key (kbd "C-c C-e") 'ess-eval-paragraph) -->

<!-- # Digging into R -->

I was advised to use
[R](http://cran.r-project.org/doc/manuals/r-release/R-lang.html) for
statistical analysis of time series data. This post documents my
endeavor into the world of R from the very beginning until the first
experiments with time series data.

## Installation

Under Ubuntu Linux it was very simple to install R using `apt-get`
cf. [blog](http://www.personal.psu.edu/mar36/blogs/the_ubuntu_r_blog/installing-r.html).
Soon I decided to install the GUI [RStudio](http://www.rstudio.com/),
whose installation was also unproblematic.

Building from sources is also possible. First I used a [GitHub
clone](https://github.com/wch/r-source) of the [SVN
repository](https://svn.r-project.org/R), but the build failed due to
a missing `.svn` dir. Very strange. However the following the
[official
docs](http://cran.r-project.org/doc/manuals/R-admin.html#Building-from-source)
worked for me on Ubuntu 12.04:

	# install dependencies
	sudo apt-get install libx11-dev libxt-dev x11proto-core-dev

	svn checkout https://svn.r-project.org/R/trunk/ r-source
	cd r-source

	# download recommended packages
	./tools/rsync-recommended

	./configure --enable-R-shlib # shlib is used by RStudio
	make
	make info
	sudo make install

## First impression

I am used to programming in python and java so I started with reading
[R programming for
programmers](http://www.johndcook.com/R_language_for_programmers.html). The
first thing to notice is that, the most important feature of any IDE:
*tab-completion* is indeed suported by the R shell. However, the
function oriented language design

	a <- c(1,2,3)    # creates a `vector`
	length(a)        # returns 3

makes interactive exploration of libraries very-hard. How do I know
which of the hundreds of available function is applicable to the
variable `a`?

On the plus side, I love that variable assignments have proper syntax.
As a mathematician using `=` as an assigment operator has always felt
utterly wrong. This sentiment is shared e.g. by
[D. Knuth](http://en.wikipedia.org/wiki/Donald_Knuth), who also uses
`<-` in his books.

A thing I found quiet amusing about R is that there seem to be equaly
many articles describing flaws in the R language [2,3], than
introductions and guides to the language. Of course I started reading
flaws first.

One of the mayor differences of R to other programming languages is
the absence of scalar data types. __Everything is a vector__.

	typeof(1)        # > [1] "double", i.e. double vector
	typeof(c(1))     # > [1] "double", i.e. double vector
	1 == c(1)        # > TRUE

Another curiosity is the (ab)-use of the vector generation operator `:`

	1:5             # > [1] 1 2 3 4 5, a list with 5 elements

So lists start with `1` and the end is inclusive. Seems good at first,
but then the basic lentgh relation becomes a bit wired:

	length(a:b) == b - a + 1

So in order to produce an empty list one has to use `a:a-1`, right? No:

	1:1             # > [1] 1
	1:0             # > [1] 1 0
	1:-1            # > [1] 1 0 -1

When the sencond index is less than the first one, then the iteration
goes backwards. So the length relation fails in edge cases. Lets make
a test, and calculate:

	length(0:a) for a = -5 .. 5

How do you do that using R? My first idea is to generate a list of
lists, which contains `0:a` for varying `a`. Is this possible in R?
Can we have vectors of vectors?

	c(c(1,2,3), c(4,5,6))  # > [1] 1 2 3 4 5 6

No. Nested vectors are flattend out! Ok, next try, lets use a function:

	lengthOfArray <- function(a) { length(0:a) }
	lengthOfArray(0)
	# > [0] 1

Good. Now lets map it to a vector:

	sapply(-2:2, lengthOfArray)   # > [1] 3 2 1 2 3

Ok. This is not as bad as I would had thought. At least the length
function has a simple regularity:

	length(a:b) == abs(b - a) + 1

One problem with the approach is that `sapply` stands for simplified
apply, and performes some simplifications which might depend on the
input data, and can lead to subtle bugs.

As we have seen the sequence operator ':' is problematic to use
in programs and loops. The recommended pattern in this case is using
the `seq` function:

	seq(length=5)    # > [1] 1 2 3 4 5
	seq(length=0)    # > [1] integer(0)  i.e. length 0 sequence
	seq(0,length=5)  # > [1] 0 1 2 3 4   i.e. good ol C/Java arrays

Maybe an abreviation would be convenient:

	iter <- function(n) seq(0,length=n)

## Under the hood

We are following [6, Chap. 13].

R is an interpreted language using a __read__, __parse__, __evaluate__
loop to evaluate expressions read from stdin.  In R an expression is
parsed into an __object__, which is then passed to the `eval()`
function. The eval function returns the result of the evaluation as an
object with is then printed to the output stream.

Evaluation and parsing can be separated using the `quote` and `eval`
functions:

	a <- 0
	X =	quote(a <- 3)        # R object representation of expression
	a                        # > [1] 0
	eval(X)                  # Evaluate object
	a                        # > [1] 3

So everyhing in R comes down to evalating __objects__.  But what are
objects?

Ideally I would like to have some lower level, detail about
implementations of objects. Howver, lets look at some examples first:

* Constants := "Objects that evaluate to themselves."
  This means a statement xxx represents an constant object iff

		eval(quote(xxx)) == quote(xxx)

  Examples:

    	eval(quote(3)) == quote(3)          # TRUE => constant
	    eval(quote("hi")) == quote("hi")    # TRUE => constant
    	eval(quote(a)) == quote(a)          # FALSE
    	eval(quote(-1)) == quote(-1)        # FALSE -> function call

  The statement `-1` represents the function call object `-(1)`.
  Question: Can we turn the rule for constants into a function?

    	isConst <- function(x) { eval(quote(x)) == quote(x) }
	    isConst(3) # > [1] FALSE

  So the naive approach does not work. How can we debug this?  RStudio
  comes with a debugger. Setting a breakpoint inside the function
  reveals that `x` is of type __promise__, which is never constant. We
  have to look closer into function calls to understand this
  behavior.

* Names := "Expressions that identify objects"

  Statements expressing names have to pass the following regular expression:

	    ^[.[:alpha:]][._[:alnum:]]*$

  Backticks allow arbitrary character strings to act as names:

        class(quote(`<-`)) # [1] "name"

  Using backticks it is also possible to expose the functional
  internals of R, e.g.

		`<-`(a, 3) # is identical to "a <- 3"
		`if`(a == 3, "is three", "not three")  # > [1] "is three"

* Promises. Internally used object type to implement lazy evaluation.
  We have seen promises, when we were debugging a function. The
  creation of promise objects is discuraged by the R API. Nevertheless,
  the user can create promise objects using the `delayedAssign` function.


		delayedAssign("x", 3)

   RStudio, now shows a name "x" of type "promise" in its environment
   view.  However, I could not find a way to print the class "promise"
   on the scrren. All of `class(quote(z))`, `class(z)`, `typeof(z)`,
   `typeof(quote(z))` show something else.

   For further inormation see [7].

* Function calls. This class covers everything else.

# R Data Structrures

## Working with vectors ##

Let's generate a vector with some numbers in it:

	x <- -3:3

We can access individual parts of it via `x[i]` or to select ranges
`x[c(1,2)]` or `x[3:5]`. We can filter `x` by boolean vectors:

	x[c(F,T,F,T,F,T,F)]  # > [1] -2 0 2

If the index vector is shorter than the length of `x` than the
vector indexing vector is repeated as often as necessary:

	(0:9)[c(T,F)]            # > [1] 0 2 4 6 8

This is particularly powerful in combination with vectorized
application of comparisons:

	x > 0    # > [1] FALSE FALSE FALSE FALSE TRUE TRUE TRUE

So that `x[x > 0]` selects the positive parts of the vector

	x[x > 0] # > [1] 1 2 3.

The following examples shows all values that are far away from the
average:

	y <- x*x
	y[y - mean(y) > sd(y)]

## Data Frames ##

Data frame (`data.frame`) objects are essentially a list of vectors of the same
length. It is the equivalent of a spreadsheet or database table in the
R language. A predefined `data.frame` object is `mtcars`, containing information
about a number of cars:

	mtcars                    # shows a table view of the data.frame
	class(mtcars)             # > [1] "data.frame"
	colnames(mtcars)          # lists names of cloums
	rownames(mtcars)          # list row names
	mtcars$mpg                # vector containing mpg values

Data frames can be indexed like a matrix:

	mtcars[1]                 # data.frame containing only first cloumn ('mpg')
	mtcars[c('mpg','gear')]   # data.frame containing only two colums
	mtcars['Valiant',]        # single row
	mtcars[1:10,]             # slice of rows

Let's create our own data frame:

	df <- data.frame(x=1:3, y=c('a','b','c'), z=c(T,T,F))
	with(df, x[z])            # load df into environment

# Time Series Analysis with R #

## Importing data ##

Before we can start lets import some data. I have prepared
some accelerometer data from my smartphone as tab separated values

	x	y	z
	-4.9433208	6.552774	5.5564456
	-2.8357031	6.361172	6.935977
	-2.9889846	6.591094	7.089258
	-3.027305	6.246211	6.6677346
	-3.2189064	6.361172	6.552774

Now let us import this file into R, by running:

	ACC <- read.csv(file="acc.tsv", header=TRUE, sep="\t")

This gives us an __data.frame__ object `ACC` in the environment. Let's
see what is in there: `plot(ACC)` give us a 3x3 matrix of plots.

Data frame objects are essentially a list of vectors of the same length.

	colnames(ACC) # > [1] "x" "y" "z"

We can access the individual colums by their names `ACC$x`.

	library(lattice)
	xyplot(x ~ y, data=ACC)

The `with` statement allows us to treat the colums as usual variables
in arbitrary expressions:

	with(ACC, {
		plot(c(0,length(x)), range(x,y,z) , type='n')  # no plotting
		lines(x, col='green');
		lines(y, col='blue');
		lines(z, col='red')
	})


## Reading from a database ##

We want to access more data stored on a local Postgres database.
To do this we first install the [R-postgres package](https://code.google.com/p/rpostgresql/)

	install.packages("RPostgreSQL")

and connect to the the database

	library(RPostgreSQL)
	drv <- dbDriver("PostgreSQL")
	con <- dbConnect(drv, host="localhost", port="5432",
		             dbname="test", user="test", password="test"
					 )
	dbGetInfo(drv)  # no of db connections
	summary(con)    # list basic info.

Now lets query some data from the connection:

	rs <- dbSendQuery(con,"SELECT * FROM sensor_accelerometer WHERE trip_id = 209")
	first_row <- fetch(rs, n=1)
	class(first_row) # > [1] "data.frame"
	ACC <- fetch(rs,n= -1)

Let's write a convenience function to automate this process.

	getACC <- function(id) {
		rs <- dbSendQuery(
		        con,
	            paste("SELECT * FROM sensor_accelerometer WHERE trip_id = ",id)
				)
		fetch(rs, n=-1)
	}
	ACC <- getACC(863)

How much data did we fetch?

	dim(ACC)  # > [1] 6356 5
	nrow(ACC) # > [1] 6356
	ncol(ACC) # > [1] 5

Lets do some subsampling before we plot the data:

	SubACC <- ACC[c(T,F),]   # selects every second data point
	dim(SubACC)              # > [1] 3178 5
	with(SubACC, plot(x, type='l'))

	# Random subsampling
	SubACC <- ACC[sort(sample(nrow(ACC),50)),]
	with(SubACC,plot(x, type='l'))

Lets plot the first few data points:

	with(ACC[1:500,], plot(x), type='l'))

## Quality control

How regular is our data sampled?

	diff(ACC$ts)      # computes differences between time stamps

We see a bunch of numbers most of them are -5, this means our time
series runs actually backwards.  Moreover, we have several outliers
with very big deviations going in both directions:

	plot(diff(ACC$ts))

While this problem can actually be resolved in our db query,
lets solve it here as well.

	BCC <- ACC[order(ACC$ts),]

Furthermore, we see deviations from the expected value of 5:

	with(BCC,hist(diff(ts)[diff(ts)>5]))

We see a few data points with 20 and a maximal deviation of 50, this
is not too bad, but we should apply some interploation to make up for
this:

	sample_count <- (max(BCC$ts) - min(BCC$ts))/5
	interp <- function(v) approx(BCC$ts,v,n=sample_count)$y

	CCC <- data.frame(ts=1:sample_count)
	CCC$x <- interp(BCC$x)
	CCC$y <- interp(BCC$y)
	CCC$z <- interp(BCC$z)

## Series operations

Lets prepare our data

	s2 <- function(DF) with(DF, sqrt(x^2 + y^2 + z^2))
	L <- s2(CCC) # length of ACC vector

Differencing and integration are readily defined

	diff(L)
	int <- diffinv
	diff(int(L)) - L

Application of linear filters is easy as well:

	plot_filter <- function(L,weights) {
		plot(
			cbind(L,filter(L,weights)),
		    plot.type='single',
			col=c('black','red'))
	}

	norm <- function(a) {a / sum(a)}

    # smooth signal with average of 100 values
	plot_filter(L[1:1000],norm(rep(1,100)))

    # smooth signal with average of 100 values
	plot_filter(L[1:1000],norm(dnorm(seq(-2,2,0.1))))

Now lets compute the auto correlation to detect regularities

	ACF <- acf(L,3000)

	# find local maxima by chcking sing changes of the first derivative
	lmax <- which(diff(sign(diff(ACF$acf)))==-2)
	# > 253  502  752  868  884 1001

## Time Series Objects

Now lets convert the data into a multivariate time series object

	M <- with(CCC, cbind(x,y,z,L)) # matrix representation of CCC
	TL <- ts(M,frequency=50)

	plot(TL, plot.type='single', col=c('blue','green','red','grey'))

Now lets do a seasonal decomposistion of the time series

	plot(stl(ts(L,frequency=253), s.window=1, t.window=100))

	plot(stl(TL[,"L"], s.window=10, t.window=100))

# References

1. [R programming for programmers](http://www.johndcook.com/R_language_for_programmers.html)
2. [Design flaws in R](http://radfordneal.wordpress.com/2008/08/06/design-flaws-in-r-1-reversing-sequences/)
3. Patrick Burns - The R Inferno
4. [List of Ressources](http://www.ats.ucla.edu/stat/r/)
5. [Online course for beginners.](http://tryr.codeschool.com/)
6. John Chambers - Software for Data Analysis
7. <http://adv-r.had.co.nz/Computing-on-the-language.html>
8. [Little Book: R time series](http://a-little-book-of-r-for-time-series.readthedocs.org/en/latest/src/timeseries.html)
9. <http://www.statmethods.net/advstats/timeseries.html>
10. [Official docs](http://cran.r-project.org/doc/manuals/r-release/R-lang.html)
11. [Plotting guide](https://www.harding.edu/fmccown/r/)
