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

## digitalWrite()

The `digitalWrite()` method sets the value of a digital output pin. Possible values are `HIGH` or `LOW`.

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
