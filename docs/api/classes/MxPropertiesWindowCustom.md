[mxcad API 文档](../README.md) / MxPropertiesWindowCustom

# Class: MxPropertiesWindowCustom

MxPropertiesWindowCustom 属性窗口添加自定义属性.

## Table of contents

### Constructors

- [constructor](MxPropertiesWindowCustom.md#constructor)

### Properties

- [getPropertiesCall](MxPropertiesWindowCustom.md#getpropertiescall)
- [setPropertiesCall](MxPropertiesWindowCustom.md#setpropertiescall)

### Methods

- [getEntityProperties](MxPropertiesWindowCustom.md#getentityproperties)
- [onEvent\_getProperties](MxPropertiesWindowCustom.md#onevent_getproperties)
- [onEvent\_setProperties](MxPropertiesWindowCustom.md#onevent_setproperties)
- [setEntityProperties](MxPropertiesWindowCustom.md#setentityproperties)
- [setEntitySupportCustom](MxPropertiesWindowCustom.md#setentitysupportcustom)

## Constructors

### constructor

• **new MxPropertiesWindowCustom**()

## Properties

### getPropertiesCall

• `Private` **getPropertiesCall**: ``null`` \| (`id`: [`McObjectId`](McObjectId.md)) => [`MxPropertiesWindowCustomValue`](MxPropertiesWindowCustomValue.md)[] = `null`

___

### setPropertiesCall

• `Private` **setPropertiesCall**: ``null`` \| (`id`: [`McObjectId`](McObjectId.md), `prop`: [`MxPropertiesWindowCustomValue`](MxPropertiesWindowCustomValue.md)) => `void` = `null`

## Methods

### getEntityProperties

▸ **getEntityProperties**(`id`): [`MxPropertiesWindowCustomValue`](MxPropertiesWindowCustomValue.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) |

#### Returns

[`MxPropertiesWindowCustomValue`](MxPropertiesWindowCustomValue.md)[]

___

### onEvent\_getProperties

▸ **onEvent_getProperties**(`call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `call` | (`id`: [`McObjectId`](McObjectId.md)) => [`MxPropertiesWindowCustomValue`](MxPropertiesWindowCustomValue.md)[] |

#### Returns

`void`

___

### onEvent\_setProperties

▸ **onEvent_setProperties**(`call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `call` | (`id`: [`McObjectId`](McObjectId.md), `prop`: [`MxPropertiesWindowCustomValue`](MxPropertiesWindowCustomValue.md)) => `void` |

#### Returns

`void`

___

### setEntityProperties

▸ **setEntityProperties**(`id`, `prop`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) |
| `prop` | [`MxPropertiesWindowCustomValue`](MxPropertiesWindowCustomValue.md) |

#### Returns

`void`

___

### setEntitySupportCustom

▸ **setEntitySupportCustom**(`id`, `isCustomProperties?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) | `undefined` |
| `isCustomProperties` | `boolean` | `true` |

#### Returns

`void`
