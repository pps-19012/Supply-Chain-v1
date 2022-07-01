# Supply Chain v1
## Real-World Use-Case for this Project
- Can be part of a supply-chain solution
- Automated Dispatch upon payment
- Payment collection without middlemen
## Development-Goal
- Showcase Event-Triggers
- Understand the low-level function address.call.value()()
- Understand the Workflow with Truffle
- Understand Unit Testing with Truffle
- Understand Events in HTML
#
#
## Migration
<details><summary>Result of Migration</summary>
```   
Starting migrations...
======================
> Network name:    'develop'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x00d54d39322ca7c41ed6267645a4a8abdffe44597a1a94916c512a287cf569e3
   > Blocks: 0            Seconds: 0
   > contract address:    0xf791eaf0093C1C8CdBC936b2A309f4873acfd540
   > block number:        1
   > block timestamp:     1656668918
   > account:             0x7EdDf023a1787cCC1F2Db770472DC8732F6C28B2
   > balance:             99.999315121375
   > gas used:            202927 (0x318af)
   > gas price:           3.375 gwei
   > value sent:          0 ETH
   > total cost:          0.000684878625 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:      0.000684878625 ETH


2_deploy_contracts.js
=====================

   Replacing 'ItemManager'
   -----------------------
   > transaction hash:    0xdc3b9865ecb0c51bfab6c40e2c16fd41cd7b1ff5352b39e24b45c886afd5891c
   > Blocks: 0            Seconds: 0
   > contract address:    0xd2144A9e7bF0D3961d48d364a3EB4D1d4d595C3D
   > block number:        3
   > block timestamp:     1656668920
   > account:             0x7EdDf023a1787cCC1F2Db770472DC8732F6C28B2
   > balance:             99.994505864892816334
   > gas used:            1466475 (0x16606b)
   > gas price:           3.177018799 gwei
   > value sent:          0 ETH
   > total cost:          0.004659018643263525 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.004659018643263525 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.005343897268263525 ETH
```
</details>

After receiving the alert use:
```web3.eth.sendTransaction({to:"typeAddress", value:typeValueInWei, from:accounts[1], gas: 300000});```
