function fetch(whereToFetch){
    // console.log(document.getElementById(whereToFetch).value)
    return document.getElementById(whereToFetch).value;
}

function place(whatToPlace, idOfPlace){
    document.getElementById(idOfPlace).innerHTML = "" + whatToPlace;
}
function show(whatToShow){
    document.getElementById(whatToShow).hidden=false;
}
function hideTable(whatToHide){
    document.getElementById(whatToHide).hidden=true;
}

function resetTable(tableId){
}

function rows(numberOfRows,idOfTable){
    table = document.getElementById(idOfTable);
    table.style.width = numberOfRows*20 + "px";
    table.style.height = numberOfRows*20 + "px";
    table.innerHTML = ""

    if(table.rows.length >= numberOfRows)
        return 0;
        
    for(let i = 0; i < numberOfRows; i++)
        table.insertRow(0);
}

function columns(numberOfColumns, idOfTable){
    table = document.getElementById(idOfTable);

    for(let i = 0; i < table.rows.length; i++)
        for(let j = 0; j < numberOfColumns; j++){
            table.rows[i].insertCell()
        }

}


function setTable(sizeOfTable,idOfTable){
    var data = [] //size is going to be sizeOfTable squared
    //we only need half
    var half = Math.ceil(sizeOfTable/2.0);
    var bottomHalf = half-1;
    for(let i = 0; i<sizeOfTable; i++)
        for(let j = 0; j < sizeOfTable; j++) {
            numberToPlace = (i+1)*i
        }
        

}