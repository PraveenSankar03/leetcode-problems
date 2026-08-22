def keyboard_row(words):
    row1 = "qwertyuiop"
    row2 = "asdfghjkl"
    row3 = "zxcvbnm"
    
    result = list()
    for word in words:
        count = 0
        if word[0].lower() in row1:
            for index in range(len(word)):
                if word[index].lower() in row1:
                    count += 1
        elif word[0].lower() in row2:
            for index in range(len(word)):
                if word[index].lower() in row2:
                    count += 1
        else:
            for index in range(len(word)):
                if word[index].lower() in row3:
                    count += 1
        if count == len(word):
            result.append(word)
            
    return result

words = ["tyrip","praveen","qwerty","alak"]
print(keyboard_row(words))