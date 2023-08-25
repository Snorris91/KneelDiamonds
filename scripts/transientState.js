
const transientState = {
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0,
    "jewelId": 0
}

export const setMetalOptions = (chosenMetal) => {
    transientState.metalId = chosenMetal
    
    console.log(transientState)
}
export const setSizeOption = (chosenSize) => {
    transientState.sizeId = chosenSize
    
    console.log(transientState)
}
export const setStyleOption = (chosenStyle) => {
    transientState.styleId = chosenStyle
    
    console.log(transientState)
}

export const setJewelID = (chosenJewel) => {
    transientState.jewelId = chosenJewel
    
    console.log(transientState)
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("TheClickening")

    document.dispatchEvent(customEvent)
}

export const buttonClicked = () => {
    const customEvent = new CustomEvent("checking")
    document.dispatchEvent(customEvent)
}