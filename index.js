//Adding square divs to the container
function addDivs (container, squaresPerSide) {
    for(let i = 1 ; i <= squaresPerSide**2 ; i++){
        let newDiv = document.createElement("div");
        newDiv.className = "square";
        newDiv.style.paddingTop = "25px";
        newDiv.style.paddingBottom= "20px";
        newDiv.style.backgroundColor = "white";
        newDiv.style.width = "auto";
        newDiv.style.height = "100%";
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
        })
        container.appendChild(newDiv);
    }
}

const container = document.createElement("div");
container.id = "container";

//Styling container
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(16,1fr)";
container.style.gridTemplateRows = "repeat(16,1fr)";
addDivs(container, 16);

//Clear Button
const button = document.createElement("button");
button.textContent = "Clear";
button.addEventListener("click", () => {
    container.innerHTML = "";
    do{
        squaresPerSide = prompt("Enter number of squares per side (max 100): ");
    }while(squaresPerSide > 100);
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}+,1fr)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}+,1fr)`;
    addDivs(container, squaresPerSide);
})

document.body.appendChild(container);
document.body.insertBefore(button, document.body.firstChild);