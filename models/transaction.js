module.exports = class Transaction {
    constructor(inputs, outputs) {
        this.inputs = inputs;
        this.outputs = outputs;
    }

    isValid() {
        let inputsSum = this.inputs.reduce((acc, cur) => acc + cur.amount, 0);
        let outputsSum = this.outputs.reduce((acc, cur) => acc + cur.amount, 0);

        return outputsSum === inputsSum;
    }
}