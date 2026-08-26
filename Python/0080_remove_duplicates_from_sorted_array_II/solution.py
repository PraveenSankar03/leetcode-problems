def remove_duplicates(nums):
    check_dict = dict()
    for num in nums:
        if num in check_dict:
            if check_dict[num] < 2:
                check_dict[num] += 1
        else:
            check_dict[num] = 1
    duplicate = list()
    for key,value in check_dict.items():
        for _ in range(value):
            duplicate.append(key)
    diff = len(nums) - len(duplicate)
    for _ in range(diff):
        duplicate.append(0)
    for index in range(len(nums)):
        nums[index] = duplicate[index]
    return len(nums) - diff

nums = [1,1,1,2,2,3]
print(remove_duplicates(nums))