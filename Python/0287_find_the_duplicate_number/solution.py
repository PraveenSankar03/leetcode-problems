def find_the_duplicate_number(nums):
    count_dict = dict()
    for num in nums:
        if num not in count_dict.keys():
            count_dict[num] = 1
        else:
            count_dict[num] += 1
    for key,value in count_dict.items():
        if value > 1:
            return key
    return None

nums = [3,1,3,4,2]
print(find_the_duplicate_number(nums))