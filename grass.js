class Grass {
    constructor(x, y) {
        x = parseInt(x)
        y = parseInt(y)
        this.x = x;
        this.y = y;
        this.time = 0;
        this.growingtime = Math.round(Math.random() * 2) + 3
        this.neighbours = [
            [x - 1, y - 1],
            [x, y - 1],
            [x + 1, y - 1],
            [x - 1, y],
            [x + 1, y],
            [x - 1, y + 1],
            [x, y + 1],
            [x + 1, y + 1]
        ]
    }
    grow() {
        this.time++
        if (this.time == this.growingtime) {
            this.time = 0;
            let neighbours = []
            for (var n of this.neighbours) {
                if (matrix[n[1]] != undefined) {
                    if (matrix[n[1]][n[0]] == 0) {
                        neighbours.push(n)
                    }
                }
            }
            if (neighbours.length > 0) {
                let g = neighbours[Math.floor(Math.random() * neighbours.length)]
                matrix[g[1]][g[0]] = 1
                grassArr.push(new Grass(g[0], g[1]))
            }


        }
    }
}