def find_single_number(nums):
    refer_dict = dict()
    for num in nums:
        if num not in refer_dict:
            refer_dict[num] = 1
        elif num in refer_dict:
            refer_dict[num] += 1
    unique = list()
    for key,value in refer_dict.items():
        if value == 1:
            unique.append(key)
    return unique

nums = [1,2,1,3,2,5]
print(find_single_number(nums))