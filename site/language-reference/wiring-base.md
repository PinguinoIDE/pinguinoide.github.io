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
digitalWrite(pin,value)
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

### Relates

* INPUT
* OUTPUT
* HIGH
* LOW
* digitalRead()
* pinMode()
