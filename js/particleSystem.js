// email elgocode1@gmail.com
// instagram elgocode 


// FUNCTIONS

function randInt(min,max){
    return Math.floor(Math.random()*(max-min))+min
}


class Particle{
    constructor(type,NodeToAppend,borderRadius){
        this.particle = document.createElement("div")
        this.particle.classList.add("particle")
        this.particle.style.borderRadius = borderRadius
        this.particle.classList.add(type)
        NodeToAppend.append(this.particle)
        this.area = randInt(1,20)
        this.areaDecrease = 1
        this.particle.style.width = this.area  + "px"
        this.particle.style.height = this.area  + "px"
        this.speed = 9
        this.speedX = randInt(-this.speed,this.speed)
        this.speedY = randInt(-this.speed,-1)
        this.posX = NodeToAppend.clientWidth / 2
        this.posY = NodeToAppend.clientHeight / 2
        this.particle.style.left = this.posX + 'px'
        this.particle.style.top = this.posY+ 'px'
        this.accelerationX = -this.speedX/10
        this.accelerationY = -this.speedY/10
        this.opacity = 1
        this.opacityDecrease = 0.1
        this.timer = 0
        this.canStop = false
        this.deltaTime = null
    }

    move(){
        this.posX+= this.speedX
        this.posY+= this.speedY
        this.speedX += this.accelerationX
        this.speedY += this.accelerationY
        this.particle.style.top = this.posY+'px'
        this.particle.style.left = this.posX+'px'
        this.particle.style.opacity = String(this.opacity)
        this.opacity -= this.opacityDecrease
        this.area -= this.areaDecrease
        this.particle.style.width = this.area + 'px'
        this.particle.style.height = this.area + 'px'
        this.timer++
        
    }
    update(){
        if(this.opacity <= 0){
            this.particle.remove()
            this.canStop = true
        }
        if(this.canStop){
            return
        }
        this.move()
        requestAnimationFrame(()=>{
            this.update()
        })
    }
}

class Particles{
    constructor(type,number0fParticles,NodeToAppend,borderRadius){
        this.particleList = []
        this.type = type
        this.number0fParticles = number0fParticles
        this.NodeToAppend = NodeToAppend
        this.borderRadius = borderRadius
        this.canStop = false
    }
    makeParticles(){
        for(let i = 0; i < this.number0fParticles;i++){
            this.particleList.push(new Particle(this.type,this.NodeToAppend,this.borderRadius))
        }
        return this.particleList
    }
}
function makekParticles(type,number0fParticles,NodeToAppend,borderRadius){
    let particleList = []
    for(let i = 0; i < number0fParticles;i++){
        particleList.push(new Particle(type,NodeToAppend,borderRadius))
    }
    return particleList
}

// function updateMe(time){
//     console.log(time)
//     requestAnimationFrame(updateMe)
// }
// updateMe()
// email elgocode1@gmail.com
// instagram elgocode 






