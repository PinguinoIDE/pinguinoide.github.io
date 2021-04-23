# Wiring Base

## Table of Contents
[[toc]]

## abs()

The `abs()` function returns the absolute value of a floating point number.

### Syntax

```processing
abs(x);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `x`		| *float*	| floating point number	|

### Returns

The absolute value of `x`.

### Example

### Notes

### Relates

* pow()
* sin()
* cos()
* tan()
* sqrt()


## analogRead()

The `analogRead()` function reads the value on an analog pin to 10 bits resolution.

### Syntax

```processing
analogRead(pin);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `pin`		| *integer*	| The pin number to read.	|

### Returns

Returns a value proportional to the voltage applied on the selected pin:  0..5v (P8), 0..3.3v (P32).

### Example

```processing
// level detector (P8) by J P Mandon
 
int level;
 
void setup()
{
pinMode(0,OUTPUT);
digitalWrite(0,LOW);
}
 
void loop()
{
level=analogRead(13);
if (level>512) digitalWrite(0,HIGH);  // if voltage applied on pin 13 > 2.5V set pin 0 HIGH
else digitalWrite(0,LOW);             // else reset pin 0 LOW
}
```

### Notes

IDE defined 'pins' that can read an analog value depend on the device.
Typically, if one pin is used as analog input, all remaining analog pins are configured as analog inputs.
See [Pinguino Boards page](/pinguino-boards) for details of pin mapping.
NB - exceeding an input voltage of 5v (P8) or 3.3v (P32) is likely to destroy the device.

### Relates

* analogWrite()


## analogWrite()

The `analogWrite()` function sets an analog signal on a pin via pulse width modulation (PWM).

### Syntax

```processing
analogWrite(pin,value);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `pin`		| *integer*	| The pin number to write.	|
| `value`	| *integer*	| Value between 0 and 1023 |

### Returns

None

### Example

```processing
void setup()
{
}
 
void loop()
{
        analogWrite(11,512);    // 50% PWM on pin 11
        analogWrite(12,102);    // 10% PWM on pin 12
}
```

### Notes

The voltage that appears on a pin using this function is pulse width modulated i.e. a square wave. An integrator must be utilised if a DC signal is required. Following integration, if `value` is e.g. 1023 then the nominal DC voltage will be 5v (P8) or 3.3v (P32).

### Relates

* analogRead()


## cos()

The `cos()` function returns the cosine of parameter x, where x is given in radians (2π radians = 360 degrees).

### Syntax

```processing
cos(x);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `x`		| *float*	| floating point number	|

### Returns

The cosine of `x`.

### Example

### Notes

### Relates

* abs()
* pow()
* sin()
* tan()
* sqrt()


## delay()

The `delay()` function instructs the processor to wait for a specified period of time in milliseconds.

### Syntax

```processing
delay(x);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `x`		| *unsigned long*	| Duration in milliseconds.	|

### Returns

none

### Example

### Notes

### Relates

* delayMicroseconds()


## delayMicroseconds()

The `delayMicroseconds()` function instructs the processor to wait for a specified period of time in microseconds.

### Syntax

```processing
delayMicroseconds(x);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `x`		| *unsigned integer*	| Duration in microseconds.	|

### Returns

none

### Example

### Notes

### Relates

* delay()


## digitalRead()

The `digitalRead()` function reads the value of a digital input pin. Possible values are `HIGH` or `LOW`.

### Syntax

```processing
digitalRead(pin);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `pin`		| *integer*	| The pin number to read.	|

### Returns

The voltage level of the pin - `LOW` corresponds to a level nominally 0 volts (P8 and P32); `HIGH` corresponds to a level nominally 5v (P8) or 3.3v (P32).

### Example

```processing
// Testing input by J P Mandon
 
void setup()
{
        pinMode(1,INPUT);
        pinMode(7,OUTPUT);
}
 
void loop()
{
        if (digitalRead(1)) 
                digitalWrite(7,HIGH);
        else 
                digitalWrite(7,LOW);
}
```
### Notes

The parameter `pin` refers to the IDE defined 'pin', which typically differs from the device physical pin.
See [Pinguino Boards page](/pinguino-boards) for details of pin mapping.
The relevant pin should be configured as input using `pinMode()`.

### Relates

* INPUT
* OUTPUT
* HIGH
* LOW
* digitalWrite()
* pinMode()


## digitalWrite()

The `digitalWrite()` function sets the value of a digital output pin. Possible values are `HIGH` or `LOW`.

### Syntax

```processing
digitalWrite(pin,value);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `pin`		| *integer*	| The pin number to write.	|
| `value`	| *constant*	| Can be `HIGH` or `LOW`.	|

### Returns

None

### Example

```processing
int outpin = 8;

void setup() {
  pinMode(outpin, OUTPUT); 
}

void loop() {
  digitalWrite(outpin, HIGH);
}
```
### Notes

The parameter `pin` refers to the IDE defined 'pin', which typically differs from the device physical pin.
See [Pinguino Boards page](/pinguino-boards) for details of pin mapping.
The parameter `LOW` sets the pin nominally to 0 volts (P8 and P32). The parameter `HIGH` sets the pin nominally to 5 volts (P8) or 3.3 volts (P32).

### Relates

* INPUT
* OUTPUT
* HIGH
* LOW
* digitalRead()
* pinMode()


## millis

The `millis()` function returns the time elapsed since the beginning of the program.

### Syntax

```processing
millis();  //(P8 and P32)
```

### Parameters

none

### Returns

Returns the time elapsed in milliseconds since the start of the user program. This value is a long integer (32 bits).
To reset the counter use `_millis = 0;`

### Example

```processing
void setup()
{
pinMode(0,OUTPUT);
digitalWrite(0,LOW);
}
 
void loop()
{
if (millis()>1000) digitalWrite(0,HIGH);  // light the led after 1 second
 
if (millis()>2000) _millis=0;  // reset the millis() counter after 2 seconds
}
```

### Notes

At the beginning of the program, internal timer TMR0 is initialized to zero. It is a 16 bit integer value incremented every millisecond. The `millis()` function returns the current value of TMR0. 

### Relates


## PinMode()

The `pinMode()` function configures a given pin as input or output.

### Syntax

```processing
pinMode(pin,mode); //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `pin`		| *integer*	| The pin number to write.	|
| `mode`	| *constant*	| Can be `INPUT` or `OUTPUT`.	|

### Returns

none

### Example

```processing
// Testing input J P Mandon

int led1;
int led2;
 
void setup()
{
        led1=1;
        led2=7;
        pinMode(led1,OUTPUT);
        pinMode(led2,OUTPUT);
}
 
void loop()
{
        digitalWrite(led1,HIGH);
        digitalWrite(led2,LOW);
        delay(500);
        digitalWrite(led1,LOW);
        digitalWrite(led2,HIGH);
        delay(500);
}
```

### Notes

### Relates

* digitalRead()
* digitalWrite()


## pow()

The `pow()` function returns the value of x raised to the power y.

### Syntax

```processing
pow(x,y);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `x`		| *float*	| floating point number	|
| `y`	| *float*	| floating point number	|

### Returns

The value of x to the power y.

### Example

### Notes

### Relates

* abs()
* sin()
* cos()
* tan()
* sqrt()


## randomSeed

The `randomSeed()` function sets its argument as the seed for the sequence of pseudo-random integers returned by the associated function `rand()`.  

### Syntax

```processing
randomSeed(seed); //(P8 and P32)
rand();
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `seed`		| *unsigned integer*	| Random seed value	|

### Returns

None

### Example

```processing
// Blink an LED attached to pin 11 for random periods
#define MYLED 11
 
// Time to sleep
unsigned short pause;
 
void setup(void)
{
        pinMode(MYLED,OUTPUT);
        // Init random generator with a fixed random value
	randomSeed(55);
}
 
void loop(void)
{
        // Pause is between 0 and 0b111 (7 in decimal)
	pause = rand() & 0x007;
        // Light ON
        digitalWrite(MYLED,HIGH);
        // delay is between 200ms and 1.6s
        delay(200 * (pause + 1));
        // Light off
        digitalWrite(MYLED,LOW);
        // Delay 200ms
        delay(200);
}
```

### Notes 

A fixed seed will repeatedly generate the same pseudo-random number sequence. Thus, `randomseed()` should be called with a value determined by an external event if a different sequence is required on subsequent runs. The function `rand()` returns a pseudo-random number in the range 0...32767.

### Relates


## sin()

The `sin()` function returns the sine of parameter x, where x is given in radians (2π radians = 360 degrees).

### Syntax

```processing
sin(x);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `x`		| *float*	| floating point number	|

### Returns

The sine of `x`.

### Example

### Notes

### Relates

* abs()
* pow()
* cos()
* tan()
* sqrt()


## sqrt()

The `sqrt()` function returns the (non-negative) square root of parameter x.

### Syntax

```processing
sqrt(x);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `x`		| *float*	| floating point number	|

### Returns

The square root of `x`.

### Example

### Notes

### Relates

* abs()
* pow()
* sin()
* tan()
* cos()


## tan()

The `tan()` function returns the tangent of parameter x, where x is given in radians (2π radians = 360 degrees).

### Syntax

```processing
tan(x);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `x`		| *float*	| floating point number	|

### Returns

The tangent of `x`.

### Example

### Notes

### Relates

* abs()
* pow()
* sin()
* cos()
* sqrt()






