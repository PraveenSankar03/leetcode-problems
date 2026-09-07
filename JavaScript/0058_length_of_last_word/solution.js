function length_of_last_word(string) {
    string = string.split(" ");
    let result = [];
    for (let word of string) {
        if (word !== "") {
            result.push(word);
        }
    }
    if (result.length > 0) {
        return result[result.length -1].length;
    }
    return 0;
}

const string = "  hello world  everyone   ";
console.log(length_of_last_word(string));