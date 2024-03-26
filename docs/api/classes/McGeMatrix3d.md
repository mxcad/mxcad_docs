[mxcad API 文档](../README.md) / McGeMatrix3d

# Class: McGeMatrix3d

## Table of contents

### Constructors

- [constructor](McGeMatrix3d.md#constructor)

### Properties

- [imp](McGeMatrix3d.md#imp)
- [kIdentity](McGeMatrix3d.md#kidentity)

### Methods

- [clone](McGeMatrix3d.md#clone)
- [copy](McGeMatrix3d.md#copy)
- [det](McGeMatrix3d.md#det)
- [getData](McGeMatrix3d.md#getdata)
- [invert](McGeMatrix3d.md#invert)
- [isEqualTo](McGeMatrix3d.md#isequalto)
- [isSingular](McGeMatrix3d.md#issingular)
- [postMultBy](McGeMatrix3d.md#postmultby)
- [preMultBy](McGeMatrix3d.md#premultby)
- [scale](McGeMatrix3d.md#scale)
- [setCoordSystem](McGeMatrix3d.md#setcoordsystem)
- [setMirror](McGeMatrix3d.md#setmirror)
- [setToIdentity](McGeMatrix3d.md#settoidentity)
- [setToProduct](McGeMatrix3d.md#settoproduct)
- [setToRotation](McGeMatrix3d.md#settorotation)
- [setToScaling](McGeMatrix3d.md#settoscaling)
- [setToTranslation](McGeMatrix3d.md#settotranslation)
- [transposeIt](McGeMatrix3d.md#transposeit)

## Constructors

### constructor

• **new McGeMatrix3d**(`imp?`)

构造函数。

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp?` | `object` |

## Properties

### imp

• **imp**: `any`

___

### kIdentity

▪ `Static` **kIdentity**: [`McGeMatrix3d`](McGeMatrix3d.md)

## Methods

### clone

▸ **clone**(): [`McGeMatrix3d`](McGeMatrix3d.md)

刻隆一个对对象

#### Returns

[`McGeMatrix3d`](McGeMatrix3d.md)

___

### copy

▸ **copy**(`val`): [`McGeMatrix3d`](McGeMatrix3d.md)

复制对象的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McGeMatrix3d`](McGeMatrix3d.md) |

#### Returns

[`McGeMatrix3d`](McGeMatrix3d.md)

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

▸ **invert**(): [`McGeMatrix3d`](McGeMatrix3d.md)

求矩阵的逆矩阵。

#### Returns

[`McGeMatrix3d`](McGeMatrix3d.md)

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

▸ **postMultBy**(`rightSide`): [`McGeMatrix3d`](McGeMatrix3d.md)

右乘指定的矩阵。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rightSide` | [`McGeMatrix3d`](McGeMatrix3d.md) | 右侧矩阵。 |

#### Returns

[`McGeMatrix3d`](McGeMatrix3d.md)

___

### preMultBy

▸ **preMultBy**(`leftSide`): [`McGeMatrix3d`](McGeMatrix3d.md)

左乘指定的矩阵。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `leftSide` | [`McGeMatrix3d`](McGeMatrix3d.md) | 左侧矩阵。 |

#### Returns

[`McGeMatrix3d`](McGeMatrix3d.md)

___

### scale

▸ **scale**(): `number`

获取矩阵的缩放因子。

#### Returns

`number`

矩阵的缩放因子。

___

### setCoordSystem

▸ **setCoordSystem**(`origin`, `xAxis`, `yAxis`, `zAxis`): [`McGeMatrix3d`](McGeMatrix3d.md)

将矩阵设置为指定的坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | [`McGePoint3d`](McGePoint3d.md) | 坐标系原点。 |
| `xAxis` | [`McGeVector3d`](McGeVector3d.md) | X 轴向量。 |
| `yAxis` | [`McGeVector3d`](McGeVector3d.md) | Y 轴向量。 |
| `zAxis` | [`McGeVector3d`](McGeVector3d.md) | Z 轴向量。 |

#### Returns

[`McGeMatrix3d`](McGeMatrix3d.md)

___

### setMirror

▸ **setMirror**(`pt1`, `pt2`): [`McGeMatrix3d`](McGeMatrix3d.md)

将矩阵设置为镜向矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt1` | [`McGePoint3d`](McGePoint3d.md) |
| `pt2` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

[`McGeMatrix3d`](McGeMatrix3d.md)

___

### setToIdentity

▸ **setToIdentity**(): [`McGeMatrix3d`](McGeMatrix3d.md)

将矩阵设置为单位矩阵。

#### Returns

[`McGeMatrix3d`](McGeMatrix3d.md)

___

### setToProduct

▸ **setToProduct**(`mat1`, `mat2`): [`McGeMatrix3d`](McGeMatrix3d.md)

将矩阵设置为两个矩阵的乘积。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat1` | [`McGeMatrix3d`](McGeMatrix3d.md) | 第一个矩阵。 |
| `mat2` | [`McGeMatrix3d`](McGeMatrix3d.md) | 第二个矩阵。 |

#### Returns

[`McGeMatrix3d`](McGeMatrix3d.md)

___

### setToRotation

▸ **setToRotation**(`angle`, `axis`, `center`): [`McGeMatrix3d`](McGeMatrix3d.md)

将矩阵设置为绕指定轴旋转指定角度的矩阵。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | 旋转角度。 |
| `axis` | [`McGeVector3d`](McGeVector3d.md) | 旋转轴向量。 |
| `center` | [`McGePoint3d`](McGePoint3d.md) | 旋转中心点。 |

#### Returns

[`McGeMatrix3d`](McGeMatrix3d.md)

___

### setToScaling

▸ **setToScaling**(`scaleAll`, `center`): [`McGeMatrix3d`](McGeMatrix3d.md)

将矩阵设置为缩放矩阵。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scaleAll` | `number` | 缩放因子。 |
| `center` | [`McGePoint3d`](McGePoint3d.md) | 缩放中心点。 |

#### Returns

[`McGeMatrix3d`](McGeMatrix3d.md)

___

### setToTranslation

▸ **setToTranslation**(`vec`): [`McGeMatrix3d`](McGeMatrix3d.md)

将矩阵设置为平移矩阵。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`McGeVector3d`](McGeVector3d.md) | 平移向量。 |

#### Returns

[`McGeMatrix3d`](McGeMatrix3d.md)

___

### transposeIt

▸ **transposeIt**(): [`McGeMatrix3d`](McGeMatrix3d.md)

将矩阵转置。

#### Returns

[`McGeMatrix3d`](McGeMatrix3d.md)
