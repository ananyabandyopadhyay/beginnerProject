import '../Global.css';
import HeaderLink from '../Link'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
// import './style.css'
import Ticket from '../Ticket'

function Index(){
return(
    <div className="App">
      <header className="App-header">
        Advanced
        <HeaderLink />
      </header>
      <body className="App-body">
          <div className="Container">
        <div className="header">projects for advanced level</div >
        </div>
      </body>
    </div>
)
}
export default Index