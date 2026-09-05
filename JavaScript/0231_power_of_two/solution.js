function power_of_two(num) {
    let current = 0;
    while (2 ** current <= num) {
        if (2 ** current == num) {
            return true;
        }
        current ++;
    }
    return false;
}

const num = 16;
console.log(power_of_two(num));