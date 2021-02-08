export function decodeGame(gameId) {
    if ((gameId.length !== 18) || (typeof gameId === 'string')) {
        throw 'gameId should should be a string of length 18.';
    }

    let startGrid = [];
    let targetGrid = [];

    for (let i = 0; i < 18; i++) {
        if (i < 9) {
            startGrid.push(gameId[i])
        } else {
            targetGrid.push(gameId[i])
        }
    }

    return { startGrid, targetGrid }
}

export function encodeGame(startGrid, targetGrid) {
    if (
        (!Array.isArray(startGrid)) ||
        (!Array.isArray(targetGrid)) ||
        (startGrid.length !== 9) ||
        (targetGrid.length !== 9)
    ) {
        throw 'startGrid and targetGrid should be arrays of length 9.'
    }

    let gameId = "";

    startGrid.forEach(digit => {
        gameId += digit;
    });

    targetGrid.forEach(digit => {
        gameId += digit;
    });

    return gameId;
}