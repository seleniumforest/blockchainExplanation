var Block = require("../models/block")
var mineBlock = require("./miner")
var sha256 = require('js-sha256').sha256;

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
        let validTransactions = this.filterInvalidTransactions(transactions);
        var lastBlock = this.blocks[this.blocks.length - 1];
        var newBlock = new Block(lastBlock.height + 1, validTransactions, lastBlock.hash);
        mineBlock(newBlock, this.difficulty);
        this.blocks.push(newBlock);
    }

    filterInvalidTransactions(transactions) {
        return transactions.filter(t => {
            let inputsSum = t.inputs.reduce((acc, cur) => acc + cur.amount, 0);
            let outputsSum = t.outputs.reduce((acc, cur) => acc + cur.amount, 0);
            return outputsSum === inputsSum;
        });
    }
}