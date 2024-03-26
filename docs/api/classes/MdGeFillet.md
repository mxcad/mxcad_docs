[mxcad API 文档](../README.md) / MdGeFillet

# Class: MdGeFillet

表示倒圆角

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeFillet`**

## Table of contents

### Constructors

- [constructor](MdGeFillet.md#constructor)

### Properties

- [imp](MdGeFillet.md#imp)

### Methods

- [Abscissa](MdGeFillet.md#abscissa)
- [Add](MdGeFillet.md#add)
- [BadShape](MdGeFillet.md#badshape)
- [Closed](MdGeFillet.md#closed)
- [ClosedAndTangent](MdGeFillet.md#closedandtangent)
- [Contour](MdGeFillet.md#contour)
- [Edge](MdGeFillet.md#edge)
- [FaultyContour](MdGeFillet.md#faultycontour)
- [FaultyVertex](MdGeFillet.md#faultyvertex)
- [FirstVertex](MdGeFillet.md#firstvertex)
- [GetFilletShape](MdGeFillet.md#getfilletshape)
- [HasResult](MdGeFillet.md#hasresult)
- [IsConstant](MdGeFillet.md#isconstant)
- [LastVertex](MdGeFillet.md#lastvertex)
- [Length](MdGeFillet.md#length)
- [NbComputedSurfaces](MdGeFillet.md#nbcomputedsurfaces)
- [NbContours](MdGeFillet.md#nbcontours)
- [NbEdges](MdGeFillet.md#nbedges)
- [NbFaultyContours](MdGeFillet.md#nbfaultycontours)
- [NbFaultyVertices](MdGeFillet.md#nbfaultyvertices)
- [NbSurf](MdGeFillet.md#nbsurf)
- [NbSurfaces](MdGeFillet.md#nbsurfaces)
- [Radius](MdGeFillet.md#radius)
- [RelativeAbscissa](MdGeFillet.md#relativeabscissa)
- [Remove](MdGeFillet.md#remove)
- [Reset](MdGeFillet.md#reset)
- [ResetContour](MdGeFillet.md#resetcontour)
- [SetFilletShape](MdGeFillet.md#setfilletshape)
- [SetParams](MdGeFillet.md#setparams)
- [SetRadius](MdGeFillet.md#setradius)
- [SetRadiusForEdge](MdGeFillet.md#setradiusforedge)
- [SetRadiusForVertex](MdGeFillet.md#setradiusforvertex)
- [Shape](MdGeFillet.md#shape)
- [Simulate](MdGeFillet.md#simulate)
- [getImp](MdGeFillet.md#getimp)
- [initTempObject](MdGeFillet.md#inittempobject)

## Constructors

### constructor

• **new MdGeFillet**(`p1?`, `p2?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeShape`](MdGeShape.md) |
| `p2?` | [`MxCF3dFilletShapeEnum`](../enums/MdGe.MxCF3dFilletShapeEnum.md) |

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

▸ **Add**(`p1`, `p2?`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` \| [`MdGeEdge`](MdGeEdge.md) |
| `p2?` | `number` \| [`MdGeEdge`](MdGeEdge.md) |
| `p3?` | [`MdGeEdge`](MdGeEdge.md) |

#### Returns

`void`

___

### BadShape

▸ **BadShape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

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

### FaultyContour

▸ **FaultyContour**(`I`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `I` | `number` |

#### Returns

`number`

___

### FaultyVertex

▸ **FaultyVertex**(`IV`): [`MdGeVertex`](MdGeVertex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `IV` | `number` |

#### Returns

[`MdGeVertex`](MdGeVertex.md)

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

### GetFilletShape

▸ **GetFilletShape**(): [`MxCF3dFilletShapeEnum`](../enums/MdGe.MxCF3dFilletShapeEnum.md)

#### Returns

[`MxCF3dFilletShapeEnum`](../enums/MdGe.MxCF3dFilletShapeEnum.md)

___

### HasResult

▸ **HasResult**(): `boolean`

#### Returns

`boolean`

___

### IsConstant

▸ **IsConstant**(`IC`, `E?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |
| `E?` | [`MdGeEdge`](MdGeEdge.md) |

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

### NbComputedSurfaces

▸ **NbComputedSurfaces**(`IC`): `number`

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

### NbFaultyContours

▸ **NbFaultyContours**(): `number`

#### Returns

`number`

___

### NbFaultyVertices

▸ **NbFaultyVertices**(): `number`

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

### NbSurfaces

▸ **NbSurfaces**(): `number`

#### Returns

`number`

___

### Radius

▸ **Radius**(`IC`, `E?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `IC` | `number` |
| `E?` | [`MdGeEdge`](MdGeEdge.md) |

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

### SetFilletShape

▸ **SetFilletShape**(`FShape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `FShape` | [`MxCF3dFilletShapeEnum`](../enums/MdGe.MxCF3dFilletShapeEnum.md) |

#### Returns

`void`

___

### SetParams

▸ **SetParams**(`Tang`, `Tesp`, `T2d`, `TApp3d`, `TolApp2d`, `Fleche`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Tang` | `number` |
| `Tesp` | `number` |
| `T2d` | `number` |
| `TApp3d` | `number` |
| `TolApp2d` | `number` |
| `Fleche` | `number` |

#### Returns

`void`

___

### SetRadius

▸ **SetRadius**(`p1`, `p2`, `p3`, `p4?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | `number` |
| `p3` | `number` |
| `p4?` | `number` |

#### Returns

`void`

___

### SetRadiusForEdge

▸ **SetRadiusForEdge**(`Radius`, `IC`, `E`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Radius` | `number` |
| `IC` | `number` |
| `E` | [`MdGeEdge`](MdGeEdge.md) |

#### Returns

`void`

___

### SetRadiusForVertex

▸ **SetRadiusForVertex**(`Radius`, `IC`, `V`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Radius` | `number` |
| `IC` | `number` |
| `V` | [`MdGeVertex`](MdGeVertex.md) |

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
