import { useState } from "react"

export const State = () =>{
    {/* react does not know what to change normal variables dont work
        so need use state use=hook special function
        let value=0;
    const handleButtonClick = () =>{
        value++;
        console.log(value);
    }

    return(
        <>
        <h1>{value}</h1>
        <button onClick={handleButtonClick} >increment</button>
        </>
    )*/}
//syntax
// const [current-state,function that updates state variable]=useState(0)
//let array = useState;
//console.log(array)

const [count,setCount]=useState(0)

const handleButtonClick = () =>{
    //cant use count++
        setCount(() => count + 1)
        console.log("parent");
    }

 return(
        <>
        <div>
        <h1>{count}</h1>
        <button onClick={handleButtonClick} >increment</button>
        </div>
        <div>
            <ChildComponent />
        </div>
        </>
    )
}

function ChildComponent(){
    console.log("child");
    return(
        
        <div>child</div>
    )
}