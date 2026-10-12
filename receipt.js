function buildReceipt(items) {
  return items.map((item) => `${item.name}: ${item.price}`).join("\n");
}
// added temp123 for removal
module.exports = { buildReceipt };
