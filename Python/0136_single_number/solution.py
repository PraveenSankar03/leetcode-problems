def single_number(nums):
    num_count = {}
    for num in nums:
        if num not in num_count:
            num_count[num] = 1
        else:
            num_count[num] += 1

    for key,value in num_count.items():
        if value == 1:
            return key
    return

nums = [4,1,2,1,2]
print(single_number(nums))