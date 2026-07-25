def is_palindrome(x):
    x = str(x)
    if x == x[::-1]:
        return True
    return False

x = 1001
print(is_palindrome(x))