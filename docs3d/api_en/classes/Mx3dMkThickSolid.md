[mxcad_3d API Document](../README. md)/Mx3dMkThickSolid

# Class: Mx3dMkThickSolid

The class that represents modeling thick walled solids inherits from Mx3dMkObject.

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkThickSolid`**

## Table of contents

### Constructors

- [constructor](Mx3dMkThickSolid.md#constructor)

### Methods

- [Build](Mx3dMkThickSolid.md#build)
- [IsDone](Mx3dMkThickSolid.md#isdone)
- [MakeThickSolidByJoin](Mx3dMkThickSolid.md#makethicksolidbyjoin)
- [MakeThickSolidBySimple](Mx3dMkThickSolid.md#makethicksolidbysimple)
- [Shape](Mx3dMkThickSolid.md#shape)

## Constructors

### constructor

• **new Mx3dMkThickSolid**()

Constructor, initialize thick walled solid objects.

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

Implement modeling algorithms for thick walled solids.
This method completes the construction process of thick walled solids.

#### Returns

`void`

___

### IsDone

▸ **IsDone**(): `boolean`

Check if the modeling algorithm has been executed successfully.

#### Returns

`boolean`

If the modeling algorithm completes execution, return true; Otherwise, return false.

___

### MakeThickSolidByJoin

▸ **MakeThickSolidByJoin**(`S`, `ClosingFaces`, `Offset`, `Tol`, `Mode?`, `Intersection?`, `SelfInter?`, `Join?`, `RemoveIntEdges?`): `void`

Build thick walled solids using connection algorithms.
This method is based on creating a thick walled solid using a solid and a set of closed surfaces.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
|S | [Mx3dShapeObject] (Mx3dShapeObject. md) | undefined | The initial solid object to be used|
|ClosingFaces | [Mx3dShapeObject] (Mx3dShapeObject. md) [] | undefined | Object array to be removed|
|Offset | number | undefined | The thickness value defines the thickness of the wall. Positive values indicate the outer side, while negative values indicate the inner side|
|Tol | number | undefined | The tolerance value defines the coincidence standard for generating shapes|
|Mode | [MxOffsetModeenum] (../enums/MdGe. MxOffsetModeenum. md) | MdGe. MxOffsetModeenum. Offset_Skin | Construction mode, default to BRepOffset_Skin, defines the parallel line construction method for free edges|
|Intersection | boolean | false | Calculate intersection, not calculated by default|
|SelfInter | boolean | false | Whether to eliminate self crossing, default not to eliminate|
|Join | [MxGAJoinTypeenum] (../ennus/MdGe. MxGAJoinTypeenum. md) | MdGe. MxGAJoinTypeenum. GA-Arc | Connection type, default to GeomAbs_Src, used to fill gaps between parallel lines|
|` RemoveIntEdges ` | ` boolean ` | ` false ` | Whether to remove internal edges, default not to remove|

#### Returns

`void`

___

### MakeThickSolidBySimple

▸ **MakeThickSolidBySimple**(`theS`, `theOffsetValue`): `void`

Build thick walled solids using simple algorithms.
This method is based on creating a thick walled solid using a solid and an offset value. This algorithm does not support face removal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheS | [Mx3dShapeObject] (Mx3dShapeObject. md) | The initial solid object to be used|
|The OffsetValue | number | thickness value, which defines the thickness of the wall|

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Obtain the shape object of a thick walled solid.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The shape object of a thick walled solid.
