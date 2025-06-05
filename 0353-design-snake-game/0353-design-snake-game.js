const Up = 'U';
const Down = "D";
const Left = 'L';
const Right = 'R'
/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function(width, height, food) {
    this.width = width;
    this.height = height;
    this.buffet = food.reverse();
    this.location = [0,0]
    this.score = 0;
    this.snack = this.buffet.pop()
    this.set = new Set()
    this.set.add('0,0')
};

/** 
 * @param {string} dir
 * @return {number}
 */
SnakeGame.prototype.move = function(dir) {
    /**
     [3,2]
     [0,1]
     [0,1]
    c = 2
     */
    let [x,y] = this.location
    if (dir === Up){
        x--
    } else if (dir === Down){
        x++
    } else if (dir === Left) {
        y--
    } else if (dir === Right) {
        y++
    }
    if (x < 0 || x >= this.height || y < 0 || y >= this.width  ) return -1

    this.location = [x,y]
    const head = `${x},${y}`
    const tail = this.set.keys().next().value

    if (this.set.has(head) && head !== tail) return -1

    const [xS, yS] = this.snack;
    if (x === xS && y === yS) {
        if (this.buffet.length > 0) {
            this.snack = this.buffet.pop();
        } else {
            this.snack = [-1,-1]
        }
        this.score+=1
    } else {
        this.set.delete(tail)
    }

    this.set.add(head)
    return this.score
};

/** 
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(dir)
 */