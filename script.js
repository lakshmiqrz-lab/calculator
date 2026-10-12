let display=document.getElementById('output')

const displayData=(data)=>{
    
    display.value+=data
    
}
const removeLatItem=()=>{
    display.value=display.value.slice(0,-1)
}
const clearAll=()=>{
   display.value=""
}
const result=()=>{
    try{
     console.log("inside try");
     display.value=eval(display.value)
     
    }
    catch{
        console.log("inside catch");
        display.value="invalid Expression"
        

    }
    finally{
        console.log("action completed");
        
    }

}