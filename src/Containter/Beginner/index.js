import '../../Global.css';
import Tab from '../../Component/Tab'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import Card from '../../Component/Card'
import './style.css'

function Index(){
  const beginnerProject = [
    {
      name:"binary to decimal",
      accessor: "bin2dec",
    },
    {
      name:"Border Radius",
      accessor: "borderRadius",
    },
    {
      name:"Calculator",
      accessor: "Calculator",
    },
    {
      name:"Christmas Lights",
      accessor: "christmasLights",
    }
  ]
return(
    <div className="App">
      <header className="App-header">
        Beginner
        <Tab />
      </header>
      <body className="App-body">
          <div className="Container">
        <div className="header">projects for Beginner level</div >

        <Row>
          {beginnerProject.map((data) => 
          <Col md={3}>
            <a href={'/beginner/'+data.accessor}>
              <Card accessor={data.accessor} projectName={data.name} background="#cbffb8" />
            </a>
          </Col>)}
        </Row>
        </div>
      </body>
    </div>
)
}
export default Index