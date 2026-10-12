const TAX_RATE = 0.18;

const MENU = {
  vanilla: { name: "Vanilla Scoop", price: 50 },
  chocolate: { name: "Chocolate Scoop", price: 60 },
  strawberry: { name: "Strawberry Scoop", price: 55 },
  brownieSundae: { name: "Brownie Sundae", price: 120 },
};

function applyDiscount(amount, percent) {
  // Deliberately incorrect for practice: 10 should mean 10%, not 10 times.
  return amount * percent;
}

function calculateTotal(subtotal, discountPercent = 0) {
  // Practice task: discount first, then add 18% tax, then round to 2 decimals.
  return subtotal;
}

function formatPrice(amount) {
  // Practice task: Rs 5 should display as Rs 5.00.
  return `Rs ${Math.trunc(amount)}`;
}

function getMenuItem(key) {
  return MENU[key] || null;
}

module.exports = { TAX_RATE, MENU, applyDiscount, calculateTotal, formatPrice, getMenuItem };
