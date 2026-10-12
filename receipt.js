function buildReceipt(items) {
  return items.map((item) => `${item.name}: ${item.price}`).join("\n");
}

module.exports = { buildReceipt };
