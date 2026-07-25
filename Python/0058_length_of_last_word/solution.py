def len_of_last_word(string):
    string = string.split(" ")
    result = []
    for word in string:
        if word != "":
            result.append(word)
    return len(result[-1])

string = "  hello word   everyone   "
print(len_of_last_word(string))