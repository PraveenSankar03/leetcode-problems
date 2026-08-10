function rotate_image(matrix) {
    let copy = [];
    let _length = 0;
    while (copy.length != matrix.length) {
        let curr = [];
        for (let index = matrix.length -1; index >= 0; index --) {
            curr.push(matrix[index][_length]);
        }
        copy.push(curr);
        _length ++;
    }
    for (let i = 0; i < copy.length; i ++) {
        for (let j = 0; j < copy[i].length; j ++) {
            matrix[i][j] = copy[i][j];
        }
    }
    return matrix;
}

let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
console.log(rotate_image(matrix));``