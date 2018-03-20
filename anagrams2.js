function alphabetize(word) {
    return word.toLowerCase().split("").sort().join("").trim();
}

// adds function to the user button //
document.getElementById("findButton").onclick = function() {
    let typedText = document.getElementById("input").value;
    
    for (i=0; i<words.length; i++){
        let dictionary = words[i];
        
        if(alphabetize(typedText) === alphabetize(dictionary)) {
                
            document.write((dictionary) + ",  ");

            }
       
    }  
}   
      
        




// End test //



