const form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector("#results")

    if(height<=0||isNaN(height)){
        result.innerHTML="enter a valid number"
    }
    
    else if(weight<=0||isNaN(weight)){
        result.innerHTML="enter a valid number"
    }
    else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    result.innerHTML= `${bmi}`
    }




    })