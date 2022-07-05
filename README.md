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

## Migration
- Migration files contain the details related to initial blockchain deployment.
- [Details](https://github.com/pps-19012/Supply-Chain-v1/blob/main/migrations.txt)

## Demo
![one](https://github.com/pps-19012/Supply-Chain-v1/blob/main/Screenshot%202022-07-01%20152530.png)
- Used react.js for UI. It is minimalistic only to depict the functionality.

### Create an item and its price 
![two](https://github.com/pps-19012/Supply-Chain-v1/blob/main/Screenshot%202022-07-01%20153105.png)
- Alert will pop-up asking the user to pay for the item.
- After receiving the alert use:
```web3.eth.sendTransaction({to:"typeAddress", value:typeValueInWei, from:accounts[1], gas: 300000});```
### After receiving payment
- Ask to deliver to the customer
![three](https://github.com/pps-19012/Supply-Chain-v1/blob/main/Screenshot%202022-07-01%20153200.png)
