function fetch(whereToFetch){
    return document.getElementById(whereToFetch).value;
}

function place(whatToPlace, idOfPlace){
    document.getElementById(idOfPlace).innerHTML = "" + whatToPlace;
}

function countVowels(whatToCount){
    var vowels = 0;
    chars = ['a','e','i','o','u'];
    Array.from(whatToCount).forEach(element => {
        if(chars.indexOf(element) != -1)
            vowels++;
    });
    return vowels + " vowels in the text";
}

function placeUnique(whatToAnalyse){
    var textBuild = ""
    for( let i = 0; i < whatToAnalyse.length; i++){
        if(whatToAnalyse.indexOf(whatToAnalyse.charAt(i)) == i)
            textBuild+=whatToAnalyse.charAt(i);
    }
    return textBuild;
}

function findSubString(whatToFind, whereToSearch){
    var indexFound = 0;
    var startFound = -1;
    var endFound = 0;
    console.log("len: " + whatToFind.length);
    for(let index = 0; index < whereToSearch.length; index++){
        var element = whereToSearch.charAt(index);
        if(element == whatToFind.charAt(indexFound)){
            indexFound++;
            console.log(indexFound + " index: "+ index);
            if(startFound == -1) {
                startFound=index;
                console.log("start Found: " + startFound);
            }
        } 
        else if(element != whatToFind.charAt(indexFound)){
            indexFound = 0;
            startFound = -1;
            console.log("No match")
        }
        if( indexFound == whatToFind.length) {
            console.log("Pair: " + [startFound,index]);
            return [startFound,index];
        } 


    };


    return 'Not Found';
}


