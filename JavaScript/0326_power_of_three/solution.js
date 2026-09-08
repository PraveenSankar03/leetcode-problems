function is_power_of_three(num) {
    let current = 0;
    while (3 ** current <= num) {
        if (3 ** current === num) {
            return true;
        }
        current ++;
    }
    return false;
}

const num = 27;
console.log(is_power_of_three(num));