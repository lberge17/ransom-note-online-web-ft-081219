function buildHistogram(magazine){
    const histogram = {}
    magazine.forEach(letter => {
        if (histogram[letter]){
            histogram[letter] += 1
        } else {
            histogram[letter] = 1
        }
    })
    return histogram
}

function canBuildNote(magazine, note){
    const histogram = buildHistogram(magazine)
    for(let i = 0; i < note.length; i++){
        // 0 will return false so the conditinal will work if the key doesn't exist or has a value of 0
        if (!histogram[note.charAt(i)]) {
            return false
        } else {
            histogram[note.charAt(i)] -= 1
        }
    }
    return true
}