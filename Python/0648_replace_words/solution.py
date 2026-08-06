def replace_words(dictionary,sentence):
    sentence = sentence.split(" ")
    refer = set(sentence)
    check_dict = {}
    for word in refer:
        matches = []
        for _dict in dictionary:
            if word[0] == _dict[0]:
                if len(word) > len(_dict):
                    count = 0
                    for index in range(len(_dict)):
                        if word[index] == _dict[index]:
                            count += 1
                    if count == len(_dict):
                        matches.append(_dict)
        if word not in check_dict.keys():
            if len(matches) == 0:
                check_dict[word] = word
            else:
                check_dict[word] = min(matches)
    for word in sentence:
        if word in check_dict.keys():
            sentence[sentence.index(word)] = check_dict[word]
    return " ".join(sentence)

dictionary = ["catt","cat","bat","rat"]
sentence = "the cattle was rattled by the battery"
print(replace_words(dictionary,sentence))