# Preview Mode

## `class` `Archetype`

### `variable` `int` `id`

The unique identifier of the archetype.

### `variable` `VariablesArray<EntitySharedMemoryId>` `sharedMemory`

Generic shared memory storage accessible by other entities.

### `variable` `EntityInfoGroup` `info`

Contains state information of the entity. This variable is read-only in all callback functions.

### `variable` `string` `name`

The name of the archetype, referenced by entities in level data. Special names have specific effects:
- `#BPM_CHANGE`: Signals a BPM change. Entities with this name must also provide data named `#BEAT` and `#BPM`.
- `#TIMESCALE_CHANGE`: Signals a time scale change. Entities with this name must also provide data named `#BEAT` and `#TIMESCALE`.

### `variable` `double` `preprocessOrder`

Determines the order of the `preprocess` callback function. Smaller values execute earlier.

### `variable` `double` `renderOrder`

Determines the order of the `render` callback function. Smaller values execute earlier.

### `function` `preprocess`

**Description**: Callback function executed during preprocessing.

**Returns**:

| Return Type | Description |
|-------------|-------------|
| `SonolusApi` | The signature of the `SonolusApi` function |

### `function` `render`

**Description**: Callback function executed for rendering.

**Returns**:

| Return Type | Description |
|-------------|-------------|
| `SonolusApi` | The signature of the `SonolusApi` function |

## `function` `defineImport`

**Description**: Defines an import data for the `EntityData` block. This macro automatically allocates memory and creates a variable for the imported data.

**Parameters**:

| Parameter | Type     | Default Value | Description                                                                                             |
|-----------|----------|---------------|---------------------------------------------------------------------------------------------------------|
| `name`    | `string` | *required*    | The name of the imported data. This will be used as a variable name in the code and a key in the JSON object.                         |

## `function` `defineImportDetailed`

**Description**: Defines a detailed import for the `EntityData` block, allowing a custom JSON key for the import. This macro also allocates memory and creates a variable for the imported data.

**Parameters**:

| Parameter     | Type     | Default Value | Description                                                                                             |
|---------------|----------|---------------|---------------------------------------------------------------------------------------------------------|
| `varName`     | `string` | *required*    | The name of the variable in the code.                                                                   |
| `jsonName`    | `string` | *required*    | The key of the imported data in the JSON object.                                                       |

## `function` `BuildData`

**Description**: Finalizes and writes the engine preview data into a GZIP-compressed JSON file.

**Parameters**:

| Parameter | Type     | Default Value | Description                                                                                             |
|-----------|----------|---------------|---------------------------------------------------------------------------------------------------------|
| `...`    | *archetype classes* | *required*    | All the names of the archetype class                                                                 |

## `function` `getAid`

**Description**: Retrieves the identifier for a given archetype class name.

**Parameters**:

| Parameter     | Type     | Default Value | Description                                                                                             |
|---------------|----------|---------------|---------------------------------------------------------------------------------------------------------|
| `archetype`   | `string` | *required*    | The name of the archetype class.                                                                              |

**Returns**:

| Return Type | Description                                                                                             |
|-------------|---------------------------------------------------------------------------------------------------------|
| `int`       | The ID of the archetype. If the archetype is not found, returns `-1`.                                   |