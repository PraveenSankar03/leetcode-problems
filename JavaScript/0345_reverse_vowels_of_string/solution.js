function reverse_vowels(string) {
    string = string.split("");
    const vowels = ['a','e','i','o','u'];
    let vowel_list = new Array();
    for (let index = 0; index < string.length; index ++) {
        if (vowels.includes(string[index].toLowerCase())) {
            vowel_list.push(string[index]);
            string[index] = 0;
        }
    }
    let current = vowel_list.length - 1;
    for (let index = 0; index < string.length; index ++) {
        if (string[index] == 0) {
            string[index] = vowel_list[current];
            current --;
        }
    }
    return string.join("");
}

let string = "IceCreAm";
console.log(reverse_vowels(string));