# Builtins

## `function` `printStack`

**Description**: Prints the current call stack to the standard error stream for debugging purposes.

## `function` `SonolusAssert`

**Description**: A macro used to perform assertions during compilation. If the condition is false, it logs an error message and aborts the program.

**Parameters**:

| Parameter | Type     | Default | Description                                                                                             |
|-----------|----------|---------------|---------------------------------------------------------------------------------------------------------|
| `expr`    | *expression* | *required* | The condition to assert.                                                                              |
| `...`     | *format arguments* | *required* | Variable arguments for the error message.                                                       |

## `function` `createNodeContainer`

**Description**: Initializes a new node container for storing function nodes. Optionally controls whether a block counter should be added.

**Parameters**:

| Parameter | Type    | Default | Description                                                                                             |
|-----------|---------|---------------|---------------------------------------------------------------------------------------------------------|
| `add`     | `bool`  | `true`        | If `true`, the block counter is pushed onto the stack. If `false`, the current block counter is updated. |

## `function` `mergeNodeContainer`

**Description**: Merges the current node container into a single block node and updates the block counter accordingly.

**Returns**:

| Type | Description                                                                                             |
|-------------|---------------------------------------------------------------------------------------------------------|
| `FuncNode`  | A merged `FuncNode` representing a block of executed nodes. If the container is empty, returns a block with a single `0` node. |

## `function` `SonolusRun`

**Description**: Executes the provided `FuncNode` and adds it to the current node container.

**Parameters**:

| Parameter | Type       | Default | Description                                                                                             |
|-----------|------------|---------------|---------------------------------------------------------------------------------------------------------|
| `code`    | `FuncNode` | *required*    | The function node to be executed and added to the current node container.                               |

## `function` `SizeOf`

**Description**: Measures the Sonolus memory size of an object of type `T`.

**Returns**:

| Type         | Description                                                                                             |
|---------------------|---------------------------------------------------------------------------------------------------------|
| `map<int, int>`     | A map representing the memory size of the object. The key is the block id, and the value is the size. |

## JSON library

### `function` `json_encode`

**Description**: Converts a `Json::Value` object into a JSON string using the `Json::FastWriter` to produce a compact representation.

**Parameters**:

| Parameter | Type        | Default | Description                                               |
|-----------|-------------|---------------|-----------------------------------------------------------|
| `val`     | `Json::Value` | *required*    | The JSON value object to be encoded into a string.        |

**Returns**:

| Type | Description                                  |
|-------------|----------------------------------------------|
| `string`    | A compact JSON string representation of `val`. |

### `function` `json_pretty_encode`

**Description**: Converts a `Json::Value` object into a JSON string using the `Json::StyledWriter` to produce a formatted and human-readable representation.

**Parameters**:

| Parameter | Type        | Default | Description                                               |
|-----------|-------------|---------------|-----------------------------------------------------------|
| `val`     | `Json::Value` | *required*    | The JSON value object to be encoded into a pretty string. |

**Returns**:

| Type | Description                                    |
|-------------|------------------------------------------------|
| `string`    | A pretty-printed JSON string representation of `val`. |

### `function` `json_decode`

**Description**: Parses a JSON string into a `Json::Value` object using the `Json::Reader`.

**Parameters**:

| Parameter | Type     | Default | Description                                               |
|-----------|----------|---------------|-----------------------------------------------------------|
| `json`    | `string` | *required*    | The JSON string to be parsed into a `Json::Value` object. |
| `res`     | `Json::Value&` | *required*    | Reference to the `Json::Value` object where the parsed result will be stored. |

**Returns**:

| Type | Description                                               |
|-------------|-----------------------------------------------------------|
| `bool`      | Returns `true` if parsing is successful, otherwise `false`. |

### `function` `json_decode`

**Description**: Parses a JSON string into a `Json::Value` object using the `Json::Reader` and returns the result directly.

**Parameters**:

| Parameter | Type     | Default | Description                                               |
|-----------|----------|---------------|-----------------------------------------------------------|
| `json`    | `string` | *required*    | The JSON string to be parsed into a `Json::Value` object. |

**Returns**:

| Type | Description                                               |
|-------------|-----------------------------------------------------------|
| `Json::Value` | The parsed JSON value object from the input string.      |

## GZip library

### `function` `compress_gzip`

**Description**: Compresses a string using the GZIP compression method via zlib.

**Parameters**:

| Parameter         | Type     | Default | Description                                                                                             |
|-------------------|----------|---------------|---------------------------------------------------------------------------------------------------------|
| `str`             | `string` | *required*    | The input string to be compressed.                                                                      |
| `compressionlevel`| `int`    | `Z_BEST_COMPRESSION` | The compression level to use. Valid values are from `Z_NO_COMPRESSION` to `Z_BEST_COMPRESSION`. |

**Returns**:

| Type     | Description                                                                                             |
|-----------------|---------------------------------------------------------------------------------------------------------|
| `string`        | The compressed output string in GZIP format.                                                             |

### `function` `compress_deflate`

**Description**: Compresses a string using the DEFLATE compression method via zlib.

**Parameters**:

| Parameter         | Type     | Default | Description                                                                                             |
|-------------------|----------|---------------|---------------------------------------------------------------------------------------------------------|
| `str`             | `string` | *required*    | The input string to be compressed.                                                                      |
| `compressionlevel`| `int`    | `Z_BEST_COMPRESSION` | The compression level to use. Valid values are from `Z_NO_COMPRESSION` to `Z_BEST_COMPRESSION`. |

**Returns**:

| Type     | Description                                                                                             |
|-----------------|---------------------------------------------------------------------------------------------------------|
| `string`        | The compressed output string in DEFLATE format.                                                          |

### `function` `decompress_deflate`

**Description**: Decompresses a string that was compressed using the DEFLATE method via zlib.

**Parameters**:

| Parameter | Type     | Default | Description                                                                                             |
|-----------|----------|---------------|---------------------------------------------------------------------------------------------------------|
| `str`     | `string` | *required*    | The input string to be decompressed.                                                                    |

**Returns**:

| Type     | Description                                                                                             |
|-----------------|---------------------------------------------------------------------------------------------------------|
| `string`        | The decompressed output string in plain text.                                                           |

### `function` `decompress_gzip`

**Description**: Decompresses a string that was compressed using the GZIP method via zlib.

**Parameters**:

| Parameter | Type     | Default | Description                                                                                             |
|-----------|----------|---------------|---------------------------------------------------------------------------------------------------------|
| `str`     | `string` | *required*    | The input string to be decompressed.                                                                    |

**Returns**:

| Type     | Description                                                                                             |
|-----------------|---------------------------------------------------------------------------------------------------------|
| `string`        | The decompressed output string in plain text.                                                           |