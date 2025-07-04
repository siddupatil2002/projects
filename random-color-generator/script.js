//for getting random colorThe rules to be a valid hexadecimal code are:
// It should start from '#' symbol.
// It should be followed by the letters from a-f, A-F and/or digits from 0-9.
// The length of the hexadecimal color code should be either 6 or 3, excluding '#' symbol.
const randomcolor=function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random()*16)]
    }
    return color
}
console.log(randomcolor())


let interval;
const body=document.querySelector('body')
document.querySelector('#start').addEventListener('click',function(){
    interval=setInterval(function(){
        body.style.backgroundColor=randomcolor()
        
    },1000)
})

document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(interval)
    console.log("stopped")
    
})
