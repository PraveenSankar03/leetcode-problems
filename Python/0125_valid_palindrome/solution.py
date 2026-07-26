def valid_palindrome(string):
    result = ""
    for char in string:
        if char.isalnum():
            result += char
    
    reversed_string = result[::-1]
    if result.lower() == reversed_string.lower():
        return True
    return False

string = "A man, a plan, a canal: Panama"
print(valid_palindrome(string))