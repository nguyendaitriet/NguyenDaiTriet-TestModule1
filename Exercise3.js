function checkVowel(array) {
    let vowels = /[aoeui]/;
    let count = 0;
    for (let value of array) {
        if (vowels.test(value)) {
            count ++;
        }
    };
    if (count > 0) {
        return count;
    }
    return false;
}

let characterString = "aboura1244c";
let countVowel = checkVowel(characterString);

if (countVowel) {
    console.log("Total of vowel in string: " + countVowel);
} else {
    console.log("No vowel found");
}