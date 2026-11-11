def reverse_only_letter(string):
    result = str()
    letter_list = list()
    for index in range(len(string)-1, -1, -1):
        if string[index].isalpha():
            letter_list.append(string[index])
    current = 0
    for char in string:
        if char.isalpha():
            result = result + letter_list[current]
            current = current + 1
        else:
            result = result + char
    return result

string = "Test1ng-Leet=code-Q!"
print(reverse_only_letter(string))