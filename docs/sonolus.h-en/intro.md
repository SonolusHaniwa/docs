# Sonolus.h

C++ based developer toolkit for Sonolus.

## Installation

Sonolus.h depends on [Sonolus Server](https://github.com/SonolusHaniwa/sonolus-server-cpp), which means that you need to install [Sonolus Server](https://github.com/SonolusHaniwa/sonolus-server-cpp) first.

Please go to <https://github.com/SonolusHaniwa/sonolus-server-cpp/releases/latest> to download the pre-compiled package of Sonolus Server for your operator system.

If you are using a Linux system, you may need to install the following dependences in advance:

```bash
# For Ubuntu/Debian
sudo apt install g++ libjsoncpp-dev libmysqlclient-dev libssl-dev libsqlite3-dev libcurl4 libzip-dev -y
```

In subsequent sections, when entering commands, they are run in **the root directory of Sonolus Server** if not specified.

In the root directory of Sonolus Server, enter the following commands to pull Sonolus.h repository and compile Sonolus.h interpreter:

```bash
./sonolus synccpp
```

## Getting Started

Enter the following command to create a new project in the root directory of Sonolus Server:

```bash
./sonolus initcpp <name>
```



## Documentation

See [Basics](./basics/index.md) for basic usage for Sonolus.h.

See [API](./api/index.md) for details informations for Sonolus.h API.