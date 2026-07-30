function delete_greatest_in_row(grid) {
    let result = [];
    while (grid[0].length != 0) {
        let get_max = [];
        for (let row of grid) {
            const max = Math.max(...row);
            get_max.push(max);
            row.splice(row.indexOf(max), 1);
        }
        result.push(Math.max(...get_max));
    }
    return result.reduce((a,b) => a + b, 0)
}

let grid = [[1,2,4],[3,3,1]];
console.log(delete_greatest_in_row(grid));