function reverse_words(string) {
    string = string.split(" ");
    let word_list = new Array();
    for (let word of string) {
        if (word !== "") {
            word_list.push(word);
        }
    }
    let result = new String();
    for (let index = word_list.length -1; index >= 0; index --) {
        if (index === 0) {
            result = result + word_list[index];
        } else {
            result = result + word_list[index];
            result = result + " ";
        }
    }
    return result;
}

let string = " hello world ";
console.log(reverse_words(string));