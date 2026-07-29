function can_construct (ransomNote,magazine) {
    ransomNote = Array.from(ransomNote);
    for (let letter of magazine) {
        if (ransomNote.includes(letter)) {
            const index = ransomNote.indexOf(letter);
            ransomNote.splice(index,1);
        }
    }
    return ransomNote.length === 0;
}

const ransomNote = "bg";
const magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj";
console.log(can_construct(ransomNote,magazine))