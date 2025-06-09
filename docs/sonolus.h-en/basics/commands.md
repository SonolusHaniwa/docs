# Commands

The libsonolush provides commands to build and serve Sonolus engines.

## Starting your development server

To start your develop server, run the following command in the root directory of Sonolus Server:

```bash
./sonolus serve
```

## Building your project

To build your project, run the following command in the root directory of Sonolus Server:

```bash
./sonolus buildcpp <mode> <name>

# For example:
# ./sonolus buildcpp play sirius
```

You can also run the following command to build engine data in all modes:

```bash
./sonolus buildcpp all <name>
```

## Update Sonolus.h

Run the following command in the root directory of Sonolus Server to fetch the latest Sonolus.h:

```bash
./sonolus synccpp
```

## Update your project

Run the following command in the root directory of Sonolus Server to update Sonolus.h in your project:

```bash
./sonolus updatecpp <name>
```