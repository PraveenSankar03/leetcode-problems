def delete_greatest_in_row(grid):
    result = list()
    while len(grid[0]) != 0:
        get_max = []
        for i in grid:
            get_max.append(max(i))
            i.remove(max(i))
        result.append(max(get_max))
        
    return sum(result)

grid = [[1,2,4],[3,3,1]]
print(delete_greatest_in_row(grid))