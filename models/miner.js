var sha256 = require('js-sha256').sha256;

module.exports = function mineBlock(block, diff) {
    var blockHash = block.hash;
    var nonce = 0;
    var difficultyHashStart = "0".repeat(diff);
    while (!blockHash.startsWith(difficultyHashStart)){
        blockHash = sha256(nonce + sha256(JSON.stringify(block)));
        nonce++;
    }
    block.hash = blockHash;
    block.nonce = nonce;
}