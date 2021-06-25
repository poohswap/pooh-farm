const { assert } = require("chai");

const PooToken = artifacts.require('PooToken');

contract('PooToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.poo = await PooToken.new({ from: minter });
    });


    it('mint', async () => {
        await this.poo.mint(alice, 1000, { from: minter });
        assert.equal((await this.poo.balanceOf(alice)).toString(), '1000');
    })
});
