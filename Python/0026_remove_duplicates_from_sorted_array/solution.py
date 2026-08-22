def remove_duplicates(nums):
    replica = list()
    for num in nums:
        if num not in replica:
            replica.append(num)
    for _ in range(len(nums) - len(replica)):
        replica.append("")
    for i in range(len(replica)):
        nums[i] = replica[i] 
    final = list()
    for num in nums:
        if num != "":
            final.append(num)
    
    return [len(final),nums]

nums = [0,0,1,1,1,2,2,3,3,4]
print(remove_duplicates(nums))