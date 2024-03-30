let header = document.getElementById("header");

let sNumberLeft = document.getElementById("sNoleft");

let bodyContainer = document.getElementById("cells-containerRight");

let columns = 26;
let row = 50;

// here we make a dimancally header cells
for (let i = 1; i <= columns; i++) {
  let headCell = document.createElement("div");
  headCell.className = "head-cell";
  
    headCell.innerText = String.fromCharCode(64 + i);
  

  header.appendChild(headCell);
}

//here we make a serial nuumber dynamically for the left side
for (let i = 1; i <= row; i++) {
  let sNoLeft = document.createElement("div");
  sNoLeft.innerText = i;
  sNoLeft.className = "sNo-cellLeft";
  sNumberLeft.appendChild(sNoLeft);
}

//now we add a cellContainer in right side  and we create a cell

for (let Row = 1; Row <= row; Row++) {
  //here we create a row 
  let rowBody = document.createElement("div");
  rowBody.className = "rowcell";

  for (let Col = 1; Col <= columns; Col++) {
    let cell = document.createElement("div"); //row no.is denoted by numerical value and cloumn no is denoted by
    cell.className = "columncell"; //cell==cell
    cell.contentEditable = true;
    //col--> 64+ 1='A', row=1 ,A1 by this we create unique cell Id
    cell.id = `${String.fromCharCode(64 + Col)}${Row}`;
    rowBody.appendChild(cell);
    cell.addEventListener("focus", onFocusCell);
  }

  bodyContainer.appendChild(rowBody);
}


