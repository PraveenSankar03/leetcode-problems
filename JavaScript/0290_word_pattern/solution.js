function find_word_pattern(pattern,string) {
    string = string.split(" ");
    if (string.length > pattern.length || pattern.length > string.length) {
        return false;
    }
    let refer_dict = new Object();
    for (let index = 0; index < string.length; index ++) {
        if (!Object.values(refer_dict).includes(string[index])) {
            refer_dict[pattern[index]] = string[index];
        }
    }
    for (let letter of pattern) {
        if (!Object.keys(refer_dict).includes(letter)) {
            refer_dict[letter] = 0;
        }
    }
    let result = "";
    for (let letter of pattern) {
        result += refer_dict[letter];
    }
    return result === string.join("");
}

const pattern = "abba";
const string = "dog cat cat dog";
console.log(find_word_pattern(pattern,string));