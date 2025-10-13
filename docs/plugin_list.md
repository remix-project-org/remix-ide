# Plugin List

Here is the list of Remix plugins that you will see in the Plugin Manager.

```{tip}
Click a card to open the Remix IDE with the plugin enabled.
```

## Core Plugins

::::{grid} 3
:gutter: 4
:align: center

:::{grid-item-card} Contract Verification
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=contract-verification
:img-top: images/plugin-list/contractVerification.webp

Verify contract code on Sourcify, Etherscan and Blockscout at the same time.

- [Documentation](https://remix-ide.readthedocs.io/en/latest/contract_verification.html)
- Profile name: **contract-verification**
  :::

:::{grid-item-card} Debugger
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=debugger
:img-top: images/plugin-list/debuggerLogo.webp

Insert breakpoints, step through a contract, and debug transactions.

- [Documentation](https://remix-ide.readthedocs.io/en/latest/debugger.html)
- Profile name: **debugger**
  :::

:::{grid-item-card} Deploy & Run
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=udapp
:img-top: images/plugin-list/deployAndRun.webp

Deploy & interact with smart contracts on the in-browser chain (JSVM), local nodes, and public networks.

- [Documentation](https://remix-ide.readthedocs.io/en/latest/run.html)
- Profile name: **udapp**
  :::

:::{grid-item-card} File Explorer
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=fileManager
:img-top: images/plugin-list/fileManager.webp

The File Explorer is where you can see the files.

- [Documentation](https://remix-ide.readthedocs.io/en/latest/file_explorer)
- Profile name: **fileManager**
  :::

:::{grid-item-card} Remixd
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=remixd
:img-top: images/plugin-list/remixd.png

Connect a local filesystem folder to Remix via the `remixd` npm package.

- [Documentation](https://remix-ide.readthedocs.io/en/latest/remixd.html)
- Profile name: **remixd**
  :::

:::{grid-item-card} Solidity Compiler
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=solidity
:img-top: images/plugin-list/solidity.webp

Compiles Solidity & Yul.

- [Documentation](https://remix-ide.readthedocs.io/en/latest/compile.html)
- Profile name: **solidity**
  :::

:::{grid-item-card} Solidity Static Analysis
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=solidityStaticAnalysis
:img-top: images/plugin-list/staticAnalysis.webp

Static code analysis with integrations for **Slither** and **Solhint**.

- [Documentation](https://remix-ide.readthedocs.io/en/latest/static_analysis.html)
- Profile name: **solidityStaticAnalysis**
  :::

:::{grid-item-card} Solidity Unit Testing
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=solidityUnitTesting
:img-top: images/pi-sut.png

Run unit tests written in Solidity.

- [Documentation](https://remix-ide.readthedocs.io/en/latest/unittesting.html)
- Profile name: **solidityUnitTesting**
  :::

:::{grid-item-card} Vyper Compiler
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=vyper
:img-top: images/plugin-list/vyperLogo2.webp

Compile Vyper code using local or remote Vyper compiler.

- [Documentation](https://remix-ide.readthedocs.io/en/latest/vyper.html)
- Profile name: **vyper**
  :::

:::{grid-item-card} Workspace Templates
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=templateSelection
:img-top: images/plugin-list/bgRemi.webp

Create workspaces from existing templates like the OpenZeppelin ERC20 template.

- Profile name: **templateSelection**
  :::
  ::::

## Internal Plugins

These plugins exist as part of the core plugins.

::::{grid} 3
:gutter: 4
:align: center

:::{grid-item-card} Plugin Manager
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:img-top: images/plugin-list/pluginManager.webp
:link: https://remix.ethereum.org/?#activate=pluginManager

Displays a list of all available plugins.

Profile name: **pluginManager**
:::

:::{grid-item-card} Slither
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:img-top: images/plugin-list/slither-logo.png
:link: https://remix.ethereum.org/?#activate=solidityStaticAnalysis

This plugin is now part of the Solidity Analyzers plugin.
:::

:::{grid-item-card} Solhint
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:img-top: images/plugin-list/solhint.png
:link: https://remix.ethereum.org/?#activate=solidityStaticAnalysis

This plugin is now part of the Solidity Analyzers plugin.
:::
::::

## Additional Plugins

These plugins are added by third-party developers.

::::{grid} 3
:gutter: 4
:align: center

:::{grid-item-card} Arbitrum Stylus
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=remix-plugin-arbitrum
:img-top: images/plugin-list/arbitrum-arb-logo.png

Deployment and execution of smart contracts via Arbitrum Stylus.

- [Website](https://docs.welldonestudio.io/code)
- Profile name: **remix-plugin-arbitrum**
  :::

:::{grid-item-card} BIF Solidity
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=bif-solidity

Compile Solidity smart contracts for the Xinghuo BIF network.

- [Documentation](https://github.com/caict-4iot-dev/remix-bif-plugins/blob/main/apps/solidity-compiler/README.md)
- Profile name: **bif-solidity**
  :::

:::{grid-item-card} BIF UDApp
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=bif-udapp

Deploy and interact with Solidity smart contracts on the Xinghuo BIF network.

- [Documentation](https://github.com/caict-4iot-dev/remix-bif-plugins/blob/main/apps/udapp/README.md)
- Profile name: **bif-udapp**
  :::

:::{grid-item-card} BIF UDApp JS
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=bif-udapp-js

Deploy and interact with JavaScript-based smart contracts on the Xinghuo BIF network.

- [Documentation](https://github.com/caict-4iot-dev/remix-bif-plugins/blob/main/apps/udapp-js/README.md)
- Profile name: **bif-udapp-js**
  :::

:::{grid-item-card} BuildBear
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=buildbear
:img-top: images/plugin-list/build_bear.jpg

Create private, forked testnets from any EVM chain with explorer, faucet, and RPC.

- [Documentation](https://www.buildbear.io/resources/guides-and-tutorials/remix_plugin)
- Profile name: **buildbear**
  :::

:::{grid-item-card} Circom Compiler
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=circuit-compiler
:img-top: images/plugin-list/circom-compiler-logo.png

Write, compile, and generate proofs for Zero-Knowledge (ZK) circuits using the Circom language.

- [Documentation](https://docs.circom.io/)
- Profile name: **circuit-compiler**
  :::

:::{grid-item-card} Cookbook.dev — Find any contract
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=cookbook.dev
:img-top: images/cookbook.svg

Find any smart contract, build your project faster.

- [Website](https://github.com/CookbookDev/cookbook-remix-plugin)
- Profile name: **cookbook.dev**
  :::

:::{grid-item-card} COTI Plugin
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=coti-remix-plugin
:img-top: images/plugin-list/coti-logo.webp

Develop and test privacy-preserving smart contracts on the COTI network.

- [Documentation](https://docs.coti.io/coti-documentation/running-a-coti-node)
- Profile name: **coti-remix-plugin**
  :::

:::{grid-item-card} Contract Deployer
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=contract_deployer
:img-top: images/plugin-list/contract-deployer.webp

Deploy a contract to multiple chains (one at a time) with the same address.

- [Documentation](https://github.com/groksmith/remix-contract-deployer-plugin#getting-started-with-contract-deployer-plugin)
- Profile name: **contract_deployer**
  :::

:::{grid-item-card} Defender Deploy
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=defender-deploy

Deploy smart contracts using OpenZeppelin Defender from Remix IDE.

- [Documentation](https://docs.openzeppelin.com/defender/remix-plugin)
- Profile name: **defender-deploy**
  :::

:::{grid-item-card} Klaytn
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=klaytn-remix-plugin
:img-top: images/plugin-list/klatyn-logo.webp

Deploy and interact with smart contracts on the Klaytn public network and local nodes.

- [Website](https://github.com/klaytn-ozys/plug-and-klay)
- Profile name: **klaytn-remix-plugin**
  :::

:::{grid-item-card} LearnEth
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=LearnEth
:img-top: images/plugin-list/learnEthLogo.webp

Remix, Solidity, & blockchain tutorials with quizzes teaching Solidity and Remix features.

- Profile name: **LearnEth**
  :::

:::{grid-item-card} Nahmii compiler
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=nahmii-compiler
:img-top: images/plugin-list/nahi-compiler-logo.png

Compile Solidity contracts for the Nahmii network.

- [Documentation](https://docs.n3.nahmii.io/docs/category/nahmii-30)
- [Open an issue](https://github.com/nahmii-community/remix-nahmii-compiler-plugin/issues)
- Profile name: **nahmii-compiler**
  :::

:::{grid-item-card} Noir Compiler
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=noir-compiler
:img-top: images/plugin-list/noir-compiler.png

Enables support for Noir circuit compilation.

- [Documentation](https://noir-lang.org/docs/)
- Profile name: **noir-compiler**
  :::

:::{grid-item-card} Restore Backup Zip
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=backup-restore

Restore your backup zip of Remix IDE workspaces (files and settings).

- Profile name: **backup-restore**
  :::

:::{grid-item-card} Sentio
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=sentio
:img-top: images/plugin-list/sentio-logo.png

Monitor and analyze your smart contracts inside Remix using Sentio.

- [Documentation](https://docs.sentio.xyz/docs/remix-ide-plugin)
- Profile name: **sentio**
  :::

:::{grid-item-card} SolidityScan
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=solidityscan

Real-time security analysis of your Solidity smart contracts.

- [Documentation](https://docs.solidityscan.com/remix/)
- Profile name: **solidityscan**
  :::

:::{grid-item-card} Starknet
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=Starknet
:img-top: images/plugin-list/starknetlogo.webp

Compile contracts written in Cairo to Starknet.

- [Website](https://github.com/NethermindEth/starknet-remix-plugin)
- Profile name: **Starknet**
  :::

:::{grid-item-card} Tenderly
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=tenderly
:img-top: images/plugin-list/tenderly-logo.png

Verify contracts and import from your Tenderly project.

- [Documentation](https://docs.tenderly.co/monitoring/integrations#remix)
- Profile name: **tenderly**
  :::

:::{grid-item-card} Wallet Connect (Main Panel)
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=walletconnect

Approve transactions on your mobile device.

- [Website](https://github.com/yann300/remix-walletconnect/issues)
- Profile name: **walletconnect**
  :::

:::{grid-item-card} ZKsync
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=ZKsync
:img-top: images/plugin-list/zksync-logo.png

Compile and deploy smart contracts for zkSync Era.

- [Website](https://github.com/matter-labs/zksync-remix-plugin)
- Profile name: **ZKsync**
  :::

:::{grid-item-card} Zokrates
:columns: 12 6 4
:class-card: plugin-card sd-border-1 sd-rounded-2
:link-type: url
:link: https://remix.ethereum.org/?#activate=ZoKrates
:img-top: images/plugin-list/zokrates-logo.png

ZoKrates is a toolbox for zkSNARKs on Ethereum.

- [Website](https://zokrates.github.io/)
- Profile name: **ZoKrates**
  :::
  ::::
