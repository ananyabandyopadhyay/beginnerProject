import Tab from '../../../Component/Card'
import { useState } from 'react';
import Calculator from './calculator'
function Index(){
    
return(
    <div className="App">
      <header className="App-header">
        Calculator
        {/* <Tab /> */}
      </header>
      <body className="App-body">
       <Calculator />
      </body>
    </div>
)
}
export default Index