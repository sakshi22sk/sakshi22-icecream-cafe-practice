const DISCOUNT_CODES = {
  SCOOP10: 50,
  SWEET20: 100,
};

function isValidDiscountCode(code) {
  // Deliberately weak validation for code-review practice.
  return Boolean(code);
}

function getDiscountPercent(code) {
  return DISCOUNT_CODES[code] || 10;
}

module.exports = { DISCOUNT_CODES, isValidDiscountCode, getDiscountPercent };
