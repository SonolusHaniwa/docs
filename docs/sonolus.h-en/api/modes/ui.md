# Engine UI

## `class` `Visibility`

### `constructor` `Visibility`

**Description**: Constructs a new `Visibility` object to define the visibility properties of an item in terms of scale and alpha.

**Parameters**:

| Parameter | Type     | Default | Description                                                                                             |
|-----------|----------|---------------|---------------------------------------------------------------------------------------------------------|
| `scale`   | `double` | `1`           | The scale size of the item. Must be between `0.5` and `2`.                                            |
| `alpha`   | `double` | `0`           | The alpha value of the item. Must be between `0` and `1`.                                             |

### `method` `toJsonObject`

**Description**: Converts the `Visibility` object into a JSON object.

**Returns**:

| Type     | Description                                |
|-----------------|--------------------------------------------|
| `Json::Value`   | A JSON representation of the `Visibility`. |

## `class` `AnimationTween`

### `constructor` `AnimationTween`

**Description**: Constructs a new `AnimationTween` object to define the animation properties of an item, including the start and end values, duration, and easing type.

**Parameters**:

| Parameter | Type     | Default                     | Description                                                                                             |
|-----------|----------|-----------------------------------|---------------------------------------------------------------------------------------------------------|
| `from`    | `double` | `0`                               | Start value of the animation. Must be between `0` and `1`.                                              |
| `to`      | `double` | `1`                               | End value of the animation. Must be between `0` and `1`.                                                |
| `duration`| `double` | `1`                               | Duration of the animation. Must be greater than or equal to `0`.                                        |
| `ease`    | `string` | `EngineConfigurationAnimationTweenEase.None` | Easing type of the animation. Only members of `EngineConfigurationAnimationTweenEase` are accepted.    |

### `method` `toJsonObject`

**Description**: Converts the `AnimationTween` object into a JSON object.

**Returns**:

| Type     | Description                                |
|-----------------|--------------------------------------------|
| `Json::Value`   | A JSON representation of the `AnimationTween`. |

## `class` `Animation`

### `constructor` `Animation`

**Description**: Constructs a new `Animation` object to define scale and alpha animation properties using `AnimationTween` objects.

**Parameters**:

| Parameter | Type           | Default         | Description                                |
|-----------|----------------|-----------------------|--------------------------------------------|
| `scale`   | `AnimationTween` | `AnimationTween()`   | The scale animation of the item.           |
| `alpha`   | `AnimationTween` | `AnimationTween()`   | The alpha animation of the item.           |

### `method` `toJsonObject`

**Description**: Converts the `Animation` object into a JSON object.

**Returns**:

| Type     | Description                                |
|-----------------|--------------------------------------------|
| `Json::Value`   | A JSON representation of the `Animation`.  |

## `class` `UI`

### `method` `SetScope`

**Description**: Sets the scope of the UI configuration. Values are saved and shared between engines.

**Parameters**:

| Parameter | Type     | Default | Description                                                                                             |
|-----------|----------|---------------|---------------------------------------------------------------------------------------------------------|
| `scope`   | `string` | `""`          | The scope of the UI configuration. When a saved value matching the scope exists, it will be recalled. |

### `method` `SetMetric`

**Description**: Sets the primary and secondary metrics to be displayed in the UI along with their visibility settings.

**Parameters**:

| Parameter         | Type       | Default                              | Description                                                                                             |
|-------------------|------------|--------------------------------------------|---------------------------------------------------------------------------------------------------------|
| `primary`         | `string`   | `EngineConfigurationMetric.Arcade`         | The primary metric to show. Only members of `EngineConfigurationMetric` are accepted.                |
| `primaryVisibility` | `Visibility` | `Visibility()`                           | The visibility property of the primary metric.                                                         |
| `secondary`       | `string`   | `EngineConfigurationMetric.Life`           | The secondary metric to show. Only members of `EngineConfigurationMetric` are accepted.              |
| `secondaryVisibility` | `Visibility` | `Visibility()`                       | The visibility property of the secondary metric.                                                       |

### `method` `SetMenu`

**Description**: Sets the visibility properties of the menu in the UI.

**Parameters**:

| Parameter     | Type       | Default | Description                                |
|---------------|------------|---------------|--------------------------------------------|
| `visibility`  | `Visibility` | `Visibility()` | The visibility property of the menu.       |

### `method` `SetJudgment`

**Description**: Sets the visibility, animation, error style, error placement, and minimum error value for the judgment in the UI.

**Parameters**:

| Parameter        | Type       | Default                              | Description                                                                                             |
|------------------|------------|--------------------------------------------|---------------------------------------------------------------------------------------------------------|
| `visibility`     | `Visibility` | `Visibility()`                           | The visibility property of the judgment.                                                                |
| `animation`      | `Animation`  | `Animation()`                            | The animation of the judgment.                                                                          |
| `errorStyle`     | `string`     | `EngineConfigurationJudgmentErrorStyle.None` | The style of the judgment error. Only members of `EngineConfigurationJudgmentErrorStyle` are accepted. |
| `errorPlacement` | `string`     | `EngineConfigurationJudgmentErrorPlacement.LeftRight` | The placement of the judgment error. Only members of `EngineConfigurationJudgmentErrorPlacement` are accepted. |
| `errorMin`       | `double`     | `0`                                        | The minimum judgment error to be displayed. Must be greater than or equal to `0`.                      |

### `method` `SetCombo`

**Description**: Sets the visibility and animation properties of the combo in the UI.

**Parameters**:

| Parameter     | Type       | Default | Description                                |
|---------------|------------|---------------|--------------------------------------------|
| `visibility`  | `Visibility` | `Visibility()` | The visibility property of the combo.       |
| `animation`   | `Animation`  | `Animation()`  | The animation of the combo.               |

### `method` `SetProgress`

**Description**: Sets the visibility properties of the progress in the UI.

**Parameters**:

| Parameter     | Type       | Default | Description                                |
|---------------|------------|---------------|--------------------------------------------|
| `visibility`  | `Visibility` | `Visibility()` | The visibility property of the progress.   |

### `method` `SetTutorial`

**Description**: Sets the visibility properties of the tutorial navigation and instruction in the UI.

**Parameters**:

| Parameter        | Type       | Default | Description                                                |
|------------------|------------|---------------|------------------------------------------------------------|
| `navigation`     | `Visibility` | `Visibility()` | The visibility property of the tutorial navigation.         |
| `instruction`    | `Visibility` | `Visibility()` | The visibility property of the tutorial instruction.        |

### `method` `toJsonObject`

**Description**: Converts the `UI` object into a JSON object.

**Returns**:

| Type     | Description                                |
|-----------------|--------------------------------------------|
| `Json::Value`   | A JSON representation of the `UI`.         |

## `function` `BuildConfiguration`

**Description**: Builds and outputs the engine configuration as a compressed GZIP JSON file to the specified path.