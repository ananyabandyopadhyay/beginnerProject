import Tab from '../../../Component/Tab'
import { useState } from 'react';
import './style.css'
import { Row, Col, Container } from 'react-bootstrap';


function Index(){
    const [tl, setTl] = useState(0);
    const [tr, setTr] = useState(0);
    const [bl, setBl] = useState(0);
    const [br, setBr] = useState(0);
    const radius = {
        borderTopLeftRadius : tl+"%",
        borderTopRightRadius : tr+"%" ,
        borderBottomLeftRadius : bl+"%" ,
        borderBottomRightRadius : br+"%"
    }
return(
    <>

        <div className="rootBorderRadius">
        <Row >
        <Col md={3} className="tl">
            <input className="inputRadius" placeholder={"Top Left"} onChange={(e) => setTl(e.target.value)}/>
        </Col>
        <Col md={3} className="tr">
            <input className="inputRadius" placeholder={"Top Right"} onChange={(e) => setTr(e.target.value)}/>{" "}
        </Col>
        </Row>
        <Row style={{padding:"1rem"}}> 
          {/* <Col md={4}></Col> */}
        <Col md={12} >
          <div className="box"  style={radius} >
            border-top-left-radius: {tl}%;<br/>
            border-top-right-radius: {tr}%;<br/>
            border-bottom-right-radius: {bl}%;<br/>
            border-bottom-left-radius: {br}%;
          </div>
        </Col>
        {/* <Col md={5}></Col> */}
        </Row>
        <Row>
        <Col md={3} className="bl">
            <input className="inputRadius" placeholder={"Bottom Left"} onChange={(e) => setBl(e.target.value)}/>{" "}
        </Col>
        <Col md={3} className="br" >
            <input className="inputRadius" placeholder={"Bottom Right"} onChange={(e) => setBr(e.target.value)}/>{" "}
        </Col>
        {/* <Col md={3}></Col> */}
        </Row>
        </div>
        
        
    </>
)
}
export default Index