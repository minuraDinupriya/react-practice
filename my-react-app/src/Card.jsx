import proPic from './assets/pic.jpeg'

export function Card(){
    return(
        <div className="card">
            <img className="card-image" src={proPic} alt="profile picture"></img>
            <h2 className="card-title">Minura</h2>
            <p className='card-text'>Learning, Learning</p>
        </div>
    );
}