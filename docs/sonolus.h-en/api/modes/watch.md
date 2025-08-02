# Watch Mode

## `class` `Archetype`

### `variable` `int` `id`

The unique identifier of the archetype.

### `variable` `VariablesArray<EntityMemoryId>` `memory`

Generic memory storage for the entity. This is accessible only by the entity itself.

### `variable` `VariablesArray<EntitySharedMemoryId>` `sharedMemory`

Generic shared memory storage accessible by other entities.

### `variable` `EntityInfoGroup` `info`

Contains state information of the entity. This variable is read-only in all callback functions.

### `variable` `EntityInputGroup` `input`

Used by entities to pass input information back to Sonolus.

### `variable` `ArchetypeLifeGroup` `life`

Contains life configuration of the archetype.

### `variable` `string` `name`

The name of the archetype, referenced by entities in level data. Special names have specific effects:
- `#BPM_CHANGE`: Signals a BPM change. Entities with this name must also provide data named `#BEAT` and `#BPM`.
- `#TIMESCALE_CHANGE`: Signals a time scale change. Entities with this name must also provide data named `#BEAT` and `#TIMESCALE`.

### `variable` `bool` `hasInput`

If true, entities with this archetype are considered playable and contribute to judgment, combo, life, score, etc.

### `variable` `double` `preprocessOrder`

Determines the order of the `preprocess` callback function. Smaller values execute earlier.

### `variable` `double` `spawnTimeOrder`

Determines the order of the `spawnTime` callback function. Smaller values execute earlier.

### `variable` `double` `despawnTimeOrder`

Determines the order of the `despawnTime` callback function. Smaller values execute earlier.

### `variable` `double` `initializeOrder`

Determines the order of the `initialize` callback function. Smaller values execute earlier.

### `variable` `double` `updateSequentialOrder`

Determines the order of the `updateSequential` callback function. Smaller values execute earlier.

### `variable` `double` `updateParallelOrder`

Determines the order of the `updateParallel` callback function. Smaller values execute earlier.

### `variable` `double` `terminateOrder`

Determines the order of the `terminate` callback function. Smaller values execute earlier.

### `function` `preprocess`

**Description**: Callback function executed during preprocessing.

**Returns**:

| Return Type | Description |
|-------------|-------------|
| `SonolusApi` | The signature of the `SonolusApi` function |

### `function` `spawnTime`

**Description**: Callback function executed to determine the spawn time.

**Returns**:

| Return Type | Description |
|-------------|-------------|
| `SonolusApi` | The signature of the `SonolusApi` function |

### `function` `despawnTime`

**Description**: Callback function executed to determine the despawn time.

**Returns**:

| Return Type | Description |
|-------------|-------------|
| `SonolusApi` | The signature of the `SonolusApi` function |

### `function` `initialize`

**Description**: Callback function executed during entity initialization.

**Returns**:

| Return Type | Description |
|-------------|-------------|
| `SonolusApi` | The signature of the `SonolusApi` function |

### `function` `updateSequential`

**Description**: Callback function executed sequentially during each update cycle.

**Returns**:

| Return Type | Description |
|-------------|-------------|
| `SonolusApi` | The signature of the `SonolusApi` function |

### `function` `updateParallel`

**Description**: Callback function executed in parallel during each update cycle.

**Returns**:

| Return Type | Description |
|-------------|-------------|
| `SonolusApi` | The signature of the `SonolusApi` function |

### `function` `terminate`

**Description**: Callback function executed during termination of the entity.

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


## `function` `defineUpdateSpawn`

**Description**: Tell the compiler the update spawn function for the engine data.

**Parameters**:

| Parameter | Type     | Default Value | Description                                                                                             |
|-----------|----------|---------------|---------------------------------------------------------------------------------------------------------|
| `func`    | `function<SonolusApi()>` | *required*    | The function to be used for update spawn.                                                             |

## `function` `BuildData`

**Description**: Finalizes and writes the engine watch data into a GZIP-compressed JSON file.

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