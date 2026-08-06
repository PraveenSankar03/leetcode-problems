function replace_words (dictionary,sentence) {
    sentence = sentence.split(" ");
    let refer = new Set(sentence);
    let check_dict = {};

    for (let word of refer) {
        let matches = [];
        for (let _dict of dictionary) {
            if (word[0] === _dict[0]) {
                if (word.length > _dict.length) {
                    let count = 0;
                    for (let index = 0; index < _dict.length; index ++) {
                        if (word[index] === _dict[index]) {
                            count ++;
                        }
                    }
                    if (count == _dict.length) {
                        matches.push(_dict);
                    }
                }
            }
        }
        if (!Object.keys(check_dict).includes(word)) {
            if (matches.length == 0) {
                check_dict[word] = word;
            } else {
                let best = matches.reduce((shortest,curr) => curr.length < shortest.length ? curr : shortest);
                check_dict[word] = best;
            }
        }
    }
    for (let word of sentence) {
        if (word in check_dict) {
            sentence[sentence.indexOf(word)] = check_dict[word];
        }
    }
    return sentence.join(" ");
}

const dictionary = ["catt","cat","bat","rat"];
const sentence = "the cattle was rattled by the battery";
console.log(replace_words(dictionary,sentence));