
export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()


    let metalHTML = ``
    for (const metal of metals) {
        metalHTML += `<input type="radio" name="metal" value="${metal.id}" />${metal.metal}`
    }
    
    return metalHTML

}

