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
      Intermediate
        <HeaderLink />
      </header>
      <body className="App-body">
          <div className="Container">
        <div className="header">projects for intermediate level
        <br/> coming soon
        </div >
        </div>
      </body>
    </div>
)
}
export default Index