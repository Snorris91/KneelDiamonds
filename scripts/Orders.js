



export const Orders = async () => {
        const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
        const orders = await response.json()

        let ordersHTML = ``
        for (const order of orders) {
            let orderPrice = order.metal.price + order.style.price + order.size.price
            ordersHTML += `<section class="order">
            <div>Order ${order.id}: Costs: $${orderPrice.toFixed(2)}</div>
            </section>`
        }
        
        
        return ordersHTML
}