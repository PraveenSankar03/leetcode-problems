def jewels_and_stones(jewels,stones):
    jewel_dict = {}
    for letter in stones:
        if letter in jewels:
            if letter not in jewel_dict:
                jewel_dict[letter] = 1
            else:
                jewel_dict[letter] += 1
    return sum(jewel_dict.values())     

jewels = "aA"
stones = "aAAbbbb"
print(jewels_and_stones(jewels,stones))