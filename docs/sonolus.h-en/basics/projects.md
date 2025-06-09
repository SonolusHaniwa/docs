# Project

## `package.json`

Project details are defined in a file called `package.json` in the root directory of project. You need to create it by yourself:

```json
{
    "skin": {
        "name": "demo_skin",
        "i18n": [
            {
                "localization": "default",
                "title": "Demo Skin",
                "subtitle": "Demo Skin",
                "author": "author#1000",
                "description": "Version: 1.0.0"
            }
        ]
    },
    "effect": {
        "name": "demo_effect",
        "i18n": [
            {
                "localization": "default",
                "title": "Demo Effect",
                "subtitle": "Demo Effect",
                "author": "author#1000",
                "description": "Version: 1.0.0"
            }
        ]
    },
    "engine": {
        "name": "demo_engine",
        "i18n": [
            {
                "localization": "default",
                "title": "Demo Engine",
                "subtitle": "Demo Engine",
                "author": "author#1000",
                "skin": "demo_skin",
                "background": "default-background",
                "effect": "demo_effect",
                "particle": "particle",
                "description": "Version: 1.0.0"
            }
        ]
    },
    "level": {
        "name": "",
        "generate": "",
        "i18n": [
            {
                "localization": "default",
                "title": "Demo Level",
                "rating": 1,
                "artists": "",
                "author": "",
                "engine": "",
                "skin": "",
                "background": "",
                "effect": "",
                "particle": "",
                "description": ""
            }
        ]
    }
}
```

If skin name, effect name or level name is empty, it will not be added to Sonolus Server.

The value of `skin`, `background`, `effect` and `particle` in `engine.i18n` must be existed in Sonolus Server, otherwise libsonolush will not add your engine to Sonolus Server.

If the value of `skin`, `background`, `effect` and `particle` in `level.i18n` is empty, it means that this level uses default skin / background / effect / particle defined in `engine.i18n`. And if the value is not empty, it must be existed in Sonolus Server.

`level.generate` should be argument values that will be given to executable file in order to generate LevelData. If this value is empty, this level also will not be added to Sonolus Server.

A typical project structure might look like this:

```
demo_engine/
    main.cpp
    package.json
    dist/
        thumbnail.png
        ...
    sonolus/
        sonolus.h
    engine/
        play/
            ...
        preview/
            ...
        tutorial/
            ...
        watch/
            ...
        engine.cpp
    skins/
        ...
    effects/
        ...
```

## Modes

Modes are defined by `#define` preprocessor. The following macros is valid: `play`, `tutorial`, `preview`, `watch`.

If you are using libsonolush, modes will be defined by libsonolush automatically. You just need to add `-D` argument to your IDE intelliSense.

:::warning

Please do not define modes in your code. If multiple modes were defined, compiler will fail to compiler your code and throw a large number of error messages.

:::

You can use `defined` mecro to judge which mode is defined:

```cpp
#if defined(play)
cout << "Play mode was defined." << endl;
#elif defined(tutorial)
cout << "Tutorial mode was defined." << endl;
#elif defined(preview)
cout << "Preview mode was defined." << endl;
#elif defined(watch)
cout << "Watch mode was defined." << endl;
```

You can use the following code to build engine data:

```cpp
int main(int argc, char **argv) {
    // Setup Sonolus UI
    // ...

    // Build engine data
    #if defined(play)
    BuildData(
        Initialization,
        Stage,
        Note,
        Archetype1
    );

    #elif defined(tutorial)
    BuildData();

    #elif defined(preview)
    BuildData(
        Initialization,
        Stage,
        Note,
        Archetype2
    );

    #elif defined(watch)
    BuildData(
        Initialization,
        Stage,
        Note,
        Archetype3
    );

    #endif

    // Pack skin & effect
    // ...
}
```

## Resources

You need to provide a thumbnail picture named `thumbnail.png` in `dist/` directory. This picture will be used as cover of your engine, skin and effect.