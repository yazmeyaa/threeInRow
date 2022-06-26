const canvas = <HTMLCanvasElement>document.getElementById('canvas')
const ctx = canvas.getContext('2d')

class PlayGround {
    constructor(
        private xSize: number,
        private ySize: number,
    ) {
        this.xSize = xSize;
        this.ySize = ySize;
    }
}

function update() {

}

function render() {

}

function play() {
    update()
    render()
}

play()