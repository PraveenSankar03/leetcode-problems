def replace_digits_with_characters(string):
    result = str()
    for index in range(len(string)):
        if string[index].isdigit():
            current = string[index - 1]
            result = result + chr(ord(current) + int(string[index]))
        else:
            result = result + string[index]
    return result

string = "a1b2c3d4e"
print(replace_digits_with_characters(string))