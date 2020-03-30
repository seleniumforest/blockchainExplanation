var Block = require("../models/block")
var mineBlock = require("./miner")
var DEFAULT_DIFFICULTY = 3;

module.exports = class Blockchain {
    constructor() {
        this.blocks = [];
        this.difficulty = DEFAULT_DIFFICULTY;
        this.addGenesisBlock();
    }

    addGenesisBlock() {
        var genesis = new Block(0, [], "");
        mineBlock(genesis, this.difficulty);
        this.blocks[0] = genesis;
    }

    addBlock(transactions) {
        let validTransactions = transactions.filter(x => x.isValid());
        let lastBlock = this.blocks[this.blocks.length - 1];
        let newBlock = new Block(lastBlock.height + 1, validTransactions, lastBlock.hash);
        mineBlock(newBlock, this.difficulty);
        this.blocks.push(newBlock);
    }
}