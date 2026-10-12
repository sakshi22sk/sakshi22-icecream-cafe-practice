const { MENU, applyDiscount, calculateTotal, formatPrice } = require("./cafe");

console.log("Cafe menu:", MENU);
console.log("Discount on Rs 100 at 10%:", applyDiscount(100, 10));
console.log("Total after discount and tax:", calculateTotal(100, 10));
console.log("Formatted price:", formatPrice(5));
