function robot_return_to_origin(moves) {
    let check_dict = {'U' : 0, 'D' : 0, 'R' : 0, 'L' : 0};
    for (let letter of moves) {
        if (letter == 'U') {
            if (check_dict['D'] >= 1) {
                check_dict['D'] --;
            } else {
                check_dict['U'] ++;
            }
        } else if (letter == 'D') {
            if (check_dict['U'] >= 1) {
                check_dict['U'] --;
            } else {
                check_dict['D'] ++;
            }
        } else if (letter = 'R') {
            if (check_dict['L'] >= 1) {
                check_dict['L'] --;
            } else {
                check_dict['R'] ++;
            }
        } else {
            if (check_dict['R'] >= 1) {
                check_dict['R'] --;
            } else {
                check_dict['L'] ++;
            }
        }
    }
    let result = 0;
    for (let values of Object.values(check_dict)) {
        result += values;
    }
    if (result == 0) {
        return true;
    }
    return false;
}

const moves = "UD";
console.log(robot_return_to_origin(moves));