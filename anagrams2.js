

// var typedText = document.getElementById("input").value;



function alphabetize(word) {
    return word.toLowerCase().split("").sort().join("").trim();
}
function getAnagrams() {

    const anagrams = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const alphaWord = alphabetize(word);
        if (alphaWord in anagrams) {
            anagrams[alphaWord].push(word);
        } else {
            anagrams[alphaWord] = [word];
        }
    }

    return anagrams;
}

function findAnagrams(){
    const foundAnagrams = getAnagrams();
    for (let key in foundAnagrams) {
        if (foundAnagrams[key].length >= 5) {
            console.log(foundAnagrams[key]);
        }
    }
}

findAnagrams();


