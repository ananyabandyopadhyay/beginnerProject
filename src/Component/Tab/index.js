import {Link} from 'react-router-dom';
import './style.css'

function App() {
  return (
      <>
        <div className="link">

        <Link to="/" className="linkHeader1st" >
              Portfolio
              </Link>
            <Link to="/beginner" className="linkHeader1st" >
              Basic Project 
              </Link>
{/* 
              <Link to="/intermediate" className="linkHeader2nd" >intermediate

              </Link>

            <Link to="/advanced" className="linkHeader3rd" >
              advanced

              </Link> */}
        </div>
    </>
  );
} 

export default App;
