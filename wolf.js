class Wolf {
    constructor(x, y) {
        x = parseInt(x)
        y = parseInt(y)
        this.x = x;
        this.y = y;
        this.age = 0;
        this.lastbread = 0
        this.hunger = 70;
        this.prevSteps = 0
        this.neighbours = []
        this.updateNeibourghs()
    }
    updateNeibourghs() {
        this.neighbours = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    bread() {
        if (this.age >= 15 && this.lastbread > 25) {
            let neighbours = []
            for (var n of this.neighbours) {
                if (matrix[n[1]]) {
                    if (matrix[n[1]][n[0]] == 3) {
                        neighbours.push(n)

                    }
                }
            }
            if (neighbours.length > 0) {
                let g = neighbours[Math.floor(Math.random() * neighbours.length)]
                matrix[g[1]][g[0]] = 3
                this.lastbread = 0
                wolfArr.push(new Wolf(g[0], g[1]))
            }
        }

    }


    move() {
        this.lastbread++
        this.age++
        let neighbours = []
        for (var n of this.neighbours) {
            if (matrix[n[1]]) {
                if (matrix[n[1]][n[0]] == 2) {
                    neighbours.push(n)

                }
            }
        }
        if (neighbours.length > 0) {
            let g = neighbours[Math.floor(Math.random() * neighbours.length)]
            matrix[this.y][this.x] = this.prevSteps
            this.y = g[1]
            this.x = g[0]
            this.prevSteps = 0
            matrix[g[1]][g[0]] = 3
            this.updateNeibourghs()
            this.hunger -= 15
            if (this.hunger < 0) {
                this.hunger = 0
            }
            for (let i in sheepArr) {
                if (sheepArr[i].x == this.x && sheepArr[i].y == this.y) {
                    sheepArr.splice(i, 1)
                }
            }
        }
        else {
            for (var n of this.neighbours) {
                if (matrix[n[1]]) {
                    if (matrix[n[1]][n[0]] == 0 || matrix[n[1]][n[0]] == 1) {
                        neighbours.push(n)

                    }
                }
            }

            if (neighbours.length > 0) {
                let g = neighbours[Math.floor(Math.random() * neighbours.length)]
                matrix[this.y][this.x] = this.prevSteps
                this.y = g[1]
                this.x = g[0]
                this.prevSteps = matrix[g[1]][g[0]]
                matrix[g[1]][g[0]] = 3
                this.updateNeibourghs()
                this.hunger += 10

            }
        }



    }
    die() {
        if (this.hunger > 300 || this.age > 300) {


            for (let i in wolfArr) {
                if (wolfArr[i].x == this.x && wolfArr[i].y == this.y) {
                    matrix[this.y][this.x] = this.prevSteps
                    wolfArr.splice(i, 1)
                }

            }
        }
    }
    runaway() {
        for (i in humanArr) {
            if (Math.abs(humanArr[i].x - this.x) <= 3 && Math.abs(humanArr[i].y - this.y) <= 3) {
                matrix[this.y][this.x] = this.prevSteps
                if (humanArr[i].x > this.x) {
                    if (this.x > 0 && (matrix[this.y][this.x - 1] == 0 || matrix[this.y][this.x - 1] == 1)) {
                        this.x--
                    }
                }
                else if (humanArr[i].x < this.x) {
                    if (this.x < width / side - 1 && (matrix[this.y][this.x + 1] == 0 || matrix[this.y][this.x + 1] == 1)) {
                        this.x++
                    }
                }
                if (humanArr[i].y > this.y) {
                    if (this.y > 0 && (matrix[this.y - 1][this.x] == 0 || matrix[this.y - 1][this.x] == 1)) {
                        this.y--
                    }
                }
                else if (humanArr[i].y < this.y) {
                    if (this.y < height / side - 1 && (matrix[this.y + 1][this.x] == 0 || matrix[this.y + 1][this.x] == 1)) {
                        this.y++
                    }
                }

                this.updateNeibourghs()
                this.prevSteps = matrix[this.y][this.x]
                matrix[this.y][this.x] = 3
            }

        }
    }

}
