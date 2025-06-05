/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
class SnakeGame {
    constructor(width, height, food) {
        this.width = width
        this.height = height
        this.food = food
        this.snakePositions = [[0, 0]]
        this.score = 0
        this.eatenFood = undefined
    }

    /** 
    * @param {string} direction
    * @return {number}
    */
    move(direction) {

        if (this.eatenFood) {
            this.snakePositions.splice(1,0, this.eatenFood)
            this.eatenFood = undefined
        } else {
            if (this.snakePositions.length > 1) {
                for (let i = this.snakePositions.length - 1; i >= 1; i--) {
                    this.snakePositions[i] = [...this.snakePositions[i - 1]]
                }
            }

        }


        switch (direction) {
            case "L":
                this.snakePositions[0][1] -= 1
                break
            case "R":
                this.snakePositions[0][1] += 1
                break
            case "U":
                this.snakePositions[0][0] -= 1
                break
            case "D":
                this.snakePositions[0][0] += 1
                break
        }


        if (this.snakePositions[0][1] >= this.width ||
            this.snakePositions[0][1] < 0 ||
            this.snakePositions[0][0] >= this.height ||
            this.snakePositions[0][0] < 0 || 
                this.snakePositions.some((pos, index) => {
                    if (index === 0) return false
                    return this.snakePositions[0][0] === pos[0] &&
                           this.snakePositions[0][1] === pos[1]
                }))
        {
            return -1
        }

        if (this.snakePositions[0][0] === this.food[this.score]?.[0] && this.snakePositions[0][1] === this.food[this.score]?.[1]) {
            this.eatenFood = this.food[this.score]
            this.score++
        }

        return this.score

    }
};



/** 
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */