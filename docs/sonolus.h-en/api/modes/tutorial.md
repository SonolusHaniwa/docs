# Tutorial Mode

## `function` `defineTutorialPreprocess`

**Description**: Adds a preprocess function.

**Parameters**:

| Parameter | Type                           | Default Value | Description                                |
|-----------|--------------------------------|---------------|--------------------------------------------|
| `func`    | `function<SonolusApi()>`       | *required*    | The preprocess function to be added.       |

## `function` `defineTutorialSegment`

**Description**: Adds a segment function and its duration to the `TemporarySegments`.

**Parameters**:

| Parameter | Type                           | Default Value | Description                                |
|-----------|--------------------------------|---------------|--------------------------------------------|
| `func`    | `function<SonolusApi(var, var)>` | *required*    | The segment function to be added.          |
| `duration`| `double`                       | *required*    | The duration of the segment function.      |

## `function` `defineTutorialSegmentsGroup`

**Description**: Adds a group of temporary segments and clears the `TemporarySegments` vector.

**Parameters**:

| Parameter | Type     | Default Value | Description                                |
|-----------|----------|---------------|--------------------------------------------|
| `name`    | `string` | *required*    | The name of the current segment group.             |

## `function` `defineTutorialStatic`

**Description**: Adds a function which will be called in all update cycle.

**Parameters**:

| Parameter | Type                           | Default Value | Description                                |
|-----------|--------------------------------|---------------|--------------------------------------------|
| `func`    | `function<SonolusApi(var, var)>` | *required*    | The function to be added.           |

## `function` `BuildData`

**Description**: Builds and outputs the engine tutorial data as a compressed GZIP JSON file to the specified path.