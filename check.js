const { applyDiscount, calculateTotal, formatPrice, getMenuItem } = require("./cafe");

const checks = [
  ["19% discount on Rs 100 leaves Rs 90", () => applyDiscount(100, 10) === 90],
  ["no discount on Rs 100 with 18% tax gives Rs 118", () => calculateTotal(100, 0) === 118],
  ["10% discount then 18% tax on Rs 100 gives Rs 106.2", () => calculateTotal(100, 10) === 106.2],
  ["whole-number price has two decimals", () => formatPrice(5) === "Rs 5.00"],
  ["decimal price has two decimals", () => formatPrice(12.5) === "Rs 12.50"],
  ["vanilla menu item has price Rs 50", () => getMenuItem("vanilla").price === 50],
  ["unknown menu item returns null", () => getMenuItem("unknown") === null],
];

let passed = 0;
for (const [label, check] of checks) {
  let ok = false;
  try { ok = Boolean(check()); } catch (_) { ok = false; }
  console.log(`${ok ? "PASS" : "FAIL"} - ${label}`);
  if (ok) passed++;
}
console.log(passed === checks.length ? "ALL CHECKS PASSED" : `${passed}/${checks.length} checks passed`);
if (passed !== checks.length) process.exitCode = 1;
