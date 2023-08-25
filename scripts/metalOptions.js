import { setMetalOptions } from "./transientState.js";

export const MetalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();
  
    document.addEventListener("change", handleMetalChoice)

  let metalHTML = ``;

  const metalArr = metals.map((metal) => {
    return `<div>
        <input type="radio" name="metal" value="${metal.id}" checked />${metal.metal}
        </div>`;
  });
  metalHTML += metalArr.join("");
  return metalHTML;
};




const handleMetalChoice = (event) => {
    if (event.target.name === "metal"){
        setMetalOptions(parseInt(event.target.value))
    }
}