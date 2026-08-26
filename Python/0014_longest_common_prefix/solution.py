def find_longest_prefix(words):
    len_dict = dict()
    for word in words:
        len_dict[len(word)] = word
    refer = len_dict[min(len_dict)]
    result = str()
    for index in range(len(refer)):
        check_set = set()
        for word in words:
            check_set.add(word[index])
        if len(check_set) != 1:
            return result
        current = list(check_set)
        result += current[0]
    return result

words  = ["flower","flow","flight"]
print(find_longest_prefix(words))