def is_power_of_three(num):
    current = 0
    while 3 ** current <= num:
        if 3 ** current == num:
            return True
        current = current + 1
    return False

num = 27
print(is_power_of_three(num))