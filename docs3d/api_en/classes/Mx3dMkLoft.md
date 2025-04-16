[mxcad_3d API Document](../README. md)/Mx3dMkLoft

# Class: Mx3dMkLoft

The class representing the modeling and layout body inherits from Mx3dMkObject.

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkLoft`**

## Table of contents

### Constructors

- [constructor](Mx3dMkLoft.md#constructor)

### Methods

- [AddVertex](Mx3dMkLoft.md#addvertex)
- [AddWire](Mx3dMkLoft.md#addwire)
- [Build](Mx3dMkLoft.md#build)
- [Continuity](Mx3dMkLoft.md#continuity)
- [IsDone](Mx3dMkLoft.md#isdone)
- [SetContinuity](Mx3dMkLoft.md#setcontinuity)
- [SetSmoothing](Mx3dMkLoft.md#setsmoothing)
- [Shape](Mx3dMkLoft.md#shape)
- [UseSmoothing](Mx3dMkLoft.md#usesmoothing)

## Constructors

### constructor

• **new Mx3dMkLoft**(`isSolid?`, `ruled?`, `pres3d?`)

Constructor, initialize the layout object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isSolid?` | ` Boolean | Whether to create a solid layout, default is false|
| `ruled?` | ` Boolean | Whether to use rule layout, default is false|
| `pres3d?` | ` Number ` | The plane resolution of the layout body is set to 0 by default|

#### Overrides

Mx3dMkObject.constructor

## Methods

### AddVertex

▸ **AddVertex**(`aVertex`): `void`

Add a vertex to the loft.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|AVertex | [Mx3dShapeVertex] (Mx3dShapeVertex. md) | The vertex object to be added|

#### Returns

`void`

___

### AddWire

▸ **AddWire**(`wire`): `void`

Add a wire to the layout body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Wire | [Mx3dShapeWire] (Mx3dShapeWire. md) | The wire object to be added|

#### Returns

`void`

___

### Build

▸ **Build**(): `void`

Execute the modeling algorithm for the layout body.

#### Returns

`void`

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Obtain the continuity of the layout body.

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

The continuity enumeration value of the current layout body.

___

### IsDone

▸ **IsDone**(): `boolean`

Check if the modeling algorithm has been executed successfully.

#### Returns

`boolean`

The flag indicating whether the modeling algorithm execution has been completed, with true indicating completion and false indicating failure.

___

### SetContinuity

▸ **SetContinuity**(`C`): `void`

Set the continuity of the layout body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|C | [MxGAShapeenum] (../enums/MdGe. MxGAShapeenum. md) | The continuity enumeration value of the shape|

#### Returns

`void`

___

### SetSmoothing

▸ **SetSmoothing**(`UseSmoothing`): `void`

Set whether to use smoothing processing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UseSmoothing | boolean | Use the flag for smoothing processing|

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Obtain the shape of the layout body.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The shape object of the layout body.

___

### UseSmoothing

▸ **UseSmoothing**(): `boolean`

Check if smoothing is used.

#### Returns

`boolean`

The usage status of smoothing processing, true is used, false is not used.
