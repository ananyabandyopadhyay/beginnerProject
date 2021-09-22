import { useState } from 'react';
import './style.css'


function Christmas(){
    const [lights, setLights] = useState(false);

    const lightsOn = () => {
        setLights(true);
    }
    const lightsOff = () => {
        setLights(false);
    }

return(
    <div className="christmasRoot">
       <div className= {lights ? "christmasRoom" : "darkRoom"}>
           {!lights ? 
           (
            <div className="lightsOn">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
           ):(
            <div className="lightsOff">
                <div className="circle red"></div>
                <div className="circle blue"></div>
                <div className="circle yellow"></div>
                <div className="circle teal"></div>
                <div className="circle purple"></div>
                <div className="circle green"></div>
                <div className="circle pink"></div>
                <div className="circle orange"></div>
                <div className="circle red"></div>
                <div className="circle blue"></div>
                <div className="circle yellow"></div>
                <div className="circle teal"></div>
                <div className="circle purple"></div>
                <div className="circle green"></div>
                <div className="circle pink"></div>
            </div>
           )}
    
     
     </div> 
     <button onClick={lightsOn}>on</button>
     <button onClick={lightsOff}>off</button>
    </div>
)
}

export default Christmas
