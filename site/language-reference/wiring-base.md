# Wiring Base

## Table of Contents
* abs
* analogRead
* analogWrite
* cos
* delay
* delayMicroseconds
* digitalRead
* digitalWrite
* millis
* pinMode
* pow
* randomSeed
* sin
* sqrt
* tan

## abs()

The `abs` function returns the absolute value of a floating point number.

### Syntax

```processing
abs(x);  (P8 and P32)
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

* pwr
* sin
* cos
* tan
* sqrt

## analogRead()

The `analogRead()` function reads the value on an analog pin to 10 bits resolution.

### Syntax

```processing
analogRead(pin)  (P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `pin`		| *integer*	| The pin number to read.	|

### Returns

Returns a value proportional to the voltage applied on the selected pin:  0..5v (P8), 0..3.3v (P32).

### Example

```processing
// level detector (P8)
 
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

IDE defined 'pins' that can read an analog value depend on the device. Typically, if one pin is used as analog input, all remaining analog pins are configured as analog inputs. See https://github.com/PinguinoIDE/pinguinoide.github.io/tree/master/site/pinguino-boards for details of pin mapping. NB - exceeding an input voltage of 5v (P8) or 3.3v (P32) is likely to destroy the device.

### Relates

* analogWrite()

## analogWrite()

The `analogWrite()` function sets an analog signal on a pin via pulse width modulation (PWM).

### Syntax

```processing
analogWrite(pin,value)  (P8 and P32)
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


## digitalWrite()

The `digitalWrite()` function sets the value of a digital output pin. Possible values are `HIGH` or `LOW`.

### Syntax

```processing
digitalWrite(pin,value)  (P8 and P32)
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
See https://github.com/PinguinoIDE/pinguinoide.github.io/tree/master/site/pinguino-boards for details of pin mapping.
The parameter `LOW` sets the pin nominally to 0 volts (P8 and P32). The parameter `HIGH` sets the pin nominally to 5 volts (P8) or 3.3 volts (P32).

### Relates

* INPUT
* OUTPUT
* HIGH
* LOW
* digitalRead()
* pinMode()



