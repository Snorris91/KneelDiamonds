import { setSizeOption } from "./transientState.js"


export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleSize)

    let sizeHtml = ``
    const sizeArr = sizes.map((size) => {
        return `<div>
        <input type="radio" name="size" value="${size.id}" />${size.carets} Carets
        </div>`
    }
    )
    sizeHtml += sizeArr.join("")
    return sizeHtml

}

const handleSize = (changeEvent) => {
    if( changeEvent.target.name === "size"){
        const converted = parseInt(changeEvent.target.value)
        setSizeOption(converted)
    }
}