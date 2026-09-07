def len_of_last_word(string):
    string = string.split()
    if len(string) > 0:
        return len(string[-1])
    return 0

string = "  hello word   everyone   "
print(len_of_last_word(string))