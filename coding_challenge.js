function findLongestWord(sentence) {

    let longestWord = "";
    let mostVowels = 0;


    const words = sentence.toLowerCase().match(/[a-z]+/g).filter(word => /^[a-z]+$/.test(word));


    if (!words || words.length === 0) {
        return "No valid words found in the input!";
    }


    for (const word of words) {

        const vowelCount = (word.match(/[aeiou]/g) || []).length;

        if (word.length > longestWord.length || (word.length === longestWord.length && vowelCount > mostVowels)) {

            longestWord = word;
            mostVowels = vowelCount;

        }

    }

    return longestWord;

}


const inputSentence = "Smart people learn from eveaaaarything and everyone, average people from their expeqqqqridddence, stupid people already, have all the answers";


console.log(findLongestWord(inputSentence));