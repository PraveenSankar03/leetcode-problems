function find_max_frequency(string) {
    let vowel_dict = {"a":0, "e":0, "i":0, "o":0, "u":0};
    let consonant_dict = new Object();
    for (let index = "a".codePointAt(); index <= "z".codePointAt(); index ++) {
        if (!(String.fromCodePoint(index) in vowel_dict)) {
            consonant_dict[String.fromCodePoint(index)] = 0;
        }
    }
    for (let letter of string) {
        if (Object.keys(vowel_dict).includes(letter)) {
            vowel_dict[letter] ++;
        } else if (Object.keys(consonant_dict).includes(letter)) {
            consonant_dict[letter] ++;
        }
    }
    return Math.max(...Object.values(vowel_dict)) + Math.max(...Object.values(consonant_dict));
}

const string = "successes";
console.log(find_max_frequency(string));