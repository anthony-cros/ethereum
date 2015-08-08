// intentionally verbose
// usage: geth js ./olympic.js 2>&- > mydump.tsv
function assert(condition, message) { if (!condition) { throw message || "Assertion failed"; }}
for (blockNumber = 1026900; blockNumber <= web3.eth.getBlock("latest").number; blockNumber++) {
  var transactions = web3.eth.getBlock(blockNumber).transactions;
  for (transactionIndex in transactions) {
    var transactionHash = transactions[transactionIndex];
    var transaction = eth.getTransaction(transactionHash);
	  assert(blockNumber == transaction.blockNumber, "ERROR: " + blockNumber + " != " + transaction.blockNumber)
	  assert(transactionIndex == transaction.transactionIndex, "ERROR: " + transactionIndex + " != " + transaction.transactionIndex)
    console.log(blockNumber + "\t" + transactionHash + "\t" + transaction.from + "\t" + transaction.to);
  }
}
exit;
