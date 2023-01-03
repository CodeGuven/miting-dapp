# Foxes Crew NFT Minting dApp

This a complete example of fullstack NFT minting dApp. **EmojiFaces** is built with the purpose of providing an _entry point for future NFT Minting Website_ projects.

## Installation

You can either use **the default FoxBok smart contract** and play with it or you can also put **your own smart contract** and make changes as needed. _Remember to change `.env` file with your own variables._

Use the default **FoxBok Smart Contract:**

```bash
  git clone https://github.com/CodeGuven/miting-dapp
  cd miting-dapp
  npm install
  npm run dev
```

Use **Your Own Smart Contract:**

```bash
  git clone https://github.com/CodeGuven/miting-dapp
  cd miting-dapp
  npm install
  npm run dev
```

- Change `.env` with your own environment variables.
- Remove `/artifacts`folder if it exists.
- Put your own smart contract inside `/contracts/`.
- Compile your smart contract with `npx hardhat compile`.
- Update `/scripts/deploy.js`according to your needs.
- Deploy your smart contract with `npx hardhat run scripts/deploy.js --network rinkeby`.
- Copy the deployed _contract address_ and put it inside `/utils/interact.js` contractAddress section.

## Tech Stack

**Client:** React, TailwindCSS, web3

**Server:** Alchemy, NextJS, Hardhat

## Support

For support, email foxescrewclubnft@gmail.com
