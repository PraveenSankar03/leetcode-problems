def search_insert_position(nums,target):
    if target not in nums:
        nums.append(target)
    nums.sort()
    for index,num in enumerate(nums):
        if num == target:
            return index

nums = [1,3,5,6]
target = 7
print(search_insert_position(nums,target))