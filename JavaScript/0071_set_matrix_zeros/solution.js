function set_matrix_zeros(matrix) {
    let zero_indices = new Set();
    for (let arr of matrix) {
        for (let index = 0; index < arr.length; index ++) {
            if (arr[index] === 0) {
                zero_indices.add(index);
            }
        }
    }
    for (let arr of matrix) {
        if (arr.includes(0)) {
            for (let index = 0; index < arr.length; index ++) {
                arr[index] = 0;
            }
        }
    }
    for (let index of zero_indices) {
        for (let arr of matrix) {
            arr[index] = 0;
        }
    }
    return matrix;
}

const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(set_matrix_zeros(matrix));