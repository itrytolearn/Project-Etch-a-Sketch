const container =document.getElementById('container')
const button =document.getElementById("btn")
function makeRows (rows, columns) {
  while( document.querySelector("btn") ==! null) {
    document.querySelector("btn").remove ();
  }  
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", columns);
    container.style.width = "960px";
    // container.style.height = "960px";
    container.style.overflow = "hidden";
 for(c =0; c < (rows * columns); c++) {
     let cell = document.createElement('div');
     cell.style.minHeight = "0";
     cell.style.maxHeight = "0";
     cell.style.overflow = "hidden";
     container.appendChild(cell).className = "grid-item";
     cell.addEventListener("mouseover", () => {
         if(cell.style.backgroundColor == "") {
         let color = getRandomColor();
         cell.style.backgroundColor = color;
         cell.style.opacity = ".10";
         return cell.style.backgroundColor;
        }
        if((cell.style.backgroundColor !== "" ) && (cell.style.opacity <=".90")) {
            cell.style.opacity = parseFloat(cell.style.opacity) + .10;
            return cell.style.backgroundColor;
        }
     })
    }
  clearButton();  
}

function clearButton () {
    button.addEventListener("click", () => {
    document.querySelectorAll(".grid-item").forEach(e => e.remove())
    let userInput = prompt("chose a number");
    if (userInput > 100) {
             alert("ERROR")
             return ; 
             }
          columns = userInput;  
          rows = userInput;
          makeRows(rows, columns);
        })
}
 function getRandomColor() {
 let o = Math.round;
 let r = Math.random;
 let s = 255;
 return "rgb(" + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}
makeRows(16, 16);