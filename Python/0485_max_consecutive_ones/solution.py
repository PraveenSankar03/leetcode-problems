def max_consecutive_ones(nums):
    result = str()
    for num in nums:
        if num == 1:
            result += str(num)
        else:
            result += " "
    result = result.split(" ")
    return len(max(result))

nums = [1,1,0,1,1,1]
print(max_consecutive_ones(nums))