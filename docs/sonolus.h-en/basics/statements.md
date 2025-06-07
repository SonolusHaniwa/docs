# Statements

Most C++ 14 standard statements were supported in Sonolus.h.

## Functions

Functions are divided into two types: `SonolusApi` function and normal C++ function.

`SonolusApi` function refers to a function that use `SonolusApi` as its return type. It's basic function type in Sonolus.h.

All the statements in `SonolusApi` function will be converted into Sonolus statements by interpreter, and all the statements not in `SonolusApi` function will be treated as normal C++ statement.

You can use the following syntax to define a `SonolusApi` function:

```cpp
SonolusApi add(var a, var b) {
    ...
}

var a = add(1, 2);
```

It will be compiled to:

```cpp
Set(10000, 1, 1)
Set(10000, 2, 2)
Set(10000, 3, Block(
    Execute(
        Break(1, Add(
            Get(10000, 1),
            Get(10000, 2)
        ))
    )
))
```

Of course, if you don't use any statements that need to converted into Sonolus statements, you can define a normal C++ function directly, which may be able to reduce the number of nodes in the engine data:

```cpp
var add(var a, var b) {
    return a + b;
}

var a = add(1, 2);
```

It will be compiled to:

```cpp
Set(10000, 1, 1)
Set(10000, 2, 2)
Set(10000, 3, Add(
    Get(10000, 1),
    Get(10000, 2)
))
```

## Selection Statement

Most standard selection statements are supported.

### `if` / `else`

```cpp
var a = 1, b = 2;
if (a == b) {
    DebugLog(true);
} else {
    DebugLog(false);
}
```

Please note that conditional operator is not supported in `SonolusApi` function, which means you need to use `If(<condition>, <trueValue>, <falseValue>)` instead:

```cpp
var a = 1, b = 2;
var c = a == b ? true : false;   // Not ok
var d = If(a == b, true, false); // Ok
```

### `switch` / `case`

```cpp
var a = 1;
switch (a) {
    case 1:
        DebugLog(1);
        break;
    case 2: {
        DebugLog(2);
    } break;
    case 3: { 
        DebugLog(3);
    };
    default: {
        DebugLog(4);
    }
}
```

::: warning

It's not recommended to associate too many cases to a switch statement, otherwise interpreter will generate a very very long code (O(n^2) lines) which will increate compilation time of g++.

:::

::: warning

Current `switch` statement is not full-supported. Only the `switch` which sacrifies the following rules is supported:

- One `case` / `default` corresponding to one body.
- One body corresponding to one `case` / `default`.

:::

## Iteration Statement

Most standard iteration statements are supported.

### `for`

Only basic `for` loop in C++ is supported. Range `for` loop is not supported:

```cpp
// Ok
for (var i = 1; i <= 10; i++) {
    DebugLog(i);
}

// Not ok
for (Touch touch : touches) {
    DebugLog(touch.id);
}
```

There also exists a `for` loop named CppLoop. If you want to treat a `for` loop as a normal C++ loop instead of Sonolus loop in `SonolusApi` function, you need to use this type of `for` loop:

```cpp
for (CppLoop int i = 1; i <= 10; i++) {
    DebugLog(i);
}

// It will be compiled to:
DebugLog(1);
DebugLog(2);
...
DebugLog(10);
```

### `while`

`while` loop is fully supported:

```cpp
var a = 10;
while (a) {
    DebugLog(a);
    a--;
}
```

## Jump Statement

Most standard jump statements are supported.

### `continue`

`continue` statement is fully supported in `for` loop and `while` loop:

```cpp
for (var i = 1; i <= 10; i++) {
    continue;
    DebugLog(i);
}

var a = 10;
while (a) {
    a--;
    continue;
    Debuglog(a);
}
```

### `break`

`break` statement is also fully supported:

```cpp
for (var i = 1; i <= 10; i++) {
    DebugLog(i);
    break;
}

var a = 10;
while (a) {
    break;
    Debuglog(a);
}

switch (a) {
    case 1:
        DebugLog(1);
        break;
    default: 
        DebugLog(2);
}
```

### `return`

`return` statement is also fully supported:

```cpp
SonolusApi add(var a, var b) {
    return a + b;
}

SonolusApi abs(var a) {
    return If(a < 0, -a : a);
}

SonolusApi execute() {
    DebugLog(0);
    return; // It will automatically return 0
}
```

## Not-Supported Statements

- Lambda function.
- `throw`. Please use `SonolusAssert` instead.
- Range for loop. Please use normal for loop instead.
- Direct-initialization syntax(`VarType VarName(Params)`). Please use copy-initialization syntax(`VarType VarName = VarType(Params)`) instead.
- C-style explicit type conversion(`(VarType)Var`). Please use function-style explicit type conversion(`VarType(Var)`) instead.
- Pointer is not recommended, but you can use it for sure.
- Conditional operator in `SonolusApi` function.