

// var typedText = document.getElementById("input").value;

function alphabetize(typedText) {
    return word.toLowerCase().split("").sort().join("").trim();   
}

// adds function to the user button //
document.getElementById("findButton").onclick = function() {
    let typedText = document.getElementById("input").value;
    console.log(typedText);
    for (i=0; i<words.length; i++){
        let dictionary = words[i];
        
        if(alphabetize(typedText) === alphabetize(dictionary)) {
                
            document.write((dictionary) + ",  ");

            }
       
    }  
} 
function getAnagrams(word){

    const anagrams = {};
    for (let i=0; i<words.length; i++){
        const word = words[i];
        const alphaWord = alphabetize(word);
        if (alphaWord in anagrams){
            anagrams[alphaWord].push(word);
        }else{
            anagrams[alphaWord]=[word];
        }
    }
        
    return anagrams;
    const foundAnagrams = getAnagrams();
    for(let key in foundAnagrams){
        console.log(key);
        console.log(foundAnagrams[key]);
        if(foundAnagrams[key].length>=5){
            console.log(foundAnagrams[key]);
        }
    }
}   




