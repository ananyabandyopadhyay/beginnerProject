import '../../Global.css';
import Tab from '../../Component/Tab'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
// import './style.css'

function Index(){
return(
    <div className="App">
      <header className="App-header">
        Advanced
        <Tab />
      </header>
      <body className="App-body">
          <div className="Container">
        <div className="header">projects for advanced level <br/> 
        coming soon 
        </div >
        </div>
      </body>
    </div>
)
}
export default Index