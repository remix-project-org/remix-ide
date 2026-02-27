---
myst:
  html_meta:
    "description": "Find Remix IDE URLs, deep links, and URL parameters for loading workspaces, files, and plugins directly."
    "keywords": "remix ide url, remix links, remix parameters, remix ethereum org"
---

# Remix URLs & Links with Parameters

## Main Remix URLs

- Remix IDE Online is located at [https://remix.ethereum.org](https://remix.ethereum.org).

- The alpha version of remix is located at [https://alpha.remix.live](https://alpha.remix.live). This is not a stable version.

- Github repo: [https://github.com/remix-project-org](https://github.com/remix-project-org). The README contains instructions for running Remix-IDE locally.

- Remix Desktop is an Electron App. Here is the [release page](https://github.com/remix-project-org/remix-desktop/releases).

- The Remix twitter account is [EthereumRemix](https://twitter.com/EthereumRemix).

- The Remix Project Blog for release notes and articles is: [https://ethereumremix.substack.com](https://ethereumremix.substack.com).

- Remix blog used to be: [https://medium.com/remix-ide](https://medium.com/remix-ide).  Older release notes are here.

- The [Remix Project](https://remix.live) is our info site about the tool and the project.

Remix is an open source project.  Other project have forked our codebase. The forked versions of Remix sites will look like Remix but are not Remix.  So be careful! Forked sites are not maintained by us nor endorsed by us.

## Remix with URL Parameters

Using Remix with URL parameters will load the tool in the following ways:


### Activating a list of plugins

The following example contains the url parameter **activate** followed by **a comma separated list of plugins**.

```text
https://remix.ethereum.org/?#activate=LearnEth,noir-compiler
```

**The last plugin in the list will gain the focus.**

When you use the activate list, all other plugins that a user had loaded will be deactivated. This does not apply to the File Explorer, Solidity Compier, Deploy & Run, the Plugin Manager, and the Settings modules.


```{note}
In a Remix URL parameter, a plugin is referred to by its **name** as specified in its profile in the [Remix Plugins Directory repo](https://github.com/remix-project-org/remix-plugins-directory). 

**Quickly get a plugin's name**<br>
To quickly get a plugin's name go to [Plugin List page](https://remix-ide.readthedocs.io/en/latest/plugin_list.html) of the docs and search for the plugin you want. There will be a link with the urls to activate the plugin.

```

### A URL example combining multiple parameters

To link to Remix with the list of plugins activated and with:

- the LearnEth gaining the Side Panel's focus (because it is the last in the list)
- the Light theme loaded
- the terminal minimized
- optimize off

use this url:

```text
 https://remix.ethereum.org/?#activate=solidity,solidityUnitTesting,LearnEth&theme=Light&minimizeterminal=true&optimize=false&evmVersion=null&version=soljson-v0.6.6+commit.6c089d02.js
```

### Pass commands to a plugin's API via a url param

The URL parameter to issue a command is `call`. Following the `call` is a // (double slash) separated list of arguments.

```text
call=plugin_name//function//parameter1//paremeter2
```

#### An example using call

The URL below uses `activate` & `call`. It **activates** a number of plugins and **calls** the File Explorers to tell it to load one of the default Remix files:

```text
https://remix.ethereum.org/?#activate=defiexplorer,solidity&call=fileManager//open//contracts/3_Ballot.sol
```

### Load a specific tutorial in the **LearnEth** plugin

```text
https://remix.ethereum.org/?#activate=solidityUnitTesting,solidity,LearnEth&call=LearnEth//startTutorial//ethereum/remix-workshops//master//proxycontract
```

### Make calls to a number of different plugins' APIs

Use the `calls` parameter to call a series of plugins. Use `///` to separate the calls.

For example, this command, after activating a list of plugins, calls the LearnEth plugin's API and then calls the File Explorer's API.

```text
https://remix.ethereum.org/?#activate=solidityUnitTesting,solidity,LearnEth&calls=LearnEth//startTutorial//ethereum/remix-workshops//master//proxycontract///fileManager//open//contracts/3_Ballot.sol
```

### Load a file via a URL param into the Editor

The `url` parameter takes a URL, loads it into the Editor and saves it in a Workspace called **code-sample**:

```text
https://remix.ethereum.org/#url=https://github.com/remix-project-org/remix-project/blob/master/apps/remix-ide/contracts/app/solidity/mode.sol
```

### Load a Solidity file in the Editor via an encoded base64 string

The `code` parameter takes an encoded base64 string and loads it into the Editor as a .sol file and saves it in a Workspace called **code-sample**:

```text
https://remix.ethereum.org/?#code=Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVAoKcHJhZ21hIHNvbGlkaXR5IDAuOC40OwoKLyoqCiAqIEB0aXRsZSBXb25kZXJmdWxDb2RlCiAqIEBkZXYgV2VsY29tZSB0byBSZW1peAogKi8KY29udHJhY3QgWW91IHsKCiAgICBhZGRyZXNzIHByaXZhdGUgb3duZXI7CiAgICAKICAgIC8qKgogICAgICogQGRldiBTZXQgY29udHJhY3QgZGVwbG95ZXIgYXMgeW91QW5kWW91cldvbmRlcmZ1bFNlbGYKICAgICAqLwogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgeW91QW5kWW91cldvbmRlcmZ1bFNlbGYgPSBtc2cuc2VuZGVyOwoKICAgIH0KCiAgICAvKioKICAgICAqIEBkZXYgQ2hhbmdlIG1vb2QKICAgICAqIEBwYXJhbSBuZXdPd25lciBhZGRyZXNzIG9mIG5ldyBvd25lcgogICAgICovCiAgICBmdW5jdGlvbiBjaGFuZ2VNb29kKGFkZHJlc3MgbmV3TW9vZEFkZHIpIHB1YmxpYyB7CiAgICAgICAgb3duZXJNb29kID0gbmV3TW9vZEFkZHI7CiAgICB9Cn0=
```

### Load contracts from Etherscan via address

The `address` parameter takes an address and loads the **verified contract** found for the address on Ethereum Mainnet and saves into the `etherscan-code-sample` workspace of the File Explorer:

```text
https://remix.ethereum.org/#address=0xdac17f958d2ee523a2206206994597c13d831ec7
```

### Load a Solidity contract from Github

With a GitHub url of a Solidity contract like this one:

```text
https://github.com/remix-project-org/remix-project/blob/master/apps/remix-ide/contracts/app/solidity/mode.sol
```

Then delete the **github** part and type in **remix.ethereum.org** in its place, like this:

```text
https://remix.ethereum.org/ethereum/remix-project/blob/master/apps/remix-ide/contracts/app/solidity/mode.sol
```

Remix will fetch the Solidity file and open it up in the File Explorer in a Workspace named<br> **code-sample**.

### Load a GIST

The URL parameter here is `gist`.

```text
https://remix.ethereum.org/?gist=0fe90e825327ef313c88aedfe66ec142
```

#### Load a GIST and have it be visible in the Editor:

Using both `gist` & `call`

```text
https://remix.ethereum.org/?#activate=solidity,fileManager&gist=0fe90e825327ef313c88aedfe66ec142&call=fileManager//open//gist-0fe90e825327ef313c88aedfe66ec142/gridMix4.sol
```

#### Load a GIST, have it be visible in the Editor, and load a list of plugins

```text
https://remix.ethereum.org/?#activate=solidity,LearnEth&gist=0fe90e825327ef313c88aedfe66ec142&call=fileManager//open//gist-0fe90e825327ef313c88aedfe66ec142/gridMix4.sol
```

### Load a specific version of the Solidity Compiler

```text
https://remix.ethereum.org/?#version=soljson-v0.6.6+commit.6c089d02
```

**Note:** you need to specify both the Solidity version and the commit.

### Load a custom Solidity Compiler

```text
https://remix.ethereum.org/#version=https://solidity-blog.s3.eu-central-1.amazonaws.com/data/08preview/soljson.js
```

### Turn on autoCompile

```text
https://remix.ethereum.org/#autoCompile=true
```

### Select the language for the Solidity Compiler

Choose Yul or Solidity with the language parameter.

```text
https://remix.ethereum.org/#language=Yul
```


### Deactivating a list of plugins

```text
https://remix.ethereum.org/?#deactivate=debugger
```

### Minimizing Remix panels

The following URL will **close everything except the Main Panel & the icon panel** (the side and terminal are minimized).

```text
https://remix.ethereum.org/?#embed=true
```

To minimize just the Side Panel, use this URL:

```text
https://remix.ethereum.org/?#minimizesidepanel=true
```

To minimize just the terminal, use this URL:

```text
https://remix.ethereum.org/?#minimizeterminal=true
```

### Specifying a theme

To link to Remix with a theme specified use this url:

```text
 **https://remix.ethereum.org/?#theme=Dark**
```
