# Engine Options

## `function` `SliderOption`

**Description**: This function is used to create a `slider option` in the Sonolus app. It returns a proper `Variable` pointer pointing to a memory in the `LevelOption` or `PreviewOption` block.

**Parameters**:

| Parameter     | Type       | Default | Description                                                                                             |
|---------------|------------|---------------|---------------------------------------------------------------------------------------------------------|
| `name`        | `string`   | `""`          | The name of the option. Standardized names start with `#` and are translated in the client language.  |
| `description` | `string`   | `""`          | Description shown below the option. If not specified, it will not be displayed.                         |
| `standard`    | `bool`     | `false`       | Indicates if the option is a standard option. See the wiki for detailed information.                  |
| `advanced`    | `bool`     | `false`       | If `true`, the option will have a note stating it is for advanced players.                            |
| `scope`       | `string`   | `""`          | The scope of the option. Values are saved and shared between levels based on this scope.              |
| `def`         | `double`   | `0`           | The default value of the slider. Must be between `min` and `max`.                                      |
| `min`         | `double`   | `0`           | The minimum value of the slider. Must be less than or equal to `max`.                                 |
| `max`         | `double`   | `100`         | The maximum value of the slider. Must be greater than or equal to `min`.                              |
| `step`        | `double`   | `1`           | The step value for the slider. Must be greater than `0`.                                              |
| `unit`        | `string`   | `""`          | The unit of the slider. `""` or `Text.PercentageUnit` is recommended.                                |

**Returns**:

| Type                  | Description                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| `Variable` | A `Variable` pointer depending on the current build mode.              |

## `function` `ToggleOption`

**Description**: This function is used to create a `toggle option` in the Sonolus app. It returns a proper `Variable` pointer pointing to a memory in the `LevelOption` or `PreviewOption` block.

**Parameters**:

| Parameter     | Type       | Default | Description                                                                                             |
|---------------|------------|---------------|---------------------------------------------------------------------------------------------------------|
| `name`        | `string`   | `""`          | The name of the option. Standardized names start with `#` and are translated in the client language.  |
| `description` | `string`   | `""`          | Description shown below the option. If not specified, it will not be displayed.                         |
| `standard`    | `bool`     | `false`       | Indicates if the option is a standard option. See the wiki for detailed information.                  |
| `advanced`    | `bool`     | `false`       | If `true`, the option will have a note stating it is for advanced players.                            |
| `scope`       | `string`   | `""`          | The scope of the option. Values are saved and shared between levels based on this scope.              |
| `def`         | `bool`     | `false`       | The default value of the toggle. Only `true` or `false` is accepted.                                  |

**Returns**:

| Type                  | Description                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| `Variable` | A `Variable` pointer depending on the current build mode.              |

## `function` `SelectOption`

**Description**: This function is used to create a `select option` in the Sonolus app. It returns a proper `Variable` pointer pointing to a memory in the `LevelOption` or `PreviewOption` block.

**Parameters**:

| Parameter     | Type             | Default | Description                                                                                             |
|---------------|------------------|---------------|---------------------------------------------------------------------------------------------------------|
| `name`        | `string`         | `""`          | The name of the option. Standardized names start with `#` and are translated in the client language.  |
| `description` | `string`         | `""`          | Description shown below the option. If not specified, it will not be displayed.                         |
| `standard`    | `bool`           | `false`       | Indicates if the option is a standard option. See the wiki for detailed information.                  |
| `advanced`    | `bool`           | `false`       | If `true`, the option will have a note stating it is for advanced players.                            |
| `scope`       | `string`         | `""`          | The scope of the option. Values are saved and shared between levels based on this scope.              |
| `def`         | `int`            | `0`           | The default value of the select. Must be between `0` and `values.size() - 1`.                         |
| `values`      | `vector<string>` | `{}`          | The list of values for the select option. Standardized values start with `#` and are translated.       |

**Returns**:

| Type                  | Description                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| `Variable` | A `Variable` pointer depending on the current build mode.              |