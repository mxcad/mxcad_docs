[mxcad API 文档](../README.md) / MdGeShape

# Class: MdGeShape

表示一个形状

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeShape`**

  ↳↳ [`MdGeVertex`](MdGeVertex.md)

  ↳↳ [`MdGeEdge`](MdGeEdge.md)

  ↳↳ [`MdGeWire`](MdGeWire.md)

  ↳↳ [`MdGeFace`](MdGeFace.md)

  ↳↳ [`MdGeShell`](MdGeShell.md)

  ↳↳ [`MdGeSolid`](MdGeSolid.md)

  ↳↳ [`MdGeCompSolid`](MdGeCompSolid.md)

  ↳↳ [`MdGeCompound`](MdGeCompound.md)

## Table of contents

### Constructors

- [constructor](MdGeShape.md#constructor)

### Properties

- [imp](MdGeShape.md#imp)

### Methods

- [Common](MdGeShape.md#common)
- [Cut](MdGeShape.md#cut)
- [Draw](MdGeShape.md#draw)
- [Fuse](MdGeShape.md#fuse)
- [IsNull](MdGeShape.md#isnull)
- [MirrorByAxis](MdGeShape.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeShape.md#mirrorbycsysr)
- [MirrorByPoint](MdGeShape.md#mirrorbypoint)
- [MirroredByAxis](MdGeShape.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeShape.md#mirroredbycsysr)
- [MirroredByPoint](MdGeShape.md#mirroredbypoint)
- [Quantities](MdGeShape.md#quantities)
- [Rotate](MdGeShape.md#rotate)
- [Rotated](MdGeShape.md#rotated)
- [Scale](MdGeShape.md#scale)
- [Scaled](MdGeShape.md#scaled)
- [Section](MdGeShape.md#section)
- [SetColor](MdGeShape.md#setcolor)
- [SetMaterialAspect](MdGeShape.md#setmaterialaspect)
- [SetTextureFileName](MdGeShape.md#settexturefilename)
- [SetTextureOrigin](MdGeShape.md#settextureorigin)
- [SetTextureRepeat](MdGeShape.md#settexturerepeat)
- [SetTextureScale](MdGeShape.md#settexturescale)
- [ShapeType](MdGeShape.md#shapetype)
- [TextureOrigin](MdGeShape.md#textureorigin)
- [TextureRepeat](MdGeShape.md#texturerepeat)
- [TextureScale](MdGeShape.md#texturescale)
- [TextureScaleU](MdGeShape.md#texturescaleu)
- [TextureScaleV](MdGeShape.md#texturescalev)
- [TextureUOrigin](MdGeShape.md#textureuorigin)
- [TextureVOrigin](MdGeShape.md#texturevorigin)
- [Transform](MdGeShape.md#transform)
- [Transformed](MdGeShape.md#transformed)
- [TranslateBy2Points](MdGeShape.md#translateby2points)
- [TranslateByVec](MdGeShape.md#translatebyvec)
- [TranslatedBy2Points](MdGeShape.md#translatedby2points)
- [TranslatedByVec](MdGeShape.md#translatedbyvec)
- [URepeat](MdGeShape.md#urepeat)
- [VRepeat](MdGeShape.md#vrepeat)
- [getImp](MdGeShape.md#getimp)
- [initTempObject](MdGeShape.md#inittempobject)

## Constructors

### constructor

• **new MdGeShape**(`p?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p?` | `object` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Common

▸ **Common**(`other`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Cut

▸ **Cut**(`remove`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `remove` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Draw

▸ **Draw**(): `void`

#### Returns

`void`

___

### Fuse

▸ **Fuse**(`other`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### IsNull

▸ **IsNull**(): `boolean`

#### Returns

`boolean`

___

### MirrorByAxis

▸ **MirrorByAxis**(`axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`csysr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `csysr` | [`MdGeCSYSR`](MdGeCSYSR.md) |

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

▸ **MirroredByAxis**(`axis`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`csysr`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `csysr` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Quantities

▸ **Quantities**(): [`MdGeArray1OfReal`](MdGeArray1OfReal.md)

#### Returns

[`MdGeArray1OfReal`](MdGeArray1OfReal.md)

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

___

### Section

▸ **Section**(`other`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### SetColor

▸ **SetColor**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`void`

___

### SetMaterialAspect

▸ **SetMaterialAspect**(`material`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | [`MdGeMaterialAspect`](MdGeMaterialAspect.md) |

#### Returns

`void`

___

### SetTextureFileName

▸ **SetTextureFileName**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

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

___

### ShapeType

▸ **ShapeType**(): [`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md)

#### Returns

[`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md)

___

### TextureOrigin

▸ **TextureOrigin**(): `boolean`

#### Returns

`boolean`

___

### TextureRepeat

▸ **TextureRepeat**(): `boolean`

#### Returns

`boolean`

___

### TextureScale

▸ **TextureScale**(): `boolean`

#### Returns

`boolean`

___

### TextureScaleU

▸ **TextureScaleU**(): `number`

#### Returns

`number`

___

### TextureScaleV

▸ **TextureScaleV**(): `number`

#### Returns

`number`

___

### TextureUOrigin

▸ **TextureUOrigin**(): `number`

#### Returns

`number`

___

### TextureVOrigin

▸ **TextureVOrigin**(): `number`

#### Returns

`number`

___

### Transform

▸ **Transform**(`trsf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `trsf` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`trsf`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `trsf` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

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

___

### TranslateByVec

▸ **TranslateByVec**(`vec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`void`

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

___

### TranslatedByVec

▸ **TranslatedByVec**(`vec`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### URepeat

▸ **URepeat**(): `number`

#### Returns

`number`

___

### VRepeat

▸ **VRepeat**(): `number`

#### Returns

`number`

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
