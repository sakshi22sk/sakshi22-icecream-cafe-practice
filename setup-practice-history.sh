#!/usr/bin/env bash
set -euo pipefail

# Run from inside sakshi22-icecream-cafe-practice.
# This creates local Git history only; it does not contact GitLab.
# The env file contains dummy training text only. Never use a real secret.

git init -b main
git config user.name "${GIT_USER_NAME:-Sakshi Kumari}"
git config user.email "${GIT_USER_EMAIL:-sakshi22-practice@example.com}"

git add README.md cafe.js check.js discounts.js payments.js receipt.js test.js .gitignore config/settings.env app.log node_modules
git commit -m "chore: create initial cafe practice project"

cat >> README.md <<'EOF'

## Seasonal service fee

A seasonal Rs 15 service fee was added temporarily for training.
EOF
git add README.md
git commit -m "feat: add seasonal service fee"
git tag release-test

git switch -c temp123
cat >> README.md <<'EOF'

Menu typo practice: Our icecreams are made fresh every day.
EOF
git add README.md
git commit -m "fix"
git switch main

git switch -c feature/receipt
cat >> receipt.js <<'EOF'

// Receipt title formatter practice.
function formatReceiptTitle(title) {
  return `Scoop & Swirl — ${title}`;
}
module.exports.formatReceiptTitle = formatReceiptTitle;
EOF
git add receipt.js
git commit -m "feat: add cafe receipt builder"

cat >> receipt.js <<'EOF'

// Work in progress for rebase practice.
function receiptVersion() {
  return "cafe-v1";
}
module.exports.receiptVersion = receiptVersion;
EOF
git add receipt.js
git commit -m "wip"

cat >> receipt.js <<'EOF'

// Typo fix practice.
function receiptFooter() {
  return "Thank you for visiting our cafe";
}
module.exports.receiptFooter = receiptFooter;
EOF
git add receipt.js
git commit -m "fix typo"

cat >> receipt.js <<'EOF'

// Debug output to remove during reset practice.
console.log("DEBUG cafe receipt");
EOF
git add receipt.js
git commit -m "chore: add receipt debug output"
git switch main

git switch -c experiment/cafe-payments
python3 - <<'PY'
from pathlib import Path
p = Path("cafe.js")
s = p.read_text()
s = s.replace('return `Rs ${Math.trunc(amount)}`;', 'return `Rs ${Number(amount).toFixed(2)}`;')
p.write_text(s)
PY
git add cafe.js
git commit -m "fix: format cafe prices to two decimal places"

cat >> payments.js <<'EOF'

// Unfinished experiment; do not cherry-pick this with the formatting fix.
function startCafeCheckout(order) {
  return { order, status: "unfinished", debug: true };
}
module.exports.startCafeCheckout = startCafeCheckout;
EOF
git add payments.js
git commit -m "wip: experiment with cafe checkout"
git switch main

git switch -c hotfix/cafe-rounding
python3 - <<'PY'
from pathlib import Path
p = Path("cafe.js")
s = p.read_text()
s = s.replace('return subtotal;', 'return Number(subtotal.toFixed(2));')
p.write_text(s)
PY
git add cafe.js
git commit -m "fix: round cafe total to 2 decimal places"
git switch main

git switch -c feature/cafe-discounts
cat >> discounts.js <<'EOF'

// Candidate implementation for code-review practice.
function applyDiscountCode(total, code) {
  if (isValidDiscountCode(code)) {
    return total - (total * getDiscountPercent(code));
  }
  return total;
}
module.exports.applyDiscountCode = applyDiscountCode;
EOF
git add discounts.js
git commit -m "feat: add cafe discount code application"
git switch main

echo
echo "Local Scoop & Swirl practice history created."
echo "Branches:"
git branch
echo
echo "Next: create a blank GitLab project, add it as origin, then push."
echo "Do not put real credentials in config/settings.env."
