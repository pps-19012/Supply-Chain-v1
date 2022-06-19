const ItemManager = artifacts.require("./ItemManager.sol");

contract("ItemManager", accounts => {
    it("...should be able to add an item", async function() {
        const itemManagerInstance = await ItemManager.deployed(); //makes instance related to truffle contract library
        const itemName = "test1";
        const itemPrice = 500;
        
        const result = await itemManagerInstance.createItem(itemName, itemPrice, {from:accounts[0]});
        //console.log(result);
        assert.equal(result.logs[0].args._itemIndex, 0, "It is not the first item");

        const item = await itemManagerInstance.items(0);
        assert.equal(item._identifier, itemName, "The identifier was different");
    });
});