[mxcad_3d API documentation](../README. md)/Mx3dGeAxis

# Class: Mx3dGeAxis

Representing an axis

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeAxis`**

## Table of contents

### Constructors

- [constructor](Mx3dGeAxis.md#constructor)

### Methods

- [Direction](Mx3dGeAxis.md#direction)
- [Location](Mx3dGeAxis.md#location)
- [SetDirection](Mx3dGeAxis.md#setdirection)
- [SetLocation](Mx3dGeAxis.md#setlocation)

## Constructors

### constructor

• **new Mx3dGeAxis**()

Default Construction

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeAxis**(`theLoc`, `theDir`)

Constructor function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheLoc | UniPoint | Origin of the axis|
|The Direction of the Axis | UniDir|

#### Overrides

Mx3dGeObject.constructor

## Methods

### Direction

▸ **Direction**(): [`Mx3dGeDir`](Mx3dGeDir.md)

Obtain the direction of the axis

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

direction

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain the origin of the axis

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

origin

___

### SetDirection

▸ **SetDirection**(`theDir`): `void`

Set the direction of the axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheDir | [Mx3dGeDir] (Mx3dGeDir. md) | Direction|

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theLoc`): `void`

Set the origin of the axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheLoc | UniPoint | Origin|

#### Returns

`void`
