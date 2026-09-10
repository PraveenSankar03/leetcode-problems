function find_segment_count(string) {
    string = string.split(" ");
    result = new Array();
    for (let word of string) {
        if (word !== "") {
            result.push(word);
        }
    }
    return result.length;
}

let string = "Hello, my name is John";
console.log(find_segment_count(string));