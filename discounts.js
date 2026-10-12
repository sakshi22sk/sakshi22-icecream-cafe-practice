const DISCOUNT_CODES = {
  SCOOP10: 50,
  SWEET20: 20,
};

function isValidDiscountCode(code) {
  // Deliberately weak validation for code-review practice.
  return Boolean(code);
}

function getDiscountPercent(code) {
  return DISCOUNT_CODES[code] || 0;
}

module.exports = { DISCOUNT_CODES, isValidDiscountCode, getDiscountPercent };
