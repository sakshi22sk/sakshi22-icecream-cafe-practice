function buildReceipt(items) {
  return items.map((item) => `${item.name}: ${item.price}`).join("\n");
}
//changed for seasonal fee 
module.exports = { buildReceipt };
