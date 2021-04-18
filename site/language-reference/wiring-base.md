# Wiring Base

[[toc]]

## digitalWrite()

The `digitalWrite()` method sets the value of a digital output pin. Possible values are `HIGH` or `LOW`.

### Syntax

```processing
digitalWrite(pin,value)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `pin`		| Integer	| The pin number to write.	|
| `value`	| Static	| Can be `HIGH` or `LOW`.	|

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
