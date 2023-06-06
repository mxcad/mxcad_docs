[mxcad API 文档](../README.md) / McGeMatrix3d

# Interface: McGeMatrix3d

表示三维矩阵的对象。

## Table of contents

### Methods

- [constructor](McGeMatrix3d.md#constructor)
- [det](McGeMatrix3d.md#det)
- [getData](McGeMatrix3d.md#getdata)
- [invert](McGeMatrix3d.md#invert)
- [isEqualTo](McGeMatrix3d.md#isequalto)
- [isSingular](McGeMatrix3d.md#issingular)
- [postMultBy](McGeMatrix3d.md#postmultby)
- [preMultBy](McGeMatrix3d.md#premultby)
- [scale](McGeMatrix3d.md#scale)
- [setCoordSystem](McGeMatrix3d.md#setcoordsystem)
- [setToIdentity](McGeMatrix3d.md#settoidentity)
- [setToProduct](McGeMatrix3d.md#settoproduct)
- [setToRotation](McGeMatrix3d.md#settorotation)
- [setToScaling](McGeMatrix3d.md#settoscaling)
- [setToTranslation](McGeMatrix3d.md#settotranslation)
- [transposeIt](McGeMatrix3d.md#transposeit)

## Methods

### constructor

▸ **constructor**(): `any`

构造函数。

#### Returns

`any`

___

### det

▸ **det**(): `number`

求矩阵的行列式。

#### Returns

`number`

矩阵的行列式。

___

### getData

▸ **getData**(`row`, `col`): `number`

获取矩阵中指定位置的元素值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | 行索引。 |
| `col` | `number` | 列索引。 |

#### Returns

`number`

指定位置的元素值。

___

### invert

▸ **invert**(): `void`

求矩阵的逆矩阵。

#### Returns

`void`

___

### isEqualTo

▸ **isEqualTo**(`mat`): `boolean`

判断矩阵是否与指定的矩阵相等。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat` | [`McGeMatrix3d`](McGeMatrix3d.md) | 指定的矩阵。 |

#### Returns

`boolean`

如果相等返回 true，否则返回 false。

___

### isSingular

▸ **isSingular**(): `boolean`

判断矩阵是否为奇异矩阵。

#### Returns

`boolean`

如果是奇异矩阵返回 true，否则返回 false。

___

### postMultBy

▸ **postMultBy**(`rightSide`): `void`

右乘指定的矩阵。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rightSide` | [`McGeMatrix3d`](McGeMatrix3d.md) | 右侧矩阵。 |

#### Returns

`void`

___

### preMultBy

▸ **preMultBy**(`leftSide`): `void`

左乘指定的矩阵。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `leftSide` | [`McGeMatrix3d`](McGeMatrix3d.md) | 左侧矩阵。 |

#### Returns

`void`

___

### scale

▸ **scale**(): `number`

获取矩阵的缩放因子。

#### Returns

`number`

矩阵的缩放因子。

___

### setCoordSystem

▸ **setCoordSystem**(`origin`, `xAxis`, `yAxis`, `zAxis`): `void`

将矩阵设置为指定的坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | [`McGePoint3d`](McGePoint3d.md) | 坐标系原点。 |
| `xAxis` | [`McGeVector3d`](McGeVector3d.md) | X 轴向量。 |
| `yAxis` | [`McGeVector3d`](McGeVector3d.md) | Y 轴向量。 |
| `zAxis` | [`McGeVector3d`](McGeVector3d.md) | Z 轴向量。 |

#### Returns

`void`

___

### setToIdentity

▸ **setToIdentity**(): `void`

将矩阵设置为单位矩阵。

#### Returns

`void`

___

### setToProduct

▸ **setToProduct**(`mat1`, `mat2`): `void`

将矩阵设置为两个矩阵的乘积。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat1` | [`McGeMatrix3d`](McGeMatrix3d.md) | 第一个矩阵。 |
| `mat2` | [`McGeMatrix3d`](McGeMatrix3d.md) | 第二个矩阵。 |

#### Returns

`void`

___

### setToRotation

▸ **setToRotation**(`angle`, `axis`, `center`): `void`

将矩阵设置为绕指定轴旋转指定角度的矩阵。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | 旋转角度。 |
| `axis` | [`McGeVector3d`](McGeVector3d.md) | 旋转轴向量。 |
| `center` | [`McGePoint3d`](McGePoint3d.md) | 旋转中心点。 |

#### Returns

`void`

___

### setToScaling

▸ **setToScaling**(`scaleAll`, `center`): `void`

将矩阵设置为缩放矩阵。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scaleAll` | `number` | 缩放因子。 |
| `center` | [`McGePoint3d`](McGePoint3d.md) | 缩放中心点。 |

#### Returns

`void`

___

### setToTranslation

▸ **setToTranslation**(`vec`): `void`

将矩阵设置为平移矩阵。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`McGeVector3d`](McGeVector3d.md) | 平移向量。 |

#### Returns

`void`

___

### transposeIt

▸ **transposeIt**(): `void`

将矩阵转置。

#### Returns

`void`
