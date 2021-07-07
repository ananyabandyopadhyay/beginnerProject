import Link from '../../Link'
import { useState } from 'react';
import Calculator from './calculator'
function Index(){
    
return(
    <div className="App">
      <header className="App-header">
        Calculator
        <Link />
      </header>
      <body className="App-body">
       <Calculator />
      </body>
    </div>
)
}
export default Index