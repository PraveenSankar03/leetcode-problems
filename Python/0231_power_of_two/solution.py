def power_of_two(num):
    current = 0
    while 2 ** current <= num:
        if 2 ** current == num:
            return True
        current = current + 1
    return False

num = 16
print(power_of_two(num))