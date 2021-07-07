import '../Global.css';
import HeaderLink from '../Link'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import './style.css'
import Ticket from '../Ticket'

function Index(){
return(
    <div className="App">
      <header className="App-header">
        Beginner
        <HeaderLink />
      </header>
      <body className="App-body">
          <div className="Container">
        <div className="header">projects for Beginner level</div >

        <Row>
        <Col md={3}><Link className="projectLink" to="/beginner/bin2dec"><Ticket className="linkBox"  name="bin2dec"/></Link></Col>
        <Col md={3}><Link className="projectLink" to="/beginner/borderRadius">borderRadius</Link></Col>
        <Col md={3}><Link className="projectLink" to="/beginner/calculator">calculator</Link></Col>
        <Col md={3}><Link className="projectLink" to="/beginner/christmasLights">Christmas Lights</Link></Col>
        {/* </Row>
        <Row> */}
        {/* <Col md={3}><Link className="projectLink" to="/beginner/calculator">Cause Effect App</Link></Col>
        <Col md={3}><Link className="projectLink" to="/beginner/calculator">Color Cycle</Link></Col>
        <Col md={3}><Link className="projectLink" to="/beginner/calculator">Countdown Timer</Link></Col>
        <Col md={3}><Link className="projectLink" to="/beginner/calculator">CSV2JSON App</Link></Col>
        </Row>
        <Row>
        <Col><Link className="projectLink" to="/beginner/calculator">Dollars to Cents</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">Dynamic CSS Variables</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">First DB App</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">Flip Image</Link></Col>
        </Row>
        <Row>
        <Col><Link className="projectLink" to="/beginner/calculator">GitHub Status</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">Hello</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">IOT Mailbox Simulator</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">JS Input Validation</Link></Col>
        </Row>
        <Row>
        <Col><Link className="projectLink" to="/beginner/calculator">JSON2CSV App</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">Key Value</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">Lorem Ipsum Generator</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">Notes App</Link></Col>
        </Row>
        <Row>
        <Col><Link className="projectLink" to="/beginner/calculator">Pearson Regression</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">Pomodoro Clock</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">Product Landing Page</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">Quiz App</Link></Col>
        </Row>
        <Row>
        <Col><Link className="projectLink" to="/beginner/calculator">Recipe App</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">Random Meal Generator</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">Random Number Generator</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">Roman to Decimal Converter</Link></Col>
        </Row>
        <Row>
        <Col><Link className="projectLink" to="/beginner/calculator">Slider Design</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">Stopwatch App</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">TrueOrFalse</Link></Col>
        <Col><Link className="projectLink" to="/beginner/calculator">Vigenere Cipher</Link></Col>
        </Row>
        <Row>
        <Col md={3}><Link className="projectLink" to="/beginner/calculator">Wind Chill</Link></Col>
        <Col md={3}><Link className="projectLink" to="/beginner/calculator">Word Frequency</Link></Col>
        <Col md={3}><Link className="projectLink" to="/beginner/calculator">Weather App</Link></Col> */}
        <Col md={3}></Col>
        </Row>
        </div>
      </body>
    </div>
)
}
export default Index