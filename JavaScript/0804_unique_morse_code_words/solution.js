function unique_morse_code_words(words) {
    const morse_refer = {'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..'};

    let morse_code = [];
    for (let word of words) {
        let morse_string = "";
        for (let letter of word) {
            if (letter.toLowerCase() in morse_refer) {
                morse_string += morse_refer[letter];
            }
        }
        if (!morse_code.includes(morse_string)) {
            morse_code.push(morse_string);
        }
    }
    return morse_code.length;
}

const words = ["gin","zen","gig","msg"];
console.log(unique_morse_code_words(words));