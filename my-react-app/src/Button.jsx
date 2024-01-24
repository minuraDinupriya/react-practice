

export function Button(){
    const handleClicks=()=>{
        console.log("ouch");
    }

    const handleClicks2=(name)=>{
        console.log(`${name} stop clicking me`)
    }
    return(
        <button onClick={()=>handleClicks2("minura")}>Click me</button>
    );
}