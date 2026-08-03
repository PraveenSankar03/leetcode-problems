function calculate_points(ops) {
    let result = [];
    for (let char of ops) {
        if (char == 'C') {
            result.pop();
        } else if (char == 'D') {
            result.push(result[result.length - 1] * 2);
        } else if (char == "+") {
            result.push(result[result.length - 1] + result[result.length - 2]);
        } else {
            result.push(Number(char));
        }
    }
    let total = result.reduce((a,b) => a + b);
    return total;
}

const ops = ["5","2","C","D","+"];
console.log(calculate_points(ops));