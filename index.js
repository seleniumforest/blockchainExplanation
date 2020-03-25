var Blockchain = require("./models/blockchain");
var Transaction = require("./models/transaction");

var blockchain = new Blockchain();

var transactions1 = [
    new Transaction([{from: 'sender1', amount: 10}], 
                    [{to: 'reciever1', amount: 15}]), //invalid transaction, node should just throw it.
    new Transaction([{from: 'sender3', amount: 30}, {from: 'sender4', amount: 40}], 
                    [{to: 'reciever2', amount: 25}])
]

var transactions2 = [
    new Transaction([{from: 'sender5', amount: 50}, {from: 'sender6', amount: 60}], 
                    [{to: 'reciever3', amount: 35}])
]

var transactions3 = [
    new Transaction([{from: 'qwe43g', amount: 60}, {from: 'qwe123', amount: 60}], 
                    [{to: '34g34g', amount: 35}])
]

blockchain.addBlock(transactions1)
blockchain.addBlock(transactions2)
blockchain.addBlock(transactions3)

blockchain.blocks.forEach(x => {
    console.log(`BLOCK №${x.height}-------------------`)
    console.log(JSON.stringify(x, null, 4));
});
