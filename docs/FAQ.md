# FAQ

## Supported devices & Browsers

```{dropdown} Q: What browsers will Remix work on?
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

We support Firefox, Chrome, and Brave. We do not test or look for errors in Safari, Edge or other browsers.

```

```{dropdown} Q: Will Remix work on a tablet or mobile device?
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

We do not support the use of Remix on tablets or mobile phones.

```

## General

```{dropdown} Q: Are there keyboard shortcuts in Remix?
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

Yes - here is the list of keyboard shortcuts:

`Ctrl+S`: Compiles the active Solidity file

`Ctrl+Shift+S`: Compiles a Solidity file and runs a script when the script is displayed in the editor.<br>(go {ref}`here <running_js_scripts:compile a contract and run a script in one click>` for more info about this functionality)

`Ctrl+Shift+F` : Opens the File Explorer

`CTRL+Alt+F` : Formats the code in the current file

`Ctrl+Shift+A` : Opens the Plugin Manager

```

## Solidity Compiler

```{dropdown} Q: Error: compiler might be in a non-sane state
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

~~~text
error: "Uncaught JavaScript exception: RangeError: Maximum call stack size exceeded.
The compiler might be in a non-sane state, please be careful and do not use further compilation data to deploy to mainnet.
It is heavily recommended to use another browser not affected by this issue (Firefox is known to not be affected)."
~~~

Old versions of Solidity Compiler had this problem with Chrome.
Please change the compiler version in Solidity Plugin to the newer one or use another browser.

```

```{dropdown} Q: I’m getting an issue with Maximum call stack exceed and various other errors, can't compile.
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

Try a different browser or a newer Solidity Compiler version.

```

## Deploy & Run

```{dropdown} Q: I am using an Infura endpoint in my app, but when I try to deploy against that endpoint in Remix IDE selecting "External HTTP Provider" and putting my endpoint in, it's telling me that it can't connect
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

If the endpoint you are using is http, it won't work.

```

```{dropdown} Q: Where is deploy button?
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

It's in the Deploy & Run Transactions module.

```

```{dropdown} Q: How to pass a tuple to a public function in Remix?
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

Pass it as an array `[]`.

```

```{dropdown} Q: How to input a struct as input to a parameter of a function in the Deploy & Run module?
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

For inputting a struct, just like a tuple, pass it in as an array `[]`. Also you need to put in the line:

`pragma experimental ABIEncoderV2;` at the top of the solidity file.

For example, here's a solidity file with a struct as an input parameter.

~~~solidity
pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;

contract daPeeps {
    struct Peep {uint a; uint b;} // declaration of Peep type
    Peep peep; //declaration of an object of Peep type

    constructor () public
    {
        peep.a = 0; // definition/initialisation of object
        peep.b = 0; //
    }

    function initPeepToPeep(Peep memory i) public payable {
        peep.a = i.a;
        peep.b = i.b;
    }
    function setPeep(uint a, uint b) public payable {
        peep.a = a;
        peep.b = b;
    }

    function getPeep() public view returns(Peep memory)
    {
        return peep;
    }
}
~~~

The input of initPeepToPeeps takes a struct. If you input
`[1,2]` the transaction will go through.

```

```{dropdown} Q: What should I do if the addresses don't load in the VM?
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

**A:** Try deleting the state folder to refresh the local VM. Note that this resets the local VM, any deployed contracts and account state in the VM will be lost.
```

## Plugin Developers

```{dropdown} Q: Where do plugin developers go with their questions?
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

First, join our [Discord server](https://discord.com/invite/snsrYVU4Q7) and then go to the development-plugin channel.

```

## Analytics

```{dropdown} Q: What information does Remix save when Matomo Analytics is enabled?
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

We want to know:

- Which plugins get activated & deactivated
- If users check the box to publish a contract's metadata when deploying
- Which themes are used/used most/not used at all
- The usage of the links to documentation
- On the homepage, which file importing buttons are used

```

```{dropdown} Q: Is it opt-in or opt-out?
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

We use Matomo as an opt-in analytics platform.

```

```{dropdown} Q: Where is the info stored? Is the info shared with 3rd parties?
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

All data collected through Matomo is stored on our server. No data is given to third parties.

We respect your privacy and do not collect nor store any personally identifiable information (PII).

```

```{dropdown} Q: What does Remix do with this info?
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

Our goal is to understand how many users we have, what plugins people are using, what is not getting used, what is not being used to its full potential.

With this understanding, we can make adjustments to the UI as well as providing more tips and documentation. It's a way of getting constant anonymous feedback from our users.

```

```{dropdown} Q: After I agree opt-in, can I change my mind?
:class-title: sd-fs-5 sd-font-weight-bold
:class-body: sd-fs-6

You can turn off or on Matomo in the Settings panel. There are no consequences for not opting-in or opting-out.

```
