import '../../Global.css';
import Tab from '../../Component/Tab'
import { useState } from 'react';
import Portfolio from './porfolio'
import './style.css'
function Index(){
return(
    <div className="App">
      <header className="App-header">
        My Project
        <Tab />
      </header>
      <body className="App-body">
        {/* Here you can find my project for different level
        <br />
        Click on beginner tab to check my projects for beginner level and so on
        <br />
        I am just practicing react while doing this project
        <br /> */}
        <Portfolio />
      </body>
    </div>
)
}
export default Index