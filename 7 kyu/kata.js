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

//7 kyu
//Transpose two strings in an array

function transposeTwoStrings(arr){
    let result = [];
    let len = Math.max(arr[0].length, arr[1].length);

    for (let i = 0; i < len; i++) {
        var column = (arr[0][i] || " ") + " " + (arr[1][i] || " ");
        result.push(column);
    }

    return result.join("\n");
}