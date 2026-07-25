def first_palindrome_in_string(words):
    for word in words:
        if word == word[::-1]:
            return word
    return ""

words = ["abc","car","ada","racecar","cool"]
print(first_palindrome_in_string(words))