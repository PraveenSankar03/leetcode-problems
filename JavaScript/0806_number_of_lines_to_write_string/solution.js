function number_of_lines_to_write_string(widths,string) {
    let refer = {};
    let width_index = 0;
    for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i ++) {
        if (!(String.fromCharCode(i) in refer)) {
            refer[String.fromCharCode(i)] = widths[width_index];
        }
        width_index ++;
    }
    let final = [];
    let result = [];
    for (let letter of string) {
        result.push(refer[letter])
        const total = result.reduce((acc, val) => acc + val, 0);
        if (total > 100) {
            result.pop();
            final.push(total);
            result = [];
            result.push(refer[letter]);
        }
    }
    const total = result.reduce((acc, val) => acc + val, 0);
    final.push(total);
    return [final.length,final[final.length - 1]];
}

const widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
const string = "abcdefghijklmnopqrstuvwxyz";
console.log(number_of_lines_to_write_string(widths,string));