def find_words_containing_char(words,find):
    result = list()
    for index,word in enumerate(words):
        if find in word:
            result.append(index)
    return result

words = ["abc","bcd","aaaa","cbc"]
find = "a"
print(find_words_containing_char(words,find))