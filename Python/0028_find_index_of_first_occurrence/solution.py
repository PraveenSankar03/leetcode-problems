def find_index_of_first_occurrence(heystack,needle):
    result = heystack.find(needle)
    return result

haystack = "sadbutsad"
needle = "sad"
print(find_index_of_first_occurrence(haystack,needle))