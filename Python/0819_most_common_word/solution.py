def most_common_word(paragraph,banned):
    word_count = dict()
    curr = str()
    for char in paragraph:
        if char.isalnum():
            curr += char.lower()
        else:
            if len(curr) != 0:
                if curr not in banned:
                    if curr not in word_count:
                        word_count[curr] = 1
                    else:
                        word_count[curr] += 1
            curr = str()
    if len(curr) != 0:
        if curr not in banned:
            if curr not in word_count:
                word_count[curr] = 1
            else:
                word_count[curr] += 1
    max_value = max(word_count.values())
    for key,value in word_count.items():
        if value == max_value:
            return key
    return None

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
print(most_common_word(paragraph,banned))