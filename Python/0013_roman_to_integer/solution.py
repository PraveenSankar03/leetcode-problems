def roman_to_integer(string):
    romans = {"I" : 1, "V" : 5, "X" : 10, "L" : 50, "C" : 100, "D" : 500, "M" : 1000}
    result = []
    for letter in string:
        if letter in romans.keys():
            if len(result) == 0:
                result.append(romans[letter])
            else:
                if result[-1] >= romans[letter]:
                    result.append(romans[letter])
                else:
                    result.append(romans[letter] - result[-1])
                    result[-2] = 0
    return sum(result)
            

string = "MCMXCIV"
print(roman_to_integer(string))