def summary_ranges(nums):
    copy = list()
    check = list()
    for num in nums:
        if len(check) == 0:
            check.append(num)
        else:
            if check[-1] + 1 != num:
                copy.append(check)
                check = list()
                check.append(num)
            else:
                check.append(num)
    copy.append(check)
    result = list()
    for index in range(len(copy)):
        if len(copy[index]) > 1:
            result.append(f"{copy[index][0]}->{copy[index][-1]}")
        elif len(copy[index]) == 1:
            result.append(f"{copy[index][0]}")
    return result

nums = [0,2,3,4,6,8,9]
print(summary_ranges(nums))