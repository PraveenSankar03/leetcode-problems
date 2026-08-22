def single_number(nums):
    num_count = dict()
    for num in nums:
        if num not in num_count:
            num_count[num] = 1
        else:
            num_count[num] += 1
    for key,value in num_count.items():
        if value == 1:
            return key
    return None

nums = [0,1,0,1,0,1,99]
print(single_number(nums))