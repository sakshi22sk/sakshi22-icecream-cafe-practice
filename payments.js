function checkout(orderTotal, paymentToken) {
  // Training-only simulation. This never charges a real card.
  if (!paymentToken) {
    throw new Error("Missing payment token");
  }
  return { total: orderTotal, status: "simulated" };
}

module.exports = { checkout };
