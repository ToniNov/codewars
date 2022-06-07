//7 kyu
//Isograms
function isIsogram(str) {
    const counts = {};

    return !str.split('').some((letter) => {
        letter = letter.toLowerCase();
        if (!counts[letter]) {
            counts[letter] = 1;
            return false;
        } else {
            return true;
        }
    });
}