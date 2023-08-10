import { setStyleOption } from "./transientState.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleStyle)

    let styleHTML = ``;

    const styleArr = styles.map((style) => {
      return `<div>
          <input type="radio" name="style" value="${style.id}" />${style.style}
          </div>`;
    });
    styleHTML += styleArr.join("");
  
    return styleHTML;
}

const handleStyle = (changeEvent) => {
    if(changeEvent.target.name === "style"){
        const converted = parseInt(changeEvent.target.value)
        setStyleOption(converted)
    }
}