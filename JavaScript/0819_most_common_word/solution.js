function most_common_word(paragraph,banned) {
    let word_count = {};
    let curr = "";
    for (let char of paragraph) {
        if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") {
            curr += char.toLowerCase()
        } else {
            if (curr.length != 0) {
                if (!banned.includes(curr)) {
                    if (!(curr in word_count)) {
                        word_count[curr] = 1;
                    } else {
                        word_count[curr] ++;
                    }
                }
            }
            curr = "";
        }
    }
    if (curr.length != 0) {
        if (!banned.includes(curr)) {
            if (!(curr in word_count)) {
                word_count[curr] = 1;
            } else {
                word_count[curr] ++;
            }
        }
    }
    let max_value = Math.max(...Object.values(word_count));
    for (let [key,value] of Object.entries(word_count)) {
        if (value === max_value) {
            return key;
        }
    }
    return null;
}

const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
const banned = ["hit"];
console.log(most_common_word(paragraph,banned))