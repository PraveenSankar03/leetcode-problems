def isomorphic_string(s,t):
    refer_dict = dict()
    for index in range(len(s)):
        if s[index] not in refer_dict.keys() and t[index] not in refer_dict.values():
            refer_dict[s[index]] = t[index]
    result = str()
    for letter in s:
        if letter in refer_dict:
            result += refer_dict[letter]
    if result == t:
        return True
    return False

s = "egg" 
t = "add"
print(isomorphic_string(s,t))