// email elgocode1@gmail.com
// instagram elgocode 

let boxes = document.querySelectorAll(".box")
let winner = document.getElementById("winner")
let winner_window = document.querySelector(".winner-window")
let resetGameBtn = document.querySelector(".btn")
let state = 0;
let elgocodeinsta = document.querySelector(".elgocode .instagram p")
let elgocodemail = document.querySelector(".elgocode .mail p")
let popupSound = new Audio("./audio/pop-3.mp3")
let winSound = new Audio("./audio/win.wav")
let drawSound = new Audio("./audio/draw.wav")
let restartSound = new Audio("./audio/restart.wav")
let explosionSound = new Audio("./audio/explosion2.wav")
let winStates = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

if(!elgocodeinsta || !elgocodemail){
    let h1 = document.createElement("h1")
    document.body.innerHTML = ""
    h1.style.color = "white"
    h1.innerHTML = "You can't play the game if you change the html :)"
    document.body.append(h1)
}
if(elgocodeinsta.innerText != "@elgocode" || elgocodemail.innerText != "elgocode1@gmail.com"){
    let h1 = document.createElement("h1")
    document.body.innerHTML = ""
    h1.style.color = "white"
    h1.innerHTML = "You can't play the game if you change the html :)"
    document.body.append(h1)
}

function resetGame(){
    // restartSound.play()
    explosionSound.play()
    boxes.forEach(box=>{
        if(box.classList.contains("x")){
            let particlList = makekParticles("x",10,box,"50%")
            particlList.forEach(particle=>{
                particle.update()
            })
        }
        else if(box.classList.contains("o")){
            let particlList = makekParticles("o",10,box,"50%")
            particlList.forEach(particle=>{
                particle.update()
            })
        }
        box.addEventListener("click",isPlaying)
        if(box.classList.contains("x")) box.classList.remove("x")
        else if(box.classList.contains("o")) box.classList.remove("o")
    })
    winner.innerText = ""
    winner.classList.remove("x")
    winner.classList.remove("o")
    winner.classList.remove("draw")
    winner_window.classList.remove("show")
}

resetGameBtn.addEventListener("click",resetGame)

function play(box){
    if(state == 0){
        box.classList.add("x")
        state++
    }
    else{
        box.classList.add("o")
        state--
    }
}

function win(player){
    
    boxes.forEach(box=>{
        box.removeEventListener("click",isPlaying)
    })
    if(player=="x"){
        winner.classList.add(player)
        winner.innerText = "The winner is player X"
        winSound.play()
    }
    else if(player=="o"){
        winner.classList.add(player)
        winner.innerText = "The winner is player O"
        winSound.play()
    }
    else if(player=="draw"){
        winner.classList.add(player)
        winner.innerText = "No one wins, it is a Draw"
        drawSound.play()
    }
    winner_window.classList.add("show")
}


function cheackWin(){
    for(let i = 0; i < winStates.length; i++){
        let winX = 0
        let winY = 0
        for(let j = 0; j < 3; j++){
            if(boxes[winStates[i][j]].classList.contains("x")){
                winX += 1
            }
            if(boxes[winStates[i][j]].classList.contains("o")){
                winY += 1
            }
        }
        if(winX == 3){
            win("x")
            return
        }
        if(winY == 3){
            win("o")
            return
        }
        winX = 0
        winY = 0
    }
    let draw = 0
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].classList.contains("x") || boxes[i].classList.contains("o")){
            draw++
        }
    }
    if(draw == 9){
        win("draw")
    }
}

function isPlaying(){
    popupSound.currentTime = 0
    popupSound.play()
    if(this.classList.contains("x") || this.classList.contains("o")) return
        
        play(this)
        cheackWin()
}

boxes.forEach(box=>{
    box.addEventListener("click",isPlaying)
})





// email elgocode1@gmail.com
// instagram elgocode 








