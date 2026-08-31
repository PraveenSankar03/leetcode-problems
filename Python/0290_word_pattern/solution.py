def find_word_pattern(pattern,string):
    string = string.split(" ")
    if len(string) > len(pattern) or len(pattern) > len(string):
        return False
    refer_dict = dict()
    for index in range(len(string)):
        if string[index] not in refer_dict.values():
            refer_dict[pattern[index]] = string[index]
    for letter in pattern:
        if letter not in refer_dict:
            refer_dict[letter] = str(0)
    result = str()
    for letter in pattern:
        result += refer_dict[letter]
    return result == "".join(string)

pattern = "abba"
string = "dog cat cat dog"
print(find_word_pattern(pattern,string))