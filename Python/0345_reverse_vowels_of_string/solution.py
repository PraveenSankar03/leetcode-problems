def reverse_vowels(string):
    string = list(string)
    vowels = ['a','e','i','o','u']
    vowel_list = list()
    for index in range(len(string)):
        if string[index].lower() in vowels:
            vowel_list.append(string[index])
            string[index] = 0
    current = len(vowel_list) - 1
    for index in range(len(string)):
        if string[index] == 0:
            string[index] = vowel_list[current]
            current -= 1
    return "".join(string)

string = "IceCreAm"
print(reverse_vowels(string))