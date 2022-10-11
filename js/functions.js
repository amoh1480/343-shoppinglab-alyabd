/* define your functions here */
console.log(cart);

function calculateTotal(q, p) {
  return q * p;
}

function outputCartRow(item, total) {
  //   console.log(item, total);
  const {
    product: { title, filename, price },
    quantity,
  } = item;
  console.log(title, filename, price, quantity);
  const row = `
    <tr>
        <td><img src="images/${filename}"></td>
        <td>${title}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        <td>${total}</td>
    </tr>`;
  document.write(row);
}

function outputTableBody() {
  let subtotal = 0;
  for (let item of cart) {
    let total = calculateTotal(item.quantity, item.product.price);
    subtotal += total;
    outputCartRow(item, total);
  }



  
  const bottom = `        <tr class="totals">
  <td colspan="4">Subtotal</td>
  <td>$${subtotal}</td>
</tr>
<tr class="totals">
  <td colspan="4">Tax</td>
  <td>$${tax_rate * subtotal}</td>
</tr>
<tr class="totals">
  <td colspan="4">Shipping</td>
  <td>$${shipping_threshold}</td>
</tr>
<tr class="totals">
  <td colspan="4" class="focus">Grand Total</td>
  <td class="focus">$635.00</td>
</tr>`
document.write(bottom);
}
