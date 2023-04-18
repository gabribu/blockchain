const Block = require('./block');
const Blockchain = require('./blockchain');

//let block = new Block(0,"Lo que sea",null);
//console.log(block);

const blockchain = new Blockchain("Nueva cadena de bloques", "000");
blockchain.addBlock("Data del segundo bloque");

console.log(blockchain);
