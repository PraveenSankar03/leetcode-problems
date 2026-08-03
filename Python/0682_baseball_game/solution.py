def calculate_points(ops):
    result = []
    for char in ops:
        if char == "C":
            result.pop()
        elif char == "D":
            result.append(result[-1] * 2)
        elif char == "+":
            result.append(result[-1] + result[-2])
        else:
            result.append(int(char))
    return sum(result)

ops = ["5","2","C","D","+"]
print(calculate_points(ops))