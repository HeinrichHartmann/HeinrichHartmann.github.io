# Raspberry Pi GPIO Layout

I have recently bought a Raspberry Pi together with a [SUNFOUNDER
Starter Kit](http://www.amazon.de/gp/product/B00MHNVO9Y) in order to
do some electrical engineering experiments.  Of special interest are
the GPIO pins that enable communication with electroinc components
like LEDs, buttons, all kinds of sensors and even simple LED screens.
The SUNDOUNDER starter kit comes with an ribbon-cable and an extension
board, that grately simplifys access to the pins.

{% figure GPIO_files/extension_board jpg 'extension_board' %}
<style> img[alt=extension_board] { width: 400px; } </style>

These pins can be addressed from a python program using a simple
syntax.  However, there are some subtilities in the pin referencing:

1. There are two different reference schemes: `BCM` and `BOARD`
2. The BCM reference schemes differes for different Raspberry Pi versions
3. The SUNFOUNDER extension board mixes up the pins again
   and is neither consistent with `BCM` nor with `BOARD`

# Raspberry Pi onboard Pin Layout

# SUNFOUNDER Extension Board Pin Layout

# Further Reading

* <http://makezine.com/projects/tutorial-raspberry-pi-gpio-pins-and-python/>
* <http://pihw.wordpress.com/2013/01/30/sometimes-it-can-be-simple/>


