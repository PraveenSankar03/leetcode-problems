def robot_return_to_origin(moves):
    check_dict = {'U' : 0, 'D' : 0, 'L' : 0, 'R' : 0}
    for letter in moves:
        if letter == 'U':
            if check_dict['D'] >= 1:
                check_dict['D'] -= 1
            else:
                check_dict['U'] += 1
        elif letter == 'D':
            if check_dict['U'] >= 1:
                check_dict['U'] -= 1
            else:
                check_dict['D'] += 1
        elif letter == 'R':
            if check_dict['L'] >= 1:
                check_dict['L'] -= 1
            else:
                check_dict['R'] += 1
        else:
            if check_dict['R'] >= 1:
                check_dict['R'] -= 1
            else:
                check_dict['L'] += 1
                
    result = list()
    for key,value in check_dict.items():
        result.append(value)
    if sum(result) == 0:
        return True
    return False

moves = "LL"
print(robot_return_to_origin(moves))