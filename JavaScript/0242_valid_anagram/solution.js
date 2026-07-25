function valid_anagram(s,t) {
    s = s.split("").sort().join("");
    if (t.split("").sort().join("") == s) {
        return true
    }
    return false
}

let s = "anagram";
let t = "nagaram";
console.log(valid_anagram(s,t));