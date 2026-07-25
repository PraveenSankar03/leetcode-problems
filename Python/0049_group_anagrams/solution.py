def group_anagrams(strs):
    result = {}
    for string in strs:
        canonical = "".join(sorted(string))
        if canonical in result:
            result[canonical].append(string)
        else:
            result[canonical] = [string]
    return list(result.values())

strs = ["eat","tea","tan","ate","nat","bat"]
print(group_anagrams(strs))