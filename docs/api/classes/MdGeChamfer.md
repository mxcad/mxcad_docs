[mxcad API 文档](../README.md) / MdGeChamfer

# Class: MdGeChamfer

表示倒斜角

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeChamfer`**

## Table of contents

### Constructors

- [constructor](MdGeChamfer.md#constructor)

### Properties

- [imp](MdGeChamfer.md#imp)

### Methods

- [Abscissa](MdGeChamfer.md#abscissa)
- [Add](MdGeChamfer.md#add)
- [AddDA](MdGeChamfer.md#addda)
- [Closed](MdGeChamfer.md#closed)
- [ClosedAndTangent](MdGeChamfer.md#closedandtangent)
- [Contour](MdGeChamfer.md#contour)
- [Dists](MdGeChamfer.md#dists)
- [Edge](MdGeChamfer.md#edge)
- [FirstVertex](MdGeChamfer.md#firstvertex)
- [GetDist](MdGeChamfer.md#getdist)
- [GetDistAngle](MdGeChamfer.md#getdistangle)
- [IsDistanceAngle](MdGeChamfer.md#isdistanceangle)
- [IsSymetric](MdGeChamfer.md#issymetric)
- [IsTwoDistances](MdGeChamfer.md#istwodistances)
- [LastVertex](MdGeChamfer.md#lastvertex)
- [Length](MdGeChamfer.md#length)
- [NbContours](MdGeChamfer.md#nbcontours)
- [NbEdges](MdGeChamfer.md#nbedges)
- [NbSurf](MdGeChamfer.md#nbsurf)
- [RelativeAbscissa](MdGeChamfer.md#relativeabscissa)
- [Remove](MdGeChamfer.md#remove)
- [Reset](MdGeChamfer.md#reset)
- [ResetContour](MdGeChamfer.md#resetcontour)
- [SetDist](MdGeChamfer.md#setdist)
- [SetDistAngle](MdGeChamfer.md#setdistangle)
- [SetDists](MdGeChamfer.md#setdists)
- [SetMode](MdGeChamfer.md#setmode)
- [Shape](MdGeChamfer.md#shape)
- [Simulate](MdGeChamfer.md#simulate)
- [getImp](MdGeChamfer.md#getimp)
- [initTempObject](MdGeChamfer.md#inittempobject)

## Constructors

### constructor

• **new MdGeChamfer**(`p?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p?` | `object` \| [`MdGeShape`](MdGeShape.md) |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Abscissa

▸ **Abscissa**(`IC`, `V`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |
| `V` | [`MdGeVertex`](MdGeVertex.md) |

#### Returns

`number`

___

### Add

▸ **Add**(`p1`, `p2?`, `p3?`, `p4?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` \| [`MdGeEdge`](MdGeEdge.md) |
| `p2?` | `number` \| [`MdGeEdge`](MdGeEdge.md) |
| `p3?` | [`MdGeEdge`](MdGeEdge.md) |
| `p4?` | [`MdGeFace`](MdGeFace.md) |

#### Returns

`void`

___

### AddDA

▸ **AddDA**(`Dis`, `Angle`, `E`, `F`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Dis` | `number` |
| `Angle` | `number` |
| `E` | [`MdGeEdge`](MdGeEdge.md) |
| `F` | [`MdGeFace`](MdGeFace.md) |

#### Returns

`void`

___

### Closed

▸ **Closed**(`IC`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |

#### Returns

`boolean`

___

### ClosedAndTangent

▸ **ClosedAndTangent**(`IC`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |

#### Returns

`boolean`

___

### Contour

▸ **Contour**(`E`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `E` | [`MdGeEdge`](MdGeEdge.md) |

#### Returns

`number`

___

### Dists

▸ **Dists**(`IC`, `Dis1`, `Dis2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |
| `Dis1` | `number` |
| `Dis2` | `number` |

#### Returns

`void`

___

### Edge

▸ **Edge**(`I`, `J`): [`MdGeEdge`](MdGeEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `I` | `number` |
| `J` | `number` |

#### Returns

[`MdGeEdge`](MdGeEdge.md)

___

### FirstVertex

▸ **FirstVertex**(`IC`): [`MdGeVertex`](MdGeVertex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |

#### Returns

[`MdGeVertex`](MdGeVertex.md)

___

### GetDist

▸ **GetDist**(`IC`, `Dis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |
| `Dis` | `number` |

#### Returns

`void`

___

### GetDistAngle

▸ **GetDistAngle**(`IC`, `Dis`, `Angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |
| `Dis` | `number` |
| `Angle` | `number` |

#### Returns

`void`

___

### IsDistanceAngle

▸ **IsDistanceAngle**(`IC`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |

#### Returns

`boolean`

___

### IsSymetric

▸ **IsSymetric**(`IC`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |

#### Returns

`boolean`

___

### IsTwoDistances

▸ **IsTwoDistances**(`IC`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |

#### Returns

`boolean`

___

### LastVertex

▸ **LastVertex**(`IC`): [`MdGeVertex`](MdGeVertex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |

#### Returns

[`MdGeVertex`](MdGeVertex.md)

___

### Length

▸ **Length**(`IC`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |

#### Returns

`number`

___

### NbContours

▸ **NbContours**(): `number`

#### Returns

`number`

___

### NbEdges

▸ **NbEdges**(`I`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `I` | `number` |

#### Returns

`number`

___

### NbSurf

▸ **NbSurf**(`IC`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |

#### Returns

`number`

___

### RelativeAbscissa

▸ **RelativeAbscissa**(`IC`, `V`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |
| `V` | [`MdGeVertex`](MdGeVertex.md) |

#### Returns

`number`

___

### Remove

▸ **Remove**(`E`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `E` | [`MdGeEdge`](MdGeEdge.md) |

#### Returns

`void`

___

### Reset

▸ **Reset**(): `void`

#### Returns

`void`

___

### ResetContour

▸ **ResetContour**(`IC`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |

#### Returns

`void`

___

### SetDist

▸ **SetDist**(`Dis`, `IC`, `F`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Dis` | `number` |
| `IC` | `number` |
| `F` | [`MdGeFace`](MdGeFace.md) |

#### Returns

`void`

___

### SetDistAngle

▸ **SetDistAngle**(`Dis`, `Angle`, `IC`, `F`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Dis` | `number` |
| `Angle` | `number` |
| `IC` | `number` |
| `F` | [`MdGeFace`](MdGeFace.md) |

#### Returns

`void`

___

### SetDists

▸ **SetDists**(`Dis1`, `Dis2`, `IC`, `F`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Dis1` | `number` |
| `Dis2` | `number` |
| `IC` | `number` |
| `F` | [`MdGeFace`](MdGeFace.md) |

#### Returns

`void`

___

### SetMode

▸ **SetMode**(`theMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theMode` | [`MxCFDSChamfMode`](../enums/MdGe.MxCFDSChamfMode.md) |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Simulate

▸ **Simulate**(`IC`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |

#### Returns

`void`

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
