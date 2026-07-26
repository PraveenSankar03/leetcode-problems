function valid_palindrome(string) {
    let result = "";
    for (let char of string) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            result += char;
        }
    }
    const reversed_string = result.split("").reverse().join("");
    if (result.toLowerCase() == reversed_string.toLowerCase()) {
        return true;
    }
    return false;
}

const string = "A man, a plan, a canal: Panama";
console.log(valid_palindrome(string));