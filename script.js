
// const testStr = "abccdhrehwqjj";

function firstRepeatedChar(s) {
    const seen = new Set();
    for (let char of s) {
        if (seen.has(char)) {
            return char;
        }
        seen.add(char);
    }
    return null; 
}

function findFirstDuplicate() {
    const input = document.getElementById('inputString').value;
    const resultDiv = document.getElementById('result');
    
    if (input === '') {
        resultDiv.textContent = 'Please enter a string.';
        return;
    }

    const result = firstRepeatedChar(input);
    if (result) {
        resultDiv.textContent = `The first duplicate letter is: "${result}"`;
    } else {
        resultDiv.textContent = 'The string has no duplicates.';
    }
}


// console.log(firstRepeatedChar(testStr));