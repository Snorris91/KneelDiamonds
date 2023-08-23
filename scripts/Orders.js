export const Orders = async () => {
  const response = await fetch(
    "http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=jewel"
  );
  const orders = await response.json();

  let ordersHTML = ``;
  for (const order of orders) {
    let orderPrice = order.metal.price + order.style.price + order.size.price;
    if (order.jewel.id === 1) {
      ordersHTML += `<section class="order">
                <div>Order ${order.id}: Costs: $${orderPrice.toFixed(2)}</div>
                </section>`;
      
    } else if (order.jewel.id === 2) {
      orderPrice = orderPrice * 2;
      ordersHTML += `<section class="order">
                <div>Order ${order.id}: Costs: $${orderPrice.toFixed(2)}</div>
                </section>`;
      
    } else if (order.jewel.id === 3) {
      orderPrice = orderPrice * 4;
      ordersHTML += `<section class="order">
                <div>Order ${order.id}: Costs: $${orderPrice.toFixed(2)}</div>
                </section>`;
      
    }
  }return ordersHTML;
};
