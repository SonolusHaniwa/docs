# Resources

## Skin Sprites

Skin sprites are declared by `defineSkinSprite` function:

```cpp
/**
 * @brief Define a skin sprite
 * @param name Sprite name
 * @param path Sprite image path
 * @return Sprite id
 */
SkinSprite defineSkinSprite(string name, string path = "");

SkinSprite RedNote = defineSkinSprite(SkinSpriteName.NoteHeadRed);
SkinSprite YellowNote = defineSkinSprite(SkinSpriteName.NoteHeadYellow, "./skins/YellowNote.png");
SkinSprite BlueNote = defineSkinSprite("Blue Note");
SkinSprite GreenNote = defineSkinSprite("Green Note", "./skins/GreenNote.png");
```

You can use `PackSkin` function to pack all sprites into skin data and skin texture:

```cpp
int main(int argc, char** argv) {
    // ...

    PackSkin();
}
```

You just need to call `defineSkinSprite` function once for each skin sprites, then Sonolus.h will pack them into engine data automatically. When you call `PackSkin` function, Sonolus.h will find all sprite images accroding to their sprite image path and pack them into skin data and skin texture. If sprite image path is empty, it will use `./skins/{{ name }}.png` as its default path.

Standard skin sprite names were declared in `SkinSpriteName` class. You can find all standard skin sprite names in <https://github.com/Sonolus/sonolus-core/blob/main/src/common/core/skin/skin-sprite-name.ts#L1> or <https://github.com/SonolusHaniwa/sonolus.h/blob/main/sonolus/resource/Skins.h#L131>.

:::warning

When you try to assign a value of type `SkinSprite` to `var`, you may encounter a compilation error `ambiguous overload for ‘operator=’ (operand types are ‘Variable’ and ‘SkinSprite’)`. You can try to use function-style explicit type conversion to change `SkinSprite` into `int` to solve this issue.

:::

To set the render mode for skin, set the `enginePlayData.render_mode` / `engineTutorialData.render_mode` / `enginePreviewData.render_mode` / `engineWatchData.render_data` to `default`, `standard`, or `lightweight` before you pack engine data.

## Effect Clips

Effect clips are declared by `defineEffectClip` function:

```cpp
/**
 * @brief Define a effect clip
 * @param name Clip name
 * @param path Clip audio path
 * @return Clip id
 */
EffectClip defineEffectClip(string name, string path = "");

EffectClip Perfect = defineEffectClip(EffectClipName.Perfect);
EffectClip Great = defineEffectClip(EffectClipName.Great, "./effects/Great.mp3");
EffectClip Good = defineEffectClip("Good");
EffectClip Miss = defineEffectClip("Miss", "./effects/Miss.mp3");
```

You can use `PackEffect` function to pack all clips into effect data and effect audio:

```cpp
int main(int argc, char** argv) {
    // ...

    PackEffect();
}
```

You just need to call `defineEffectClip` function once for each effect clips, then Sonolus.h will pack them into engine data automatically. When you call `PackEffect` function, Sonolus.h will find all clip audios accroding to their clip audio path and pack them into effect data and effect audio. If clip audio path is empty, it will use `./effects/{{ name }}.mp3` as its default path.

Standard effect clip names were declared in `EffectClip` class. You can find all standard effect clip names in <https://github.com/Sonolus/sonolus-core/blob/main/src/common/core/effect/effect-clip-name.ts#L1> or <https://github.com/SonolusHaniwa/sonolus.h/blob/main/sonolus/resource/Effects.h#L77>.

:::warning

When you try to assign a value of type `EffectClip` to `var`, you may encounter a compilation error `ambiguous overload for ‘operator=’ (operand types are ‘Variable’ and ‘EffectClip’)`. You can try to use function-style explicit type conversion to change `EffectClip` into `int` to solve this issue.

:::

## Particle Effects

Particle effects are declared by `defineParticleEffect` function:

```cpp
/**
 * @brief Define a particle effect
 * @param name Effect name
 * @return Effect id
 */
ParticleEffect defineParticleEffect(string name);

ParticleEffect RedTap = defineParticleEffect(ParticleEffectName.NoteCircularTapRed);
ParticleEffect YellowTap = defineParticleEffect("Yellow Tap");
```

Currently packing particle effects into particle data and particle texture is not supported.

You just need to call `defineParticleEffect` function once for each particle effects, then Sonolus.h will pack them into engine data automatically.

Standard particle effect names were declared in `ParticleEffectName` class. You can find all standard particle effect names in <https://github.com/Sonolus/sonolus-core/blob/main/src/common/core/particle/particle-effect-name.ts#L1> or <https://github.com/SonolusHaniwa/sonolus.h/blob/main/sonolus/resource/Particles.h#L29>.

:::warning

When you try to assign a value of type `ParticleEffect` to `var`, you may encounter a compilation error `ambiguous overload for ‘operator=’ (operand types are ‘Variable’ and ‘ParticleEffect’)`. You can try to use function-style explicit type conversion to change `ParticleEffect` into `int` to solve this issue.

:::

## Buckets

Buckets are declared by `defineBucket` function:

```cpp
/**
 * @brief Create a bucket sprite
 * @param id Sprite id. You can use value with type SkinSprite.
 * @param fallbackId Unknown.
 * @param x X position.
 * @param y Y position.
 * @param w Width.
 * @param h Height.
 * @param rotation Counterclockwise rotation angle in degrees.
 */
class EngineDataBucketSprite(int id, int fallbackId, double x, double y, double w, double h, double rotation);

/**
 * @brief Define a bucket
 * @param sprites Bucket sprites.
 * @param unit Bucket unit. You need to use Texts.*Unit or empty string as its value.
 * @return Bucket id.
 */
Bucket defineBucket(vector<EngineDataBucketSprite> sprites, string unit);

Bucket NormalNoteBucket = defineBucket({
    EngineDataBucketSprite(NormalNote, 0, 0.0, 0.0, 2.0, 1.0, 270)
}, Text.MillisecondUnit);
Bucket CriticalNoteBucket = defineBucket({
	EngineDataBucketSprite(CriticalNote, 0, 0.0, 0.0, 2.0, 1.0, 270)
});
```

You just need to call `defineBucket` function once for each buckets, then Sonolus.h will pack them into engine data automatically.

The y-axis coordinate range of bucket canvas is `[-1, 1]`, and there is no limit for x-axis coordinate. Obviously you can draw a sprite outside of this area, but we do not recommend drawing sprites outside of this area.

The bucket value needs to match the unit you have set. For example, if you set `unit` is equal to `Text.MillisecondUnit` and your `bucketValue` is `1.0s`, you need to set `input.bucketValue` to `1000` instead of `1.0` in this entity.

:::warning

When you try to assign a value of type `Bucket` to `var`, you may encounter a compilation error `ambiguous overload for ‘operator=’ (operand types are ‘Variable’ and ‘Bucket’)`. You can try to use function-style explicit type conversion to change `Bucket` into `int` to solve this issue.

:::

## Tutorial Instruction Texts

Instruction texts are declared by `defineInstructionText` function:

```cpp
/**
 * @brief Define a instruction text
 * @param text Instruction text.
 * @return Instruction text id.
 */
InstructionText defineInstructionText(string text);

InstructionText NormalNote = defineInstructionText(Texts.Tap);
InstructionText CriticalNote = defineInstructionText("Tap");
```

You just need to call `defineInstructionText` function once for each instruction texts, then Sonolus.h will pack them into engine data automatically.

Standard instruction texts were declared in `Texts` class. You can find all standard instruction texts in <https://github.com/Sonolus/sonolus-core/blob/main/src/common/core/text.ts#L614> or <https://github.com/SonolusHaniwa/sonolus.h/blob/main/sonolus/engine/EngineLiterals.h#L619>.

:::warning

When you try to assign a value of type `InstructionText` to `var`, you may encounter a compilation error `ambiguous overload for ‘operator=’ (operand types are ‘Variable’ and ‘InstructionText’)`. You can try to use function-style explicit type conversion to change `InstructionText` into `int` to solve this issue.

:::

## Tutorial Instruction Icons

Instruction icons are declared by `defineInstructionIcon` function:

```cpp
/**
 * @brief Define a instruction icon
 * @param icon Instruction icon name.
 * @return Instruction icon id.
 */
InstructionIcon defineInstructionIcon(string name);

InstructionIcon Hand = defineInstructionIcon(InstructionIconName.Hand);
InstructionIcon Arrow = defineInstructionIcon("#ARROW");
```

You just need to call `defineInstructionIcon` function once for each instruction icons, then Sonolus.h will pack them into engine data automatically.

Standard instruction icon names were declared in `InstructionIconName` class. You can find all standard instruction icon names in <https://github.com/Sonolus/sonolus-core/blob/main/src/common/core/instruction/instruction-icon-name.ts#L1> or <https://github.com/SonolusHaniwa/sonolus.h/blob/main/sonolus/engine/EngineLiterals.h#L1285>.

:::warning

When you try to assign a value of type `InstructionIcon` to `var`, you may encounter a compilation error `ambiguous overload for ‘operator=’ (operand types are ‘Variable’ and ‘InstructionIcon’)`. You can try to use function-style explicit type conversion to change `InstructionIcon` into `int` to solve this issue.

:::

## Level Options

Engine options are declared by `SliderOption`, `ToggleOption` and `SelectOption` functions:

```cpp
/**
 * @brief Create a slider option.
 * @param name The name of this option.
 * @param description The description of this option.
 * @param standard Whether this option is considered as a standard option.
 * @param advanced Whether this option is considered as a advanced option.
 * @param scope The scope of this option.
 * @param def Default value of this option.
 * @param min Minimal value of this option.
 * @param max Maximal value of this option.
 * @param step Step value of this option.
 * @param unit Unit of this option.
 * @return Option value
 */
Variable SliderOption(
    string name = "",
    string description = "",
    bool standard = false,
    bool advanced = false,
    string scope = "",
    double def = 0,
    double min = 0,
    double max = 100,
    double step = 1,
    string unit = ""
);

/**
 * @brief Create a toggle option.
 * @param name The name of this option.
 * @param description The description of this option.
 * @param standard Whether this option is considered as a standard option.
 * @param advanced Whether this option is considered as a advanced option.
 * @param scope The scope of this option.
 * @param def Default value of this option.
 * @return Option value
 */
Variable ToggleOption(
    string name = "",
    string description = "",
    bool standard = false,
    bool advanced = false,
    string scope = "",
    bool def = false
);

/**
 * @brief Create a select option.
 * @param name The name of this option.
 * @param description The description of this option.
 * @param standard Whether this option is considered as a standard option.
 * @param advanced Whether this option is considered as a advanced option.
 * @param scope The scope of this option.
 * @param def Default value of this option.
 * @param values Option values of this option.
 * @return Option value
 */
Variable SelectOption(
    string name = "",
    string description = "",
    bool standard = false,
    bool advanced = false,
    string scope = "",
    int def = 0,
    vector<string> values = {}
)

var Mirror = ToggleOption(Texts.Mirror, "", false, false, "", false);
var NoteSpeed = SliderOption(Texts.NoteSpeed, "", false, false, "sirius", 5.0, 1.0, 25.0, 0.1, "");
var JudgeType = SelectOption("Show FAST/SLOW", "", false, false, "sirius", 2, {
    "PERFECT and below",
    "GREAT and below",
    "OFF"
});
```

There are three types of options available:

- `SliderOption`: A slider control for numeric values
- `ToggleOption`: A toggle switch for boolean values
- `SelectOption`: A dropdown menu for selecting from predefined values

You just need to call `SliderOption` / `ToggleOption` / `SelectOption` function once for each options, then Sonolus.h will pack them into engine configuration automatically.

Standard option names were declared in `Texts` class. You can find all standard option names in <https://github.com/Sonolus/sonolus-core/blob/main/src/common/core/text.ts#L182> or <https://github.com/SonolusHaniwa/sonolus.h/blob/main/sonolus/engine/EngineLiterals.h#L187>.

## Sonolus UI

Sonolus UI configuration is declared by `UI` class:

```cpp
/**
 * @brief Visibility class
 * @param scale The scale size of the item.
 * @param alpha The alpha value of the item.
 */
class Visibility(double scale = 1, double alpha = 0);

/**
 * @brief AnimationTween class
 * @param from Start value of current animation tween.
 * @param to End value of current animation tween.
 * @param duration Duration of current animation tween.
 * @param ease Easing type of current animation tween. Only members of `EngineConfigurationAnimationTweenEase` are accepted.
 */
class AnimationTween(double from = 0, double to = 1, double duration = 1, string ease = EngineConfigurationAnimationTweenEase.None);

/**
 * @brief Animation class
 * @param scale The scale animation tween of the item
 * @param alpha The alpha animation tween of the item
 */
class Animation(AnimationTween scale = AnimationTween(), AnimationTween alpha = AnimationTween());

class UI {
    public:

    /**
     * @brief Set UI scope.
     * @param scope UI scope.
     */
    void SetScope(string scope);

    /**
     * @brief Set UI primary metric and secondary metric.
     * 
     * @param primary Primary metric to show. Only members of `EngineConfigurationMetric` are accepted.
     * @param primaryVisibility Visibility property of primary metric.
     * @param secondary Secondary metric to show. Only members of `EngineConfigurationMetric` are accepted.
     * @param secondaryVisibility Visibility property of secondary metric.
     */
    void SetMetric(
        string primary = EngineConfigurationMetric.Arcade, 
        Visibility primaryVisibility = Visibility(),
        string secondary = EngineConfigurationMetric.Life, 
        Visibility secondaryVisibility = Visibility()
    );

    /**
     * @brief Set UI menu.
     * @param visibility Visibility property of menu.
     */
    void SetMenu(Visibility visibility = Visibility());

    /**
     * @brief Set UI judgment.
     * 
     * @param visibility Visibility property of judgment.
     * @param animation Animation of judgment.
     * @param errorStyle Style of positive judgment error. Only members of `EngineConfigurationJudgmentErrorStyle` are accepted.
     * @param errorPlacement Placement of judgment error. Only members of `EngineConfigurationJudgmentErrorPlacement` are accepted.
     * @param errorMin Minimum judgment error. Only judgment errors larger than this will be shown.
     */
    void SetJudgment(
        Visibility visibility = Visibility(), 
        Animation animation = Animation(),
        string errorStyle = EngineConfigurationJudgmentErrorStyle.None,
        string errorPlacement = EngineConfigurationJudgmentErrorPlacement.LeftRight,
        double errorMin = 0
    );

    /**
     * @brief Set UI combo.
     * @param visibility Visibility property of combo.
     * @param animation Animation of combo.
     */
    void SetCombo(Visibility visibility = Visibility(), Animation animation = Animation());

    /**
     * @brief Set UI progress.
     * @param visibility Visibility property of progress.
     */
    void SetProgress(Visibility visibility = Visibility());

    /**
     * @brief Set UI in tutorial mode.
     * @param navigation Visibility property of navigation in tutorial mode.
     * @param instruction Visibility property of instruction in tutorial mode.
     */
    void SetTutorial(Visibility navigation = Visibility(), Visibility instruction = Visibility());
}UI;
```

You need to set Sonolus UI by calling functions in `UI` class before you build engine configuration.

## Level Data Convertor

