# Types

Sonolus.h has the following core types: `FuncNode`, `Variable` and `Array`, which represents a 32-bit float number and a fixed-length array.

Sonolus.h also has the following builtin types: `Collection`, `Dictionary`, `Map`, `Matrix`, `Quadratic`, `Range`, `Rectangle` and `Vector`.

## `FuncNode`

`FuncNode` can be considered as a constant 32-bit float number in Sonolus, which will be stored into `EngineData.nodes` directly. You can use this type to store a constant `int` number, a constant `float` number, or a constant `bool` number.

### Declaration

You can declare a FuncNode using standard C++ syntax.

```c++
FuncNode a = 1;
FuncNode b = 2.5;
FuncNode c = true;
```

### Operators

`FuncNode` supports the following operators: 

- Arithmetic operators: `+`, `-`, `*`, `/`, `%`, `|`, `&`, `~`
- Logical operators: `||`, `&&`, `!`
- Comparison operators: `==`, `!=`, `<`, `<=`, `>`, `>=`

## `Variable` / `var`

`Variable`(also known as `var`) is the basic variable in Sonolus.h, which represents a 32-bit float number in Sonolus. You can use this variable type to store a `int` number, a `float` number, or a `bool` number.

It is essentially a pointer to a specific memory in a certain block in Sonolus. All the float numbers will be stored into corresponding memories.

### Declaration

You can declare a variable using standard C++ syntax.

```c++
var a = 1;
var b = 2.5;
var c = true;
```

You also can declare a variable using the following syntax, which allows you to specify the location where your data was stored.

```c++
var d = var(EntitySharedMemory, 0);
```

### Operators

`var` supports the following operators: 

- Assignment opeartors: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`
- Increment / Decrement operators: `++a`, `--a`, `a++`, `a--`.
- Arithmetic operators: `+`, `-`, `*`, `/`, `%`, `|`, `&`, `~`
- Logical operators: `||`, `&&`, `!`
- Comparison operators: `==`, `!=`, `<`, `<=`, `>`, `>=`

:::info

For reminder operator, it returns the remainder in real numbers(`a % b = a - b * Ceil(a / b)`), rather than the result of the multiplicative inverse.

:::

`var` is the only supported variable type for condition expressions. Any non-zero value will be considered as `true`, and only `0` will be considered as `false`. It is same as in C++.

- Selection statements: `if (<condition>)`, `switch(<condition>)`, `case <expression>: { ... } break;`
- Loop statements: `for (<init-expression>; <condition>; <expression>)`, `while(<condition>)`

## `Array`

`Array<T, size>` stores a fixed number of elements of the same type. It is very similar to array in C++.

`Array` has two template paramters:

- `T`: The type of elements.
- `size`: The length of the array. It must be a non-negative constant `int` value.

### Declaration

You can declare a array using the following syntax:

```c++
Array<var, 16> arr1;
Array<Array<var, 16>, 16> arr2;
Array<var, 16> arr3 = arr1;
```

Since the usage of template paramters, two arrays will be considered as the same type of arrays only when the type of elements and the length of the array are the same.

Elements in an array can be copies to another array only when these two arrays are considered as the same type of arrays. This rule is valid in both array constructor and array assignment operator:

```c++
Array<var, 16> arr1;
Array<var, 32> arr2;

// Ok
Array<var, 16> arr3 = arr1;
Array<var, 32> arr4 = arr2;
arr1 = arr3;
arr2 = arr4;

// Not ok
Array<var, 16> arr5 = arr2;
Array<var, 32> arr6 = arr1;
arr1 = arr6;
arr2 = arr5;
```

### Operators

Array can be copied from an another same type array by `=` assignment operator:

```c++
Array<var, 16> arr1, arr2;
arr1 = arr2;
```

Elements can be accessed by index:

```c++
Array<var, 16> arr;
var a = arr[0];
var b = 1;
var c = arr[b];
```

Elements can be updated by index:

```c++
Array<var, 16> arr;
arr[0] = 1;
var a = 1;
arr[1] = a;
```

## Builtin Types

All the builtin types was implemented using core types above. You can check [API](../api/index.md) for their usages.

## Custom Types

You can implemented you own custom types using standard C++ syntax.

The `Constructor`/`Destructor`/`Constructor`/`Constructor` prefix must be added before the definitions of constructor/destructor/copy/move functions for classes/structs to make up for the missing return type compared to regular function definitions; otherwise, the interpreter will recognize them as function calls:

```c++
class Vec3D {
    public:

    var x, y, z;
    Constructor Vec3D(var X = 0, var Y = 0, var Z = 0) {
        x = X;
        y = Y;
        z = Z;
    }

    SonolusApi Distance() {
        return Power({ x * x + y * y + z * z, 0.5 });
    }

    SonolusApi Output() {
        DebugLog(x);
        DebugLog(y);
        DebugLog(z);
    }
};
```