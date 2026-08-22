def move_zeros(nums):
    replica = list()
    for num in nums:
        if num != 0:
            replica.append(num)
    for _ in range(len(nums) - len(replica)):
        replica.append(0)    
    for i in range(len(replica)):
        nums[i] = replica[i]
        
    return nums

nums = [0,1,0,3,12]
print(move_zeros(nums))