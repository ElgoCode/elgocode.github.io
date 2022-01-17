
const canvas = document.querySelector("canvas")
let WIDTH = window.innerWidth
let HEIGHT = window.innerHeight
canvas.width = WIDTH
canvas.height = HEIGHT
const ctx = canvas.getContext("2d")
const Gravity = 0.01
const AirFriction = 0.98
window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

function randInt(min,max){
    return Math.floor(Math.random()*(max-min))+min
}

function getRandColor(){
    return `rgb(${randInt(0,256)},${randInt(0,256)},${randInt(0,256)})`
}

class Vector2{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    multiplay(value){
        this.x *= value
        this.y *= value
    }
    addToX(value){
        this.x += value
    }
    addToY(value){
        this.y += value
    }
}



class Circle{
    constructor(x,y,color){
        this.pos = new Vector2(x, y)
        const speed = randInt(2,7)
        this.speed = new Vector2(randInt(-speed,speed), randInt(-speed,-1))
        this.radius = randInt(1,7)
        this.canDelete = false
        this.frame = 0
        this.color = color
        this.opacity = 1
    }
    draw(){
        ctx.beginPath()
        // ctx.fillStyle = "rgb(255, 0, 140)"
        ctx.fillStyle = this.color.replace('?', this.opacity)
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.arc(this.pos.x,this.pos.y,this.radius,0,Math.PI*2)
        ctx.fill()
    }
    update(){
        if(this.frame === 50)
            this.canDelete = true
        this.draw()
        this.pos.x += this.speed.x
        this.pos.y += this.speed.y
        this.speed.addToY(Gravity)
        this.frame++
        this.speed.multiplay(AirFriction)
        this.opacity -= 0.05
    }

}

let particleList = []
function makeParticles(numberOfParticles,x,y,color){
    for(let i = 0; i < numberOfParticles; i++){
        particleList.push(new Circle(x,y,color))
    }
}


function DeleteElementFromList(theList, theElement){
    const index = theList.indexOf(theElement);
    if (index > -1) {
        theList.splice(index, 1);
    }
}


const Update = ()=>{
    requestAnimationFrame(Update)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    particleList.forEach(circle => {
        if(circle.canDelete){
            DeleteElementFromList(particleList,circle)
        }
        circle.update()
    });
    
}


Update()
































































