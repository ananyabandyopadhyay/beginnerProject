import {Link} from 'react-router-dom';
import './style.css'
import {useState, useEffect} from 'react'
function App() {
  const [beginner, setBeginner] = useState(0)
  const [intermediate, setIntermediate] = useState(0)
  const [advanced, setAdvanced] = useState(0)
  console.log(intermediate)
  useEffect(() => {
    const timeout = setTimeout(() => {
    window.location.pathname==="/beginner" ?
    setBeginner(1)
    : window.location.pathname==="/intermediate" ?
    setIntermediate(1)
    : window.location.pathname==="/advanced" ?
    setAdvanced(1)
      :setBeginner(0)
    
     }, 10);
   },[]);
  return (
      <>
        <div className="link">
            <Link to="/beginner" className="linkHeader1st" beginner={beginner}>
              beginner
            <div className="linkItemBeginner"
              onAnimationEnd={() => setBeginner(1)}
              beginner={beginner}>
              </div>
              </Link>

              <Link to="/intermediate" className="linkHeader2nd" intermediate={intermediate}>intermediate
              <div className="linkItemIntermediate"
              onAnimationEnd={() => setIntermediate(1)}
              intermediate={intermediate}>
              </div>
              </Link>

            <Link to="/advanced" className="linkHeader3rd" advanced={advanced}>
              advanced
              <div className="linkItemAdvanced"
              onAnimationEnd={() => setAdvanced(1)}
              advanced={advanced}>
              </div>
              </Link>
        </div>
    </>
  );
}

export default App;
