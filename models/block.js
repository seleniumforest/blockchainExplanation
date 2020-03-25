var sha256 = require('js-sha256').sha256;

module.exports = class Block {
    constructor(height, transactions, prevBlockHash){
        this.height = height;
        this.datetime = new Date().getTime();
        this.transactions = transactions;
        this.prevBlockHash = prevBlockHash;
        this.nonce = 0;
        this.hash = sha256(JSON.stringify(this));
    }
}