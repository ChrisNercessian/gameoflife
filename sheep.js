class Sheep {
    constructor(x, y) {
        x = parseInt(x)
        y = parseInt(y)
        this.x = x;
        this.y = y;
        this.age = 0;
        this.lastbread = 0
        this.hunger = 20;
        this.neighbours = []
        this.updateNeibourghs()
    }
    updateNeibourghs() {
        this.neighbours = [
            [this.x - 1, this.y - 1],
            [this.x, y - this.y - 1],
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
                    if (matrix[n[1]][n[0]] == 2) {
                        neighbours.push(n)

                    }
                }
            }
            if (neighbours.length > 0) {
                let g = neighbours[Math.floor(Math.random() * neighbours.length)]
                matrix[g[1]][g[0]] = 2
                this.lastbread = 0
                sheepArr.push(new Sheep(g[0], g[1]))
            }
        }

    }


    move() {
        this.lastbread++
        this.age++
        let neighbours = []
        for (var n of this.neighbours) {
            if (matrix[n[1]]) {
                if (matrix[n[1]][n[0]] == 1) {
                    neighbours.push(n)

                }
            }
        }
        if (neighbours.length > 0) {
            let g = neighbours[Math.floor(Math.random() * neighbours.length)]
            matrix[this.y][this.x] = 0
            this.y = g[1]
            this.x = g[0]
            matrix[g[1]][g[0]] = 2
            this.updateNeibourghs()
            this.hunger -= 15
            if (this.hunger < 0) {
                this.hunger = 0
            }
            for (let i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1)
                }
            }
        }
        else{
            for (var n of this.neighbours) {
                if (matrix[n[1]]) {
                    if (matrix[n[1]][n[0]] == 0) {
                        neighbours.push(n)
    
                    }
                }
            }
    
            if (neighbours.length > 0) {
                let g = neighbours[Math.floor(Math.random() * neighbours.length)]
                matrix[this.y][this.x] = 0
                this.y = g[1]
                this.x = g[0]
                matrix[g[1]][g[0]] = 2
                this.updateNeibourghs()
                this.hunger += 10

            }
        }



    }
    die() {
        if (this.hunger > 200 || this.age > 100) {


            for (let i in sheepArr) {
                if (sheepArr[i].x == this.x && sheepArr[i].y == this.y) {
                    matrix[this.y][this.x] = 0
                    sheepArr.splice(i, 1)
                }
                

            }
        }
    }

}
