# Macros

## `DISABLE_INTERPRETER`

The `DISABLE_INTERPRETER` specifier is used to indicate which code does not need to be interpreted by the interpreter.

## `COMPILE_RUNTIME`

The `COMPILE_RUNTIME` specifier is used to distinguish whether the current process is interpreting or compiling.

**It will be added to the head of the file automatically by interpreter, so you don't need to add it by yourself.**

## `Constructor`

The `Constructor` specifier should be placed before the class constructor so that the interpreter can recognize this is a class constructor.

## `Destructor`

The `Destructor` specifier should be placed before the class destructor so that the interpreter can recognize this is a class destructor.

## `Blocked`

The `Blocked` specifier can be placed before any function definition so that the interpreter will not add extra params to this function. You can use this specifier to define a function which has the same name with library function.

## `NonType`

**Decrypted**.

## `CppLoop`

The `CppLoop` specifier can be placed in any part of `for` loop condition. All the `for` loop with `CppLoop` specifier will be treated as a normal C++ `for` loop instead of Sonolus `for` loop.

## `SonolusApi`

`SonolusApi` is same as `var`, but interpreter only recognize a function return `SonolusApi` as a Sonolus function and convert all statements into Sonolus statements, instead of `var`.

## `play`

The `play` specifier tells compiler to generate program that only can generate engine play data and engine configuration.

**It will be added by `libsonolush` automatically. If you are compiling by hand, you may need to add compilation paramteter `-Dplay`.**

## `tutorial`

The `tutorial` specifier tells compiler to generate program that only can generate engine tutorial data and engine configuration.

**It will be added by `libsonolush` automatically. If you are compiling by hand, you may need to add compilation paramteter `-Dtutorial`.**

## `preview`

The `preview` specifier tells compiler to generate program that only can generate engine preview data and engine configuration.

**It will be added by `libsonolush` automatically. If you are compiling by hand, you may need to add compilation paramteter `-Dpreview`.**

## `watch`

The `watch` specifier tells compiler to generate program that only can generate engine watch data and engine configuration.

**It will be added by `libsonolush` automatically. If you are compiling by hand, you may need to add compilation paramteter `-Dwatch`.**