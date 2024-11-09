const products = [
    { name: 'Chocolate', price: 2.5, quantity: 5 },
    { name: 'Chips', price: 1.2, quantity: 10 },
    { name: 'Soda', price: 1.0, quantity: 8 },
    { name: 'Candy', price: 0.5, quantity: 15 },
];

function calculateTotalSalesWithTax(products, taxRate) {
    const totalSales = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
    const taxAmount = (totalSales * taxRate) / 100;
    const totalSalesWithTax = totalSales + taxAmount;
    return totalSalesWithTax;
}

module.exports = calculateTotalSalesWithTax;
