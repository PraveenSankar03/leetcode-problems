function find_index_of_first_occurrence(haystack,needle) {
    result = haystack.indexOf(needle);
    return result;
}

haystack = "sadbutsad";
needle = "sad";
console.log(find_index_of_first_occurrence(haystack,needle));