function is_palindrome(x) {
    x = String(x);
    if (x == x.split("").reverse().join("")) {
        return true;
    }
    return false;
}

const x = 122;
console.log(is_palindrome(x));