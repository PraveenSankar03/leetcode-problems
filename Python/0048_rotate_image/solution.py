def rotate_image(matrix):
    copy = []
    length = 0
    while len(copy) != len(matrix):
        curr = []
        for index in range(len(matrix)-1, -1, -1):
            curr.append(matrix[index][length])
        copy.append(curr)
        length += 1
    for i in range(len(copy)):
        for j in range(len(copy[i])):
            matrix[i][j] = copy[i][j]
    return matrix

matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
print(rotate_image(matrix))