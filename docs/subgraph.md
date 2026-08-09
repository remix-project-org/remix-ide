---
myst:
  html_meta:
    "description": "Query subgraphs from The Graph directly in Remix IDE, and scaffold a dApp from your query results."
    "keywords": "subgraph, the graph, graphql, remix ide, remixai, quickdapp"
---

# Subgraphs in Remix

Remix has functionality for querying [The Graph](https://thegraph.com)'s Subgraphs directly from the Editor, and for scaffolding a dApp from the results of a query. RemixAI can also help you find an existing Subgraph and form your queries.

## Configuring your Graph API key

Before you can run a query, you need to add your Graph API key to Remix.

Go to the **Connected Services** section of the **Settings** plugin and paste in your API key.

![Graph API key field in Connected Services settings](images/subgraph/thegraph-api-key.png)

## Querying a Subgraph

When a file in the Editor has a `.subgraph` extension, the **Compile** button becomes the **Run Query** button. Running the query displays the results on the right side of the Editor.

![Run Query button on a Subgraph file](images/subgraph/subgraph-query.png)

### Try querying a Subgraph from Remix

Go to the [Subgraph Explorer](https://thegraph.com/explorer) and search for a Subgraph, then paste its query into a file in Remix with a `.subgraph` extension.

Grab the query's endpoint URL and add it to the top of the file as a comment, like this:

```text
# @endpoint: https://gateway.thegraph.com/api/[]/subgraphs/id/5XqPmWe6gjyrJtFn9cLy237i4cWw2j9HcUJEXsP5qGtH
```

Leave the square brackets after `/api/` empty, as shown above, then run the query.

![Subgraph query results panel](images/subgraph/query.png)

## RemixAI and the Graph

You can ask RemixAI to create a Subgraph query for you. For the best results, name the specific contract or protocol you're targeting, the network it's deployed on, and the data you want back (event type, time range, sort order, and so on). The more specific the request, the less editing you'll need to do to the generated `.subgraph` file.

Here's an example prompt:

```text
Create a Subgraph query that returns the 10 most recent Transfer events for the USDC contract on Ethereum mainnet, sorted by timestamp.
```

You can also ask RemixAI whether a Subgraph already exists for a given contract or protocol, and ask it to help you form your queries against that Subgraph. As above, naming the protocol, network, and the metric or data you're after will get you a more usable query on the first try.

Here's an example prompt:

```text
Does a Subgraph exist for Uniswap v3 on Ethereum mainnet? If so, help me write a query for the top 5 pools by trading volume over the last 24 hours.
```

## Subgraph queries for local Subgraphs

For local Subgraph development, use [Remix Desktop](https://remix.live/desktop). Because it's a native app, you have access to your machine's terminal, so you can install the Graph CLI and index a Subgraph locally. This lets you run queries against data on a local chain, usually Hardhat or Anvil, before your Subgraph is deployed anywhere.

Once your local Subgraph is indexing, every other flow described on this page (writing `.subgraph` files, setting the endpoint, running queries, and asking RemixAI for help) works exactly the same as it does on Remix Web.

## Making a dApp that queries a Subgraph

In the File Explorer, right-click a `.subgraph` file and select **Create dApp from Subgraph Query**. Answer RemixAI's questions, and {doc}`QuickDApp </quickdapp>` will launch. From there you can deploy your dApp to IPFS and set up a URL for it.

![Create dApp from Subgraph Query context menu option](images/subgraph/create-dapp.png)
