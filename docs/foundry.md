# Foundry

Remix IDE has built-in support for [Foundry](https://getfoundry.sh/), a fast Ethereum development toolkit for compiling, testing, and deploying Solidity smart contracts. Through Remix Desktop, Remix connects to your local Foundry project, giving you access to the Foundry Provider for deploying to a local Anvil node and support for Foundry remappings.

## Deploying to Anvil

To deploy to Anvil, Foundry's local test chain, Anvil needs to be installed and running on your computer.

```{note}
You can install Anvil by following the instructions in [this guide](https://getfoundry.sh/introduction/installation).
```

Then, start `Anvil` by running the command below in the Remix Desktop terminal:

```shell
anvil
```

Then select **Foundry Provider** in the **Environments** section of the **Deploy & Run** module.

![Foundry Provider option in the Environment dropdown](images/a-foundry-provider.png)

As soon as you select **Foundry Provider**, a modal is opened asking for the **Anvil JSON-RPC Endpoint**.

![Modal prompting for the Anvil JSON-RPC Endpoint](images/a-foundry-provider-modal.png)

If the Anvil node is running with default options, the default endpoint value in the modal doesn't need to be changed. If the Anvil node host and port are different, the JSON-RPC endpoint should be updated in the modal's text box.

Once the correct endpoint is filled in the modal, click **OK** and the accounts from the Anvil node will be loaded in the **ACCOUNT** section. The network id will also be shown.

![Remix IDE connected to Foundry Provider showing loaded accounts](images/a-foundry-provider-connected.png)

Now, you can start deploying the contract from Remix IDE to the local Anvil node as usual.

## Foundry Remappings

Foundry manages dependencies using git submodules and can remap dependencies to make them easier to import. So imports defined by remappings can have compilation errors on Remix IDE.

To support such compilation, Remix suggests running [compilation using a compiler config file](https://remix-ide.readthedocs.io/en/latest/compile.html#json-file-for-compiler-configuration). Remix adds some default Forge remappings in the compiler config file when a Foundry project is loaded in Remix IDE using Remixd.

![Compiler config file with default Forge remappings](images/a-foundry-cc.png)

Further, more remappings can be added manually if required.
