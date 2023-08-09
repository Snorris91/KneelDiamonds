export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()


    let sizeHtml = ``
    for (const size of sizes) {
        sizeHtml += `<input type="radio" name="size" value="${size.id}" />${size.carets} Carets`
    }
    return sizeHtml

}
