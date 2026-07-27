function keyboard_row(words) {
    const row1 = "qwertyuiop";
    const row2 = "asdfghjkl";
    const row3 = "zxcvbnm";

    let result = [];
    for (let word of words) {
        let count = 0;
        if (row1.includes(word[0].toLowerCase())) {
            for (let index = 0; index < word.length; index ++) {
                if (row1.includes(word[index].toLowerCase())) {
                    count ++;
                }
            }
        } else if (row2.includes(word[0].toLowerCase())) {
            for (let index = 0; index < word.length; index ++) {
                if (row2.includes(word[index].toLowerCase())) {
                    count ++;
                }
            }
        } else {
            for (let index = 0; index < word.length; index ++) {
                if (row3.includes(word[0].toLowerCase())) {
                    count ++;
                }
            }
        }
        if (count == word.length) {
            result.push(word);
        }
    }
    return result;
}

const words = ["Hello","Alaska","Dad","Peace"];
console.log(keyboard_row(words));