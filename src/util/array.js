function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

function shuffle(array) {
    const matrixCopy = [...array];
    let randomIndex;
    let temp;

    for (let i = matrixCopy.length - 1; i > 0; i--) {
        randomIndex = Math.floor(Math.random() * (i + 1));

        temp = matrixCopy[i];
        matrixCopy[i] = matrixCopy[randomIndex];
        matrixCopy[randomIndex] = temp;
    }

    return matrixCopy;
}


export { arrayEquals, shuffle };