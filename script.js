var matrix = [];
var side = 15;
var width = 40;
var height = 30;
var grassArr = [];
var sheepArr = [];
var wolfArr = []
var humanArr = []
var grasscount = Math.floor(width * height * 0.30);
var sheepcount = Math.floor(width * height * 0.15);
var wolfcount = Math.floor(width * height * 0.05);
var humancount = 2;

for (var i = 0; i < height; i++) {
    matrix.push([])
    for (var j = 0; j < width; j++) {
        matrix[i].push(0)
    }
}
for (var i = 0; i < grasscount; i++) {
    var x = Math.floor(Math.random() * width)
    var y = Math.floor(Math.random() * height)
    while (matrix[y][x] != 0) {
        var x = Math.floor(Math.random() * width)
        var y = Math.floor(Math.random() * height)
    }
    matrix[y][x] = 1
}
for (var i = 0; i < sheepcount; i++) {
    var x = Math.floor(Math.random() * width)
    var y = Math.floor(Math.random() * height)
    while (matrix[y][x] != 0) {
        var x = Math.floor(Math.random() * width)
        var y = Math.floor(Math.random() * height)
    }
    matrix[y][x] = 2
}
for (var i = 0; i < wolfcount; i++) {
    var x = Math.floor(Math.random() * width)
    var y = Math.floor(Math.random() * height)
    while (matrix[y][x] != 0) {
        var x = Math.floor(Math.random() * width)
        var y = Math.floor(Math.random() * height)
    }
    matrix[y][x] = 3
}
for (var i = 0; i < humancount; i++) {
    var x = Math.floor(Math.random() * width)
    var y = Math.floor(Math.random() * height)
    while (matrix[y][x] != 0) {
        var x = Math.floor(Math.random() * width)
        var y = Math.floor(Math.random() * height)
    }
    matrix[y][x] = 4
}
function setup() {
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                sheepArr.push(new Sheep(x, y));
            }
            else if (matrix[y][x] == 3) {
                wolfArr.push(new Wolf(x, y));
            }
            else if (matrix[y][x] == 4) {
                humanArr.push(new human (x, y));
            }
        }
    }
    createCanvas(matrix[0].length * side, matrix.length * side)
    frameRate(10)
}
function draw() {
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 0) {
                fill(255, 255, 255)
            }
            else if (matrix[y][x] == 1) {
                fill(0, 200, 0)
            }
            else if (matrix[y][x] == 2) {
                fill(220, 250, 0)
            }
            else if (matrix[y][x] == 3) {
                fill(0, 10, 0)
            }
            else if (matrix[y][x] == 4) {
                fill(50, 100, 100)
            }
            else {
                fill(200, 0, 0)
            }
            rect(x * side, y * side, side)
        }
    }
    for (var i in grassArr) {
        grassArr[i].grow()
    }
    for (var i in sheepArr) {
        sheepArr[i].move()
        sheepArr[i].bread()
        sheepArr[i].die()
    }
    for (var i in wolfArr) {
        if (wolfArr[i].hunger > 50) {
            wolfArr[i].move()
            wolfArr[i].runaway()
            wolfArr[i].die()

            
        }else{
            wolfArr[i].hunger++

        }
        
      
    }
    for(var i in humanArr){
        humanArr[i].move()
    }
}


