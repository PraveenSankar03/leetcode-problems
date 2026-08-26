function find_longest_prefix(words) {
    let len_dict = new Object();
    for (let word of words) {
        len_dict[word.length] = word;
    }
    let refer = len_dict[Math.min(...Object.keys(len_dict))];
    let result = new String();
    for (let index = 0; index < refer.length; index ++) {
        let check_set = new Set();
        for (let word of words) {
            check_set.add(word[index]);
        }
        if (check_set.size !== 1) {
            return result;
        }
        let curr = Array.from(check_set);
        result += curr[0];
    }
    return result;
}

const words  = ["flower","flow","flight"];
console.log(find_longest_prefix(words));