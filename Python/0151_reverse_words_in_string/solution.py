def reverse_words(string):
    string = string.split()
    result = str()
    for index in range(len(string) -1, -1, -1):
        if index == 0:
            result = result + string[index]
        else:
            result = result + string[index]
            result = result + " "
    return result

string = "  the sky is blue  "
print(reverse_words(string))