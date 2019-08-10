function gameOver() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].revealed = true;
        }
    }
    gameLost = true;
}

function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function pickTotalBeesSpots() {
    var options = [];
    var optionsToBeUsed = [];
    arrayCopy(options, optionsToBeUsed, options.length);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            optionsToBeUsed.push([i, j]);
        }
    }


    for (var n = 0; n < totalBees; n++) {
        var index = floor(random(optionsToBeUsed.length));
        var choice = optionsToBeUsed[index];
        var i = choice[0];
        var j = choice[1];
        // Deletes that spot so it's no longer an option
        optionsToBeUsed.splice(index, 1);
        grid[i][j].bee = true;
    }


    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].countBees();
        }
    }
};

function didIWin() {
    if (count + totalBees == 400) {
        gameWon = true;
    }
}
