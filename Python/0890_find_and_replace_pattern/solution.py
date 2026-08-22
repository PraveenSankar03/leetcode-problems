def find_and_replace_pattern(words,pattern):
    result = list()
    for word in words:
        check_dict = dict()
        for index in range(len(pattern)):
            if pattern[index] not in check_dict.keys() and word[index] not in check_dict.values():
                check_dict[pattern[index]] = word[index]
        string = str()
        for letter in pattern:
            if letter in check_dict.keys():
                string += check_dict[letter]
        if string == word:
            result.append(string)
    return result

words = ["abc","deq","mee","aqq","dkd","ccc"]
pattern = "abb"
print(find_and_replace_pattern(words,pattern))