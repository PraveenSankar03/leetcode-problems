def number_of_lines_to_write_string(widths,string):  
    refer = dict()
    width_index = 0
    for index in range(ord('a'),ord('z') + 1):
        if chr(index) not in refer:
            refer[chr(index)] = widths[width_index]
        width_index += 1
    final = list()
    result = list()
    for letter in string:
        result.append(refer[letter])
        if sum(result) > 100:
            result.pop()
            final.append(sum(result))
            result.clear()
            result.append(refer[letter])
    final.append(sum(result))
    return [len(final),final[-1]]
            

widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
string = "bbbcccdddaaa"
print(number_of_lines_to_write_string(widths,string))
