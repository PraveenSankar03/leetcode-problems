def is_subsequence(s,t):
    result = str()
    current = 0
    for letter in t:
        if current < len(s) and letter == s[current]:
            result = result + letter
            current = current + 1
    if result == s:
        return True
    return False

s = "abc"
t = "ahbgdc"
print(is_subsequence(s,t))