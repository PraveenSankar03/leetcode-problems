function isomorphic_string(s,t) {
    let refer_dict = new Object();
    for (let index = 0; index < s.length; index ++) {
        if (!Object.keys(refer_dict).includes(s[index]) && !Object.values(refer_dict).includes(t[index])) {
            refer_dict[s[index]] = t[index];
        }
    }
    result = new String();
    for (let letter of s) {
        if (letter in refer_dict) {
            result = result + refer_dict[letter];
        }
    }
    if (result === t) {
        return true;
    }
    return false;
}

const s = "egg" 
const t = "add"
console.log(isomorphic_string(s,t))