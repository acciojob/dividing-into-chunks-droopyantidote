const divide = (arr, n) => {
    let result = [];
    let currentChunk = [];

    for (let i = 0; i < arr.length; i++) {
        if (currentChunk.reduce((acc, val) => acc + val, 0) + arr[i] <= n) {
            currentChunk.push(arr[i]);
        } else {
            result.push(currentChunk);
            currentChunk = [arr[i]];
        }
    }

    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }

    return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));
