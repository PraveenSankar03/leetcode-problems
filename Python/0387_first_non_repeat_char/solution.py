def first_non_repeat_char(string):
    char_count = {}
    for char in string:
        if char not in char_count:
            char_count[char] = 1
        else:
            char_count[char] += 1
    
    for key,value in char_count.items():
        if value == 1:
            return key
    return -1

string = 'abcda'
print(first_non_repeat_char(string))