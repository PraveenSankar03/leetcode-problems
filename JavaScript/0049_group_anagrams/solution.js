function group_anagrams(strs) {
    let result = {};
    for (let string of strs) {
        let canonical = string.split("").sort().join("");
        if (canonical in result) {
            result[canonical].push(string);
        } else {
            result[canonical] = [string];
        }
    }
    return Object.values(result);
}

const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(group_anagrams(strs));