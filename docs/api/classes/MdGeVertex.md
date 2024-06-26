[mxcad API 文档](../README.md) / MdGeVertex

# Class: MdGeVertex

表示一个点形状

## Hierarchy

- [`MdGeShape`](MdGeShape.md)

  ↳ **`MdGeVertex`**

## Table of contents

### Constructors

- [constructor](MdGeVertex.md#constructor)

### Properties

- [imp](MdGeVertex.md#imp)

### Methods

- [Common](MdGeVertex.md#common)
- [Cut](MdGeVertex.md#cut)
- [Draw](MdGeVertex.md#draw)
- [Fuse](MdGeVertex.md#fuse)
- [IsNull](MdGeVertex.md#isnull)
- [MirrorByAxis](MdGeVertex.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeVertex.md#mirrorbycsysr)
- [MirrorByPoint](MdGeVertex.md#mirrorbypoint)
- [MirroredByAxis](MdGeVertex.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeVertex.md#mirroredbycsysr)
- [MirroredByPoint](MdGeVertex.md#mirroredbypoint)
- [Quantities](MdGeVertex.md#quantities)
- [Rotate](MdGeVertex.md#rotate)
- [Rotated](MdGeVertex.md#rotated)
- [Scale](MdGeVertex.md#scale)
- [Scaled](MdGeVertex.md#scaled)
- [Section](MdGeVertex.md#section)
- [SetColor](MdGeVertex.md#setcolor)
- [SetMaterialAspect](MdGeVertex.md#setmaterialaspect)
- [SetTextureFileName](MdGeVertex.md#settexturefilename)
- [SetTextureOrigin](MdGeVertex.md#settextureorigin)
- [SetTextureRepeat](MdGeVertex.md#settexturerepeat)
- [SetTextureScale](MdGeVertex.md#settexturescale)
- [ShapeType](MdGeVertex.md#shapetype)
- [TextureOrigin](MdGeVertex.md#textureorigin)
- [TextureRepeat](MdGeVertex.md#texturerepeat)
- [TextureScale](MdGeVertex.md#texturescale)
- [TextureScaleU](MdGeVertex.md#texturescaleu)
- [TextureScaleV](MdGeVertex.md#texturescalev)
- [TextureUOrigin](MdGeVertex.md#textureuorigin)
- [TextureVOrigin](MdGeVertex.md#texturevorigin)
- [Transform](MdGeVertex.md#transform)
- [Transformed](MdGeVertex.md#transformed)
- [TranslateBy2Points](MdGeVertex.md#translateby2points)
- [TranslateByVec](MdGeVertex.md#translatebyvec)
- [TranslatedBy2Points](MdGeVertex.md#translatedby2points)
- [TranslatedByVec](MdGeVertex.md#translatedbyvec)
- [URepeat](MdGeVertex.md#urepeat)
- [VRepeat](MdGeVertex.md#vrepeat)
- [getImp](MdGeVertex.md#getimp)
- [initTempObject](MdGeVertex.md#inittempobject)

## Constructors

### constructor

• **new MdGeVertex**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` |
| `p2?` | `number` |
| `p3?` | `number` |

#### Overrides

[MdGeShape](MdGeShape.md).[constructor](MdGeShape.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeShape](MdGeShape.md).[imp](MdGeShape.md#imp)

## Methods

### Common

▸ **Common**(`other`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

#### Inherited from

[MdGeShape](MdGeShape.md).[Common](MdGeShape.md#common)

___

### Cut

▸ **Cut**(`remove`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `remove` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

#### Inherited from

[MdGeShape](MdGeShape.md).[Cut](MdGeShape.md#cut)

___

### Draw

▸ **Draw**(): `void`

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[Draw](MdGeShape.md#draw)

___

### Fuse

▸ **Fuse**(`other`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

#### Inherited from

[MdGeShape](MdGeShape.md).[Fuse](MdGeShape.md#fuse)

___

### IsNull

▸ **IsNull**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MdGeShape](MdGeShape.md).[IsNull](MdGeShape.md#isnull)

___

### MirrorByAxis

▸ **MirrorByAxis**(`axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[MirrorByAxis](MdGeShape.md#mirrorbyaxis)

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`csysr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `csysr` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[MirrorByCSYSR](MdGeShape.md#mirrorbycsysr)

___

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[MirrorByPoint](MdGeShape.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`axis`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

#### Inherited from

[MdGeShape](MdGeShape.md).[MirroredByAxis](MdGeShape.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`csysr`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `csysr` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

#### Inherited from

[MdGeShape](MdGeShape.md).[MirroredByCSYSR](MdGeShape.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

#### Inherited from

[MdGeShape](MdGeShape.md).[MirroredByPoint](MdGeShape.md#mirroredbypoint)

___

### Quantities

▸ **Quantities**(): [`MdGeArray1OfReal`](MdGeArray1OfReal.md)

#### Returns

[`MdGeArray1OfReal`](MdGeArray1OfReal.md)

#### Inherited from

[MdGeShape](MdGeShape.md).[Quantities](MdGeShape.md#quantities)

___

### Rotate

▸ **Rotate**(`axis`, `ang`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |
| `ang` | `number` |

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[Rotate](MdGeShape.md#rotate)

___

### Rotated

▸ **Rotated**(`axis`, `ang`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |
| `ang` | `number` |

#### Returns

[`MdGeShape`](MdGeShape.md)

#### Inherited from

[MdGeShape](MdGeShape.md).[Rotated](MdGeShape.md#rotated)

___

### Scale

▸ **Scale**(`point`, `s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`MdGePoint`](MdGePoint.md) |
| `s` | `number` |

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[Scale](MdGeShape.md#scale)

___

### Scaled

▸ **Scaled**(`point`, `s`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`MdGePoint`](MdGePoint.md) |
| `s` | `number` |

#### Returns

[`MdGeShape`](MdGeShape.md)

#### Inherited from

[MdGeShape](MdGeShape.md).[Scaled](MdGeShape.md#scaled)

___

### Section

▸ **Section**(`other`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

#### Inherited from

[MdGeShape](MdGeShape.md).[Section](MdGeShape.md#section)

___

### SetColor

▸ **SetColor**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[SetColor](MdGeShape.md#setcolor)

___

### SetMaterialAspect

▸ **SetMaterialAspect**(`material`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | [`MdGeMaterialAspect`](MdGeMaterialAspect.md) |

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[SetMaterialAspect](MdGeShape.md#setmaterialaspect)

___

### SetTextureFileName

▸ **SetTextureFileName**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[SetTextureFileName](MdGeShape.md#settexturefilename)

___

### SetTextureOrigin

▸ **SetTextureOrigin**(`theToSetTextureOrigin`, `theUOrigin`, `theVOrigin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theToSetTextureOrigin` | `boolean` |
| `theUOrigin` | `number` |
| `theVOrigin` | `number` |

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[SetTextureOrigin](MdGeShape.md#settextureorigin)

___

### SetTextureRepeat

▸ **SetTextureRepeat**(`theToRepeat`, `theURepeat`, `theVRepeat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theToRepeat` | `boolean` |
| `theURepeat` | `number` |
| `theVRepeat` | `number` |

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[SetTextureRepeat](MdGeShape.md#settexturerepeat)

___

### SetTextureScale

▸ **SetTextureScale**(`theToSetTextureScale`, `theScaleU`, `theScaleV`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theToSetTextureScale` | `boolean` |
| `theScaleU` | `number` |
| `theScaleV` | `number` |

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[SetTextureScale](MdGeShape.md#settexturescale)

___

### ShapeType

▸ **ShapeType**(): [`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md)

#### Returns

[`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md)

#### Inherited from

[MdGeShape](MdGeShape.md).[ShapeType](MdGeShape.md#shapetype)

___

### TextureOrigin

▸ **TextureOrigin**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MdGeShape](MdGeShape.md).[TextureOrigin](MdGeShape.md#textureorigin)

___

### TextureRepeat

▸ **TextureRepeat**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MdGeShape](MdGeShape.md).[TextureRepeat](MdGeShape.md#texturerepeat)

___

### TextureScale

▸ **TextureScale**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MdGeShape](MdGeShape.md).[TextureScale](MdGeShape.md#texturescale)

___

### TextureScaleU

▸ **TextureScaleU**(): `number`

#### Returns

`number`

#### Inherited from

[MdGeShape](MdGeShape.md).[TextureScaleU](MdGeShape.md#texturescaleu)

___

### TextureScaleV

▸ **TextureScaleV**(): `number`

#### Returns

`number`

#### Inherited from

[MdGeShape](MdGeShape.md).[TextureScaleV](MdGeShape.md#texturescalev)

___

### TextureUOrigin

▸ **TextureUOrigin**(): `number`

#### Returns

`number`

#### Inherited from

[MdGeShape](MdGeShape.md).[TextureUOrigin](MdGeShape.md#textureuorigin)

___

### TextureVOrigin

▸ **TextureVOrigin**(): `number`

#### Returns

`number`

#### Inherited from

[MdGeShape](MdGeShape.md).[TextureVOrigin](MdGeShape.md#texturevorigin)

___

### Transform

▸ **Transform**(`trsf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `trsf` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[Transform](MdGeShape.md#transform)

___

### Transformed

▸ **Transformed**(`trsf`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `trsf` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

#### Inherited from

[MdGeShape](MdGeShape.md).[Transformed](MdGeShape.md#transformed)

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`point1`, `point2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point1` | [`MdGePoint`](MdGePoint.md) |
| `point2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[TranslateBy2Points](MdGeShape.md#translateby2points)

___

### TranslateByVec

▸ **TranslateByVec**(`vec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`void`

#### Inherited from

[MdGeShape](MdGeShape.md).[TranslateByVec](MdGeShape.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`point1`, `point2`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point1` | [`MdGePoint`](MdGePoint.md) |
| `point2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

#### Inherited from

[MdGeShape](MdGeShape.md).[TranslatedBy2Points](MdGeShape.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`vec`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

#### Inherited from

[MdGeShape](MdGeShape.md).[TranslatedByVec](MdGeShape.md#translatedbyvec)

___

### URepeat

▸ **URepeat**(): `number`

#### Returns

`number`

#### Inherited from

[MdGeShape](MdGeShape.md).[URepeat](MdGeShape.md#urepeat)

___

### VRepeat

▸ **VRepeat**(): `number`

#### Returns

`number`

#### Inherited from

[MdGeShape](MdGeShape.md).[VRepeat](MdGeShape.md#vrepeat)

___

### getImp

▸ **getImp**(): `any`

#### Returns

`any`

#### Inherited from

[MdGeShape](MdGeShape.md).[getImp](MdGeShape.md#getimp)

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

[MdGeShape](MdGeShape.md).[initTempObject](MdGeShape.md#inittempobject)
