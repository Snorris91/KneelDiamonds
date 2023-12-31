import { buttonClicked, placeOrder } from "./transientState.js"

const handleSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        placeOrder()
        buttonClicked()
    }
}



export const SaveOrder = () => {
    document.addEventListener("click", handleSubmissionClick)

    return `<div class="button"><button id='saveSubmission'>Place Order</button></div>`
}