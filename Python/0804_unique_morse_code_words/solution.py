def unique_morse_code_words(words):
    morse_refer = {'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..'}
    
    morse_code = []
    for word in words:
        morse_string = ""
        for letter in word:
            if letter.lower() in morse_refer:
                morse_string += morse_refer[letter]
        if morse_string not in morse_code:
            morse_code.append(morse_string)
    return len(morse_code)

words = ["gin","zen","gig","msg"]
print(unique_morse_code_words(words))