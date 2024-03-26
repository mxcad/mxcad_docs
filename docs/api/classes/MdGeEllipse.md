[mxcad API 文档](../README.md) / MdGeEllipse

# Class: MdGeEllipse

表示一个椭圆

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeEllipse`**

## Table of contents

### Constructors

- [constructor](MdGeEllipse.md#constructor)

### Properties

- [imp](MdGeEllipse.md#imp)

### Methods

- [Area](MdGeEllipse.md#area)
- [Axis](MdGeEllipse.md#axis)
- [Directrix1](MdGeEllipse.md#directrix1)
- [Directrix2](MdGeEllipse.md#directrix2)
- [Eccentricity](MdGeEllipse.md#eccentricity)
- [Edge](MdGeEllipse.md#edge)
- [Focal](MdGeEllipse.md#focal)
- [Focus1](MdGeEllipse.md#focus1)
- [Focus2](MdGeEllipse.md#focus2)
- [Location](MdGeEllipse.md#location)
- [MajorRadius](MdGeEllipse.md#majorradius)
- [MinorRadius](MdGeEllipse.md#minorradius)
- [MirrorByAxis](MdGeEllipse.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeEllipse.md#mirrorbycsysr)
- [MirrorByPoint](MdGeEllipse.md#mirrorbypoint)
- [MirroredByAxis](MdGeEllipse.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeEllipse.md#mirroredbycsysr)
- [MirroredByPoint](MdGeEllipse.md#mirroredbypoint)
- [Parameter](MdGeEllipse.md#parameter)
- [Position](MdGeEllipse.md#position)
- [Rotate](MdGeEllipse.md#rotate)
- [Rotated](MdGeEllipse.md#rotated)
- [Scale](MdGeEllipse.md#scale)
- [Scaled](MdGeEllipse.md#scaled)
- [SetAxis](MdGeEllipse.md#setaxis)
- [SetLocation](MdGeEllipse.md#setlocation)
- [SetMajorRadius](MdGeEllipse.md#setmajorradius)
- [SetMinorRadius](MdGeEllipse.md#setminorradius)
- [SetPosition](MdGeEllipse.md#setposition)
- [Shape](MdGeEllipse.md#shape)
- [Transform](MdGeEllipse.md#transform)
- [Transformed](MdGeEllipse.md#transformed)
- [Wire](MdGeEllipse.md#wire)
- [XAxis](MdGeEllipse.md#xaxis)
- [YAxis](MdGeEllipse.md#yaxis)
- [getImp](MdGeEllipse.md#getimp)
- [initTempObject](MdGeEllipse.md#inittempobject)

## Constructors

### constructor

• **new MdGeEllipse**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeCSYSR`](MdGeCSYSR.md) |
| `p2?` | `number` |
| `p3?` | `number` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Area

▸ **Area**(): `number`

#### Returns

`number`

___

### Axis

▸ **Axis**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### Directrix1

▸ **Directrix1**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### Directrix2

▸ **Directrix2**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### Eccentricity

▸ **Eccentricity**(): `number`

#### Returns

`number`

___

### Edge

▸ **Edge**(`p1?`, `p2?`): [`MdGeEdge`](MdGeEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` |
| `p2?` | `number` |

#### Returns

[`MdGeEdge`](MdGeEdge.md)

___

### Focal

▸ **Focal**(): `number`

#### Returns

`number`

___

### Focus1

▸ **Focus1**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### Focus2

▸ **Focus2**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### Location

▸ **Location**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### MajorRadius

▸ **MajorRadius**(): `number`

#### Returns

`number`

___

### MinorRadius

▸ **MinorRadius**(): `number`

#### Returns

`number`

___

### MirrorByAxis

▸ **MirrorByAxis**(`theA1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`theA2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`MdGeEllipse`](MdGeEllipse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeEllipse`](MdGeEllipse.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`MdGeEllipse`](MdGeEllipse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeEllipse`](MdGeEllipse.md)

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`MdGeEllipse`](MdGeEllipse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeEllipse`](MdGeEllipse.md)

___

### Parameter

▸ **Parameter**(): `number`

#### Returns

`number`

___

### Position

▸ **Position**(): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |
| `theAng` | `number` |

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`MdGeEllipse`](MdGeEllipse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |
| `theAng` | `number` |

#### Returns

[`MdGeEllipse`](MdGeEllipse.md)

___

### Scale

▸ **Scale**(`theP`, `theS`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |
| `theS` | `number` |

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`theP`, `theS`): [`MdGeEllipse`](MdGeEllipse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |
| `theS` | `number` |

#### Returns

[`MdGeEllipse`](MdGeEllipse.md)

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theP`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### SetMajorRadius

▸ **SetMajorRadius**(`theMajorRadius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theMajorRadius` | `number` |

#### Returns

`void`

___

### SetMinorRadius

▸ **SetMinorRadius**(`theMinorRadius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theMinorRadius` | `number` |

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Transform

▸ **Transform**(`theT`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`MdGeEllipse`](MdGeEllipse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeEllipse`](MdGeEllipse.md)

___

### Wire

▸ **Wire**(): [`MdGeWire`](MdGeWire.md)

#### Returns

[`MdGeWire`](MdGeWire.md)

___

### XAxis

▸ **XAxis**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### YAxis

▸ **YAxis**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### getImp

▸ **getImp**(): `any`

#### Returns

`any`

#### Inherited from

[MdGeObject](MdGeObject.md).[getImp](MdGeObject.md#getimp)

___

### initTempObject

▸ `Protected` **initTempObject**(`imp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp` | `any` |

#### Returns

`void`

#### Inherited from

[MdGeObject](MdGeObject.md).[initTempObject](MdGeObject.md#inittempobject)
