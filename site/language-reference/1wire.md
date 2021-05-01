# 1wire

## Table of Contents

* 1wire.readbit
* 1wire.readbyte
* 1wire.reset
* 1wire.writebit
* 1wire.writebyte

## 1wire.readbit()

The `1wire.readbit()` function reads a bit from the one-wire bus and return it.


### Syntax

```processing
u8 1wire.readbit(u8 pin); // P8 and P32
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `pin`		| *8 bit integer*	| pin to which the on-wire bus is connected.	|

### Returns

The value of the bit read from the one-wire data line: 0 or 1

### Example 

```processing
u8 OneWireRead(u8 pin)
{
	u8 i, value = 0;	
	for (i=0; i<8; i++)
	{
		if (1wire.readbit(pin))	// reads byte in, one bit at a time
		{
			value |= 0x01 << i;	// and then shifts it left
		}
	}
	return(value);
}
```

### Notes

### Relates

* 1wire.readbyte
* 1wire.reset
* 1wire.writebit
* 1wire.writebyte

## 1wire.readbyte()

The `1wire.readbyte()` function reads a byte from the one-wire bus and return it. 

### Syntax

```processing
u8 1wire.readbyte(u8 pin);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `pin`		| *8 bitinteger*	| pin to which the one-wire bus is connected.	|


### Returns

The value of the byte read from the one-wire data line.

### Example

```processing
// example for P8 - 18f4550
while (busy == 0)		// Wait while busy ( = bus is low)
    busy = 1wire.readbyte(0);	// One-Wire bus is on pin 0 (RB0)
```

### Notes


### Relates

* 1wire.readbit
* 1wire.reset
* 1wire.writebit
* 1wire.writebyte


## 1wire.reset()

The `1wire.reset()` function performs a reset on the one-wire bus and returns the presence detect.

### Syntax

```processing
u8 1wire.reset(u8 pin);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `pin`		| *8 bit integer*	| pin to which the on-wire bus is connected.	|

### Returns

Returns 1 if no presence detect was found, 0 if presence detect was found.
If there is a one-wire device on the one-wire bus it pulls the DQ line low (0).
If there is no one-wire device on the one-wire then the pull-up resistor ensures that the one-wire bus remains high (1). 

### Example

```processing
if (1wire.reset(0)) return FALSE;
```

### Notes


### Relates

* 1wire.readbit
* 1wire.readbyte
* 1wire.writebit
* 1wire.writebyte


## 1wire.writebit()

The `1wire.writebit()` function writes a bit to the one-wire bus.

### Syntax

```processing
void 1wire.writebit(u8 pin, u8 val);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `pin`		| *8 bit integer*	| pin to which the one-wire data bus is connected.	|
| `value`	| *8 bit integer*	| value to be written ( 0 or 1 ) |


### Returns

None.

### Example

```processing
void OneWireWrite(u8 pin, u8 val) // P8 and P32
{
    u8 i, temp;
    for (i=0; i<8; i++)			// writes byte, one bit at a time
    {
        temp = val >> i;		// shifts val right 'i' spaces
        temp &= 0x01;			// copy that bit to temp
        1wire.writebit(pin, temp);	// write bit ont one-wire bus
    }
}
```

### Notes

### Relates

* 1wire.readbit
* 1wire.readbyte
* 1wire.reset
* 1wire.writebyte


## 1wire.writebyte()

The `writebyte()` function writes a byte to the one-wire bus.

### Syntax

```processing
void 1wire.writebyte(u8 pin, u8 val);  //(P8 and P32)
```

### Parameters

| Param		| Type		| Desc				|
|---------------|:-------------:|-------------------------------|
| `pin`		| *8 bit integer*	| pin to which the one-wire data bus is connected.	|
| `value`	| *8 bit integer*	| value to be written  |

### Returns

none

### Example

### Notes

### Relates

* 1wire.readbit
* 1wire.readbyte
* 1wire.reset
* 1wire.writebit








