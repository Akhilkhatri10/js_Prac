//generate a random color
const randCol = ()=>{
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalID

const changeBGcolor = ()=>{
    document.body.style.backgroundColor = randCol()
}

const startchangingColor = ()=>{
    if(!intervalID)
     intervalID = setInterval(changeBGcolor, 1000)

}

const stopchangingColor = ()=>{
    clearInterval(intervalID)
    intervalID = null
}

document.querySelector('#start').addEventListener('click', startchangingColor)
document.querySelector('#stop').addEventListener('click', stopchangingColor)