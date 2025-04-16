[mxcad_3d API documentation](../README. md)/Mx3dGeLocation

# Class: Mx3dGeLocation

Representing the position in a 3D geometric system.
Provides various methods for manipulating 3D positions and transformations.

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeLocation`**

## Table of contents

### Constructors

- [constructor](Mx3dGeLocation.md#constructor)

### Methods

- [Clear](Mx3dGeLocation.md#clear)
- [Divided](Mx3dGeLocation.md#divided)
- [FirstPower](Mx3dGeLocation.md#firstpower)
- [Identity](Mx3dGeLocation.md#identity)
- [Inverted](Mx3dGeLocation.md#inverted)
- [IsDifferent](Mx3dGeLocation.md#isdifferent)
- [IsEqual](Mx3dGeLocation.md#isequal)
- [IsIdentity](Mx3dGeLocation.md#isidentity)
- [Multiplied](Mx3dGeLocation.md#multiplied)
- [NextLocation](Mx3dGeLocation.md#nextlocation)
- [Powered](Mx3dGeLocation.md#powered)
- [Predivided](Mx3dGeLocation.md#predivided)
- [ScalePrec](Mx3dGeLocation.md#scaleprec)

## Constructors

### constructor

• **new Mx3dGeLocation**()

The default constructor creates a unit position.

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeLocation**(`theTrsf`)

Constructor, initialize the position using the specified transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theTrsf ` | [` Mx3dGeTrsf `] (Mx3dGeTrsf. md) | Used to initialize the position transformation object|

#### Overrides

Mx3dGeObject.constructor

## Methods

### Clear

▸ **Clear**(): `void`

Clear the transformation of the current position.

#### Returns

`void`

___

### Divided

▸ **Divided**(`Other`): [`Mx3dGeLocation`](Mx3dGeLocation.md)

Calculate the division between the current position and another position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeLocation. md] | Another location object|

#### Returns

[`Mx3dGeLocation`](Mx3dGeLocation.md)

The position object after division.

___

### FirstPower

▸ **FirstPower**(): `number`

Obtain the first power of the location.

#### Returns

`number`

The first power value of the position.

___

### Identity

▸ **Identity**(): `void`

Set the current position as a unit transformation.

#### Returns

`void`

___

### Inverted

▸ **Inverted**(): [`Mx3dGeLocation`](Mx3dGeLocation.md)

Calculate the inverse transformation of the current position.

#### Returns

[`Mx3dGeLocation`](Mx3dGeLocation.md)

The position object after inverse transformation.

___

### IsDifferent

▸ **IsDifferent**(`Other`): `boolean`

Check if the current location is different from another location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeLocation. md] | Another location object|

#### Returns

`boolean`

If the current location is different from another location, return true; Otherwise, return false.

___

### IsEqual

▸ **IsEqual**(`Other`): `boolean`

Check if the current position is equal to another position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeLocation. md] | Another location object|

#### Returns

`boolean`

If the current position is equal to another position, return true; Otherwise, return false.

___

### IsIdentity

▸ **IsIdentity**(): `boolean`

Check if the current position is a unit transformation.

#### Returns

`boolean`

If the current position is a unit transformation, return true; Otherwise, return false.

___

### Multiplied

▸ **Multiplied**(`theLocation`): [`Mx3dGeLocation`](Mx3dGeLocation.md)

Calculate the product of the current location and another location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheLocation | [Mx3dGeLocation. md] | Another location object|

#### Returns

[`Mx3dGeLocation`](Mx3dGeLocation.md)

The position object after multiplication.

___

### NextLocation

▸ **NextLocation**(): [`Mx3dGeLocation`](Mx3dGeLocation.md)

Get the next location object.

#### Returns

[`Mx3dGeLocation`](Mx3dGeLocation.md)

Next location object.

___

### Powered

▸ **Powered**(`pwr`): [`Mx3dGeLocation`](Mx3dGeLocation.md)

Calculate the power operation of the current position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The value of the power of 'pwr' | 'number' ||

#### Returns

[`Mx3dGeLocation`](Mx3dGeLocation.md)

The position object after power operation.

___

### Predivided

▸ **Predivided**(`Other`): [`Mx3dGeLocation`](Mx3dGeLocation.md)

Calculate the left division (front division) between the current position and another position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeLocation. md] | Another location object|

#### Returns

[`Mx3dGeLocation`](Mx3dGeLocation.md)

The position object after left division.

___

### ScalePrec

▸ **ScalePrec**(): `number`

Obtain the scaling accuracy of the position.

#### Returns

`number`

The scaling accuracy value of the position.
