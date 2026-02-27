---
myst:
  html_meta:
    "description": "Execute JavaScript and TypeScript scripts in Remix IDE to automate deployment, testing, and interaction with smart contracts."
    "keywords": "remix scripts, javascript remix, ethers.js, run scripts, remix ide automation"
---

# Running Scripts

Remix IDE supports execution of JS & TS scripts.  For some script examples using Ethers.js, go to the scripts folder in the Default Workspace or the Basic Workspace.

## Why run scripts in Remix?

- To mimic how the front-end of your dapp will use ethers.js
- To quickly deploy and interact with a bunch of instances of a contract without going through the Remix GUI.
- To run tests on a previous deployed contract.

## Writing and running scripts

Create a file with `.js` or `.ts` extension and put your logic inside it. To run a script:

- Click the play button at the upper left of the Main Panel when the script is the active file in the Editor.

- Right click on the script name in the `File Explorers` and click on the **Run** option.

- `Ctrl+Shift+S` when the script is displayed in the editor.

- Make the script the active file in the editor and run `remix.exeCurrent()` from Remix terminal

Here is a sample .js script:

```JavaScript
function test() {
  var num=12;
  if(num<10)
    console.log(num + " is less than 10");
  else
    console.log(num + " is not less than 10");
}

test();
```

Running it using one of options mentioned above will show result in Remix terminal

## Script to deploy a contract

Remix accepts async/await scripts to run [ethers.js](https://docs.ethers.io/) commands. The script needs to be wrapped in a self executing function.

## Setup

1. Scripts will need to access the contract's ABI. The ABI is located in the contract's metadata file. Make sure that this metadata file will be created by going to the **Settings** module and checking that the **Generate contract metadata** option is indeed **checked**. (It is enabled by default)

2. Compile a Solidity file - to generate the contract metadata.

3. In the Deploy & Run plugin, choose the Environment for your script.
   - Async/await scripts work on in all of the Environments: the Remix VM, Injected Provider (usually MetaMask), and External HTTP Provider.

## Compile and Run script
In the Solidity Compiler, there is a button called "Compile and Run script".

When drafting a contract, it can be helpful to run a script just after the compilation succeeds that will deploy and set the state.

The script can contains Mocha tests to be run.

In order to connect a contract with a script, add the **NatSpec** tag `@custom:dev-run-script` to the contract followed by the absolute file path, like:

```JavaScript
  /**
   * @title ContractName
   * @dev ContractDescription
   * @custom:dev-run-script file_path
   */
  contract ContractName {}
```

When you are ready to deploy the code for real, remove the NatSpec comment `@custom:dev-run-script`.

**ShortCut**: `Ctrl+Shift+S` , when editing a solidity file, will compile that file and then will run the script. In contrast, `ctrl+S` will only start the compiling.

## Adding external dependencies

Remix has organized JS/TS dependencies into sets called "Configurations".  
These dependencies are available for use in your scripts.  

The following list contains the **Default** dependencies: 

- ethers (v5): [Ethers v5 docs](https://docs.ethers.org/v5/)
- zokrates-js: [Zokrates docs](https://zokrates.github.io/toolbox/zokrates_js.html)
- web3: [Web3js docs](https://web3js.readthedocs.io/en/v1.10.0/)
- zksync-ethers: [Zksync ethers docs](https://www.npmjs.com/package/zksync-ethers)
- starknet: [JS library for Starknet docs](https://www.npmjs.com/package/starknet)
- snarkjs: [Snarkjs docs](https://github.com/iden3/snarkjs)
- circomlibjs: [Circomlibjs docs](https://github.com/iden3/circomlibjs)
- ffjavascript: [Finite Field Library in Javascript docs](https://github.com/iden3/ffjavascript)
- big-integer: [Big integer docs](https://www.npmjs.com/package/big-integer)
- @zk-kit/incremental-merkle-tree: [Incremental Merkle tree implementation in TypeScript docs](https://www.npmjs.com/package/@zk-kit/incremental-merkle-tree.sol)
- sindri: [Sindri CLI TypeScript SDK](https://www.npmjs.com/package/sindri)
- @semaphore-protocol/data: [Semaphore data docs](https://www.npmjs.com/package/@semaphore-protocol/data)
- @semaphore-protocol/group: [Semaphore group docs](https://www.npmjs.com/package/@semaphore-protocol/group)
- @semaphore-protocol/identity: [Semaphore identity docs](https://www.npmjs.com/package/@semaphore-protocol/identity)
- @semaphore-protocol/proof: [Semaphore proof docs](https://www.npmjs.com/package/@semaphore-protocol/proof)
- crypto-js: [Cryptojs docs](https://www.npmjs.com/package/crypto-js)
- aes-js: [AES-JS docs](https://www.npmjs.com/package/aes-js)
- multihashes: [Multihashes docs](https://www.npmjs.com/package/multihashes)
- openai: [TypeScript library for Openai docs](https://www.npmjs.com/package/openai)


### Loading other script dependencies

If you don't see what you need in the Default configuration of scripts, you can load other configurations of scripts using the Script Configuration panel. Tthis panel is accessed from the dropdown on the "Run Script" button.

```{note}
If the active file in the Editor is not a script, then the "Run Script" button turns into the "Compile" button and the Open script configuration option is not present.
```

![Script config](./images/running-scripts/script-config.png)

It is not necessary to install the scripts to use; just use the `import` or `require` keyword. For example:

```js
//using require
const { expect } = require("chai");

//using import
import { UltraHonkBackend } from "@aztec/bb.js";
```

If you try to import an unsupported module, you will get the error below:

```bash
<module_name> module require is not supported by Remix IDE
```


