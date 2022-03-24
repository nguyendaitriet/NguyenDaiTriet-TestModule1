function checkVowel(array) {
    let vowels = /[aoeui]/;
    let count = 0;
    for (let value of array) {
        if (vowels.test(value.toLowerCase())) {
            count ++;
        }
    };
    if (count > 0) {
        return count;
    }
    return false;
}

let characterString = "UEOAI";
let countVowel = checkVowel(characterString);

if (countVowel) {
    console.log("Total of vowel in string: " + countVowel);
} else {
    console.log("No vowel found");
}