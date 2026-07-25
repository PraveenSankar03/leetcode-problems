function length_of_last_word(string) {
    string = string.split(" ");
    let result = [];
    for (let word of string) {
        if (word != "") {
            result.push(word);
        }
    }
    return result[result.length - 1].length;
}

const string = "  hello world  everyone   ";
console.log(length_of_last_word(string));