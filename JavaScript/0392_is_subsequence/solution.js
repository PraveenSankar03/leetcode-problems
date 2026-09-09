function is_subsequence(s,t) {
    let result = new String();
    let current = 0;
    for (let letter of t) {
        if (current < s.length && letter == s[current]) {
            result = result + letter;
            current ++;
        }
    }
    if (result == s) {
        return true;
    }
    return false;
}

const s = "abc";
const t = "ahbgdc";
console.log(is_subsequence(s,t));