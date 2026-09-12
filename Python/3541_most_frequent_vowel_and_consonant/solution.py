def find_max_frequency(string):
    vowel_dict = {"a":0, "e":0, "i":0, "o":0, "u":0}
    consonant_dict = dict()
    for index in range(ord('a'), ord('z') + 1):
        if chr(index) not in vowel_dict.keys():
            consonant_dict[chr(index)] = 0
    for letter in string:
        if letter in vowel_dict.keys():
            vowel_dict[letter] += 1
        elif letter in consonant_dict.keys():
            consonant_dict[letter] += 1
    return max(vowel_dict.values()) + max(consonant_dict.values())

string = "successes"
print(find_max_frequency(string))