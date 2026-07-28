function jewels_and_stones(jewels,stones) {
    let jewel_dict = {};
    for (let letter of stones) {
        if (jewels.includes(letter)) {
            if (letter in jewel_dict) {
                jewel_dict[letter] ++;
            } else {
                jewel_dict[letter] = 1;
            }
        }
    }
    const sum = Object.values(jewel_dict).reduce((acc, val) => acc + val, 0);
    return sum;
}

const jewels = "aA";
const stones = "aAAbbbb";
console.log(jewels_and_stones(jewels,stones));