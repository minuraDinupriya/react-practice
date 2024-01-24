

export function Button(){
    let count=0;
    const handleClicks=(name)=>{
        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} times`)
        }else{
            console.log(`${name} is clicking me`)
        }
    }

    const handleClicks2=(name)=>{
        console.log(`${name} stop clicking me`)
    }
    return(
        <button onClick={()=>handleClicks("minura")}>Click me</button>
    );
}