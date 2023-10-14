function calculateTotalSalesWithTax(products, taxRate) {
  let sumTotalProduct = products
    .map((p) => p.price * p.quantity)
    .reduce((sum, p) => sum + p, 0);

  const tax = sumTotalProduct * (taxRate / 100);
  const totalSaleAmount = sumTotalProduct + tax;
  return totalSaleAmount;
}

module.exports = calculateTotalSalesWithTax;
