def can_construct(ransomNote,magazine):
    ransomNote = list(ransomNote)
    for letter in magazine:
        if letter in ransomNote:
            ransomNote.remove(letter)
            if len(ransomNote) == 0:
                return True
    return False
    
ransomNote = "bg"
magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"
print(can_construct(ransomNote,magazine))