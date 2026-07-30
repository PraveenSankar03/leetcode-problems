def find_error_nums(nums):
    num_count = {}
    for num in nums:
        if num not in num_count:
            num_count[num] = 1
        else:
            num_count[num] += 1
    result = []
    for key,value in num_count.items():
        if value > 1:
            result.append(key)
    for num in range(1, len(nums) + 1):
        if num not in nums:
            result.append(num)
    return result

nums = [1,2,2,4]
print(find_error_nums(nums))