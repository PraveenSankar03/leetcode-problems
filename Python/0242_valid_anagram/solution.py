def valid_anagram(s,t):
    s = "".join(sorted(s))
    if "".join(sorted(t)) == s:
        return True
    return False

s = "anagram"
t = "nagaram"
print(valid_anagram(s,t))