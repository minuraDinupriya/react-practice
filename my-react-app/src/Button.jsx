

export function Button(){
    const handleClicks=(e)=>console.log(e);
    return(
        <button onClick={(e)=>handleClicks(e)}>Click me</button>
    );
}