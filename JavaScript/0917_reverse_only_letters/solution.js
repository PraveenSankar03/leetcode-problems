function reverse_only_letter(string) {
    let result = new String();
    let letter_list = new Array();
    for (let index = string.length; index >= 0; index --) {
        if (string[index] >= "a" && string[index] <= "z" || string[index] >= "A" && string[index] <= "Z") {
            letter_list.push(string[index]);
        }
    }
    current = 0;
    for (let char of string) {
        if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") {
            result = result + letter_list[current];
            current ++;
        } else {
            result = result + char;
        }
    }
    return result;
};

const string = "Test1ng-Leet=code-Q!";
console.log(reverse_only_letter(string));