import { SizeOptions } from "./Size.js"
import { StyleOptions } from "./Style.js"
import { MetalOptions } from "./metalOptions.js"
import { SaveOrder } from "./submission.js"
import { Orders } from "./Orders.js"
import { jewelChoice } from "./Jewlery.js"

const container = document.querySelector("#container")


const render = async() => {
    const metalOptionsHtml = await MetalOptions()
    const sizeOptionsHtml = await SizeOptions()
    const styleOptionHtml = await StyleOptions()
    const jewelOptionHTML = await jewelChoice()
    const orderHTML = await Orders()
    const saveButton = await SaveOrder()
    //const orderHtml = await Orders()
    container.innerHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices-metals">
            <h2>Metals</h2>
           ${metalOptionsHtml}
            </section>
            <section class="choices-sizes">
            <h2>Sizes</h2>
            ${sizeOptionsHtml}
            </section>
            <section class="choices-styles">
            <h2>Styles</h2>
            ${styleOptionHtml}
            </section>
            
        </article>
        <article class="jewelery">
        ${jewelOptionHTML}
        </article>
        <article class="orders">
        ${saveButton}
        </article>
        
        <article class="customOrders">
        <h2>Custom Jewelry Orders</h2>
       ${orderHTML}
        </article>
    `


}

document.addEventListener("TheClickening", render)

render()