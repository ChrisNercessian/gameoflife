class human{
    constructor(x, y) {
        x = parseInt(x)
        y = parseInt(y)
        this.x = x;
        this.y = y;
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
    move() {
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
            matrix[this.y][this.x] = this.prevSteps
            this.y = g[1]
            this.x = g[0]
            this.prevSteps = 0
            matrix[g[1]][g[0]] = 4
            this.updateNeibourghs()
            for (let i in wolfArr) {
                if (wolfArr[i].x == this.x && wolfArr[i].y == this.y) {
                    wolfArr.splice(i, 1)
                }
            }
        }
        else{
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
                this.prevSteps =  matrix[g[1]][g[0]]
                matrix[g[1]][g[0]] = 4
                this.updateNeibourghs()
                

            }
        }



    }
   
}
