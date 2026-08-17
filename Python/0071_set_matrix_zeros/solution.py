def set_matrix_zeros(matrix):
    zero_indices = set()
    for arr in matrix:
        for index in range(len(arr)):
            if arr[index] == 0:
                zero_indices.add(index)
    for arr in matrix:
        if 0 in arr:
            for index in range(len(arr)):
                arr[index] = 0
    for index in zero_indices:
        for arr in matrix:
            arr[index] = 0
    return matrix

matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
print(set_matrix_zeros(matrix))