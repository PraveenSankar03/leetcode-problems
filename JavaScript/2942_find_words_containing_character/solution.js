function find_words_containing_char(words,find) {
    let result = new Array();
    for (let [index,word] of words.entries()) {
        if (word.includes(find)) {
            result.push(index);
        }
    }
    return result;
}

const words = ["abc","bcd","aaaa","cbc"];
const find = "a";
console.log(find_words_containing_char(words,find));