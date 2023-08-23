import {setJewelID} from "./transientState.js"

export const jewelChoice = async () => {
    const response = await fetch ("http://localhost:8088/jewels")
    const jewels = await response.json()

    document.addEventListener("change", handleJewel)

    let jewelsHTML = `<h2>Please Choose A Design</h2>`
    const jewelsArr = jewels.map((jewel) => {
        return `<input type="radio" name="jewel" value="${jewel.id}" />${jewel.name}`
    })
    jewelsHTML += jewelsArr.join("")
    return jewelsHTML

}

const handleJewel = (changeEvent) => {
    if (changeEvent.target.name === "jewel") {
        const converted = parseInt(changeEvent.target.value)
        setJewelID(converted)
    }
}