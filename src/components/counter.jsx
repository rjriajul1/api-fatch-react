import { useState } from "react"

export default function Counter (){
    const btnStyle ={
        color:"white"
      }
      const [counter,setCounter] = useState(0)
     
      const mainusBtn = ()=>{
        
        if(counter <= 0){
            alert("You need to positive number")
        }else{
            const newCounter = counter - 1;
            setCounter(newCounter)
        }
            
 
      }

      function btnHandler (){
        const newCounter = counter + 1;
        setCounter(newCounter)
      }
    return(
        <div className="border">
            <h2>Count: {counter} </h2>
            <button onClick={btnHandler} style={btnStyle}>Add</button>
            <button onClick={mainusBtn} style={btnStyle}>Mainus Btn</button>
        </div>
    )
}