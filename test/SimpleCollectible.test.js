const SimpleCollectible = artifacts.require("./SimpleCollectible.sol");

require("chai").use(require("chai-as-promised")).should();

contract("SimpleCollectible", (accounts) => {
  let simpleCollectible;

  before(async () => {
    simpleCollectible = await SimpleCollectible.deployed();
  });

  describe("deployment", async () => {
    it("deploys successfully", async () => {
      const address = await simpleCollectible.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("has a name", async () => {
      const name = await simpleCollectible.name();
      assert.equal(name, "Dogie");
    });

    it("has a symbol", async () => {
      const symbol = await simpleCollectible.symbol();
      assert.equal(symbol, "DOG");
    });
  });
});
