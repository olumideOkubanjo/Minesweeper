//To add to this program, make it possible to mark the locations of the bombs and if all are marked then we win
var grid;
var cols;
var rows;
var Width = 801;
var Height = 801;
var w = 40;

var ground;
var totalBees = 35;

var gameWon = false;
var winImage;
var loseImage;
var gameLost = false;
var count = 0;

function setup() {
    createCanvas(Width, Height);
    cols = floor(width / w);
    rows = floor(height / w);
    grid = make2DArray(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j, w);
        }
    }

    ground = loadImage("ground.png");
    // Pick totalBees spots
    pickTotalBeesSpots();

}

function draw() {
    background(255);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }

}


function mousePressed() {
    didIWin();
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (grid[i][j].contains(mouseX, mouseY)) {
                grid[i][j].reveal();

                if (grid[i][j].bee) {
                    gameOver();
                }

            }
        }
    }
}
