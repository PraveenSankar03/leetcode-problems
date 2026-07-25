def contains_dupliacte(nums):
    if len(nums) == len(set(nums)):
        return 'No duplicates'
    return 'Has duplicates'

nums = [1,2,3,1]
print(contains_dupliacte(nums))