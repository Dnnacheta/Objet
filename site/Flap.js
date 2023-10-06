fix= 50
def = 150
height = window.innerHeight
width = window.innerWidth

const cloudShapes = [
    // Puffy cloud
    'm.beginPath(); m.moveTo(100, 100); m.quadraticCurveTo(150, 150, 200, 100); m.quadraticCurveTo(250, 50, 300, 100); m.quadraticCurveTo(350, 150, 400, 100); m.quadraticCurveTo(450, 50, 500, 100); m.closePath();',
  
    // Wispy cloud
    'm.beginPath(); m.moveTo(100, 100); m.lineTo(150, 150); m.lineTo(200, 100); m.lineTo(250, 50); m.lineTo(300, 100); m.lineTo(350, 150); m.lineTo(400, 100); m.lineTo(450, 50); m.lineTo(500, 100); m.closePath();',
  
    // Heart cloud
    'm.beginPath(); m.moveTo(250, 100); m.quadraticCurveTo(300, 150, 250, 200); m.quadraticCurveTo(200, 150, 250, 100); m.closePath();',
  
    // Star cloud
    'm.beginPath(); m.moveTo(250, 100); m.lineTo(300, 150); m.lineTo(250, 200); m.lineTo(200, 150); m.lineTo(250, 100); m.lineTo(350, 150); m.lineTo(250, 200); m.lineTo(150, 150); m.lineTo(250, 100); m.closePath();',
  
    // Moon cloud
    'm.beginPath(); m.moveTo(250, 100); m.arc(250, 100, 50, 0, Math.PI * 2, true); m.closePath();',
  ];

  function id(bleh) {
    return(document.getElementById(bleh))
  }
function play() {
    if (posy<=height-size) {
        posy+= (playerSpeed * time)

        if (playerSpeed<def) {
            gravity= 400* ((difficulty*0.25)+1)
        }
        else {gravity=fix*((difficulty*0.25)+1);}
        playerSpeed +=gravity*time
        
    }
    m.beginPath()
    m.rect(posx, posy, size, size)
    m.fillStyle = 'blue'
    m.fill()
    m.closePath()
}

function init() {
    cont=true
    difficulty = 1
    diffTime = 3
    gravity = fix
    playerSpeed = -def*1.25
    t=Date.now()
    ttime=0
    time=0
    pillarSpeed = 100
    obstacles = []
    diffLim = height*0.3
    pillarWidth = width*0.025
    paused = () => {}
    size = pillarWidth*0.9
    posx = width*0.2
    posy = (height/2)-size
    trails = []
    tmpy = posy+(size/2)
    score=0

    m.beginPath()
    m.rect(posx, posy, size, size)
    m.fillStyle='blue'
    m.fill()
    m.closePath()

    // pillars = [new Obstacle]
    // pillars[0].draw()
    blocks()
    anime()
}

function Obstacle(){
    this.index
    tmp = 
    pillarSpeed = 100*difficulty

    this.size = function() {
        this.diff=Math.random()*height/10
        if (this.diff<diffLim) {this.diff=diffLim}
        this.botPillarHeight = Math.random()*height/2 - (Math.random())*this.diff
        if (this.botPillarHeight<height*0.2) {this.botPillarHeight=height*0.2}
        this.tmp=this.botPillarHeight + this.diff
        if (this.tmp>height*0.8) {
            this.botPillarHeight = height*0.5
            this.diff = height*0.3
        }
        this.topPillarHeight = height - this.tmp
        this.x=width
        this.ty = 0
        this.by = height-this.botPillarHeight

        if (this.index!=0) {
            if (this.botPillarHeight == obstacles[this.index-1].botPillarHeight) {this.size()}
        }
    }

    

    this.draw = function() {
        this.x = this.x-(pillarSpeed*time)
        m.beginPath()
        m.rect(this.x, this.by, pillarWidth, this.botPillarHeight)
        m.rect(this.x, this.ty, pillarWidth, this.topPillarHeight)
        m.fillStyle = '#ffffc3'
        m.fill()
        m.closePath()
        
        if (this.x<=-50) {
            obstacles.splice(obstacles.indexOf(this), 1)
        }
        
        if ((this.x>=posx-pillarWidth && this.x<=posx+pillarWidth+size) && (posy+size>=this.by || posy<=this.topPillarHeight)) {
            ask = confirm("play again??")
            if (ask==true) {
                init()
            } else {
                cont=false
            }
        }
    }
}

// function Trail() {
//     this.x = posx+(size/2)
//     this.y = posy+(size/2)
//     this.time = 0
    
//     this.move = (y) => {
//         this.x -= 150*time
//         this.y=y
//         this.time += time
//         if (this.time>=1) {
//             trails.splice(trails.indexOf(this), 1)
//         } else {
//             m.lineTo(this.x, this.y)
//         }
//     }
// }


function blocks() {
    let tmp=new Obstacle()
    obstacles.push(tmp)
    tmp.index = obstacles.indexOf(tmp)
    tmp.size()
}

// function trailing() {
//     let tmp = new Trail()

//     m.beginPath()
//     m.moveTo(tmp.x, tmp.y)
//     let i = trails.length-1
//     if (trails.length>1) {
//         while (i>1) {
//             tmpy = trails[i].y
//             trails[i].move(tmpy)
//             i--
//         }
//     }
//     m.strokeStyle = 'blue'
//     m.lineWidth = 3
//     m.stroke()
//     trails.push(tmp)
//     m.closePath()
// }

function scoring() {
    m.font = "30px Arial"
    m.fillText("Score: "+score, (width/2)-30, 30)
}

var anime = () => {
    
    height = window.innerHeight
    width = window.innerWidth
    time = (Date.now()-t)/1000
    ttime = ttime+time
    diffTime = (width*0.3)/pillarSpeed
    difficulty += (time/50)
    t = Date.now()
    can.width=window.innerWidth
    can.height = window.innerHeight

    if (ttime>=diffTime) {
        blocks()
        ttime=0
        score++
    }
    fix = 50*difficulty

    for (let i=0; i<obstacles.length; i++) {
        obstacles[i].draw()
    }
    // trailing()

    scoring()
    play()
    if (cont==true) {
        window.requestAnimationFrame(anime)
    } else {
        end()
    }
}

function pause() {
    paused = anime
    anime = () => {}
    can.style.display = 'none'
}

function resume() {
    anime = paused
    t=Date.now()
    can.style.display='block'
    anime()
}

function act() {
    playerSpeed = -(def*1.25)
    if (cont==true) {
        hop.pause()
        hop.currentTime =0
        hop.play()
    }
    }

function end() {
   // over.play()
    game.style.display="none"
    scored.textContent = "Score: "+score
}

window.onload = () => {
    can = id('canvas')
    game = id('game')
    m = can.getContext('2d')
    can.width=window.innerWidth
    can.height = window.innerHeight
    scored = id('score')
    hop=id("hop")
    over = id("over")

    init()
    
    window.onresize = () => {
    height =window.innerHeight 
    width = window.innerWidth 
    can.width = width
    can.height = height
}

}

window.onkeydown = (k) => {
    switch (k.which) {
        case (32): {
            act()
            break
        }
        case (27): {
            pause()
            break
        }
    }
}

window.onclick = () =>{
    hop.play()
    act()
    window.ontouchstart = () => {
        act()
    }
    window.onclick = () => {}
}

window.onblur = () => {
    pause()
}

