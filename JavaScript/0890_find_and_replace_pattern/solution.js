function find_and_replace_pattern(words,pattern) {
    let result = [];
    for (let word of words) {
        let check_dict = {};
        for (let index = 0; index < pattern.length; index ++) {
            if (!Object.keys(check_dict).includes(pattern[index]) && !Object.values(check_dict).includes(word[index])) {
                check_dict[pattern[index]] = word[index];
            }
        }
        let string = "";
        for (let letter of pattern) {
            if (Object.keys(check_dict).includes(letter)) {
                string += check_dict[letter];
            }
        }
        if (string === word) {
            result.push(string);
        }
    }
    return result;
}

const words = ["abc","deq","mee","aqq","dkd","ccc"];
const pattern = "abb";
console.log(find_and_replace_pattern(words,pattern));