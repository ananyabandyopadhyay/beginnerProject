import '../Global.css';
import Link from '../Link'
import { useState } from 'react';
import './style.css'
function Index(){
return(
    <div className="App">
      <header className="App-header">
        Home page
        <Link />
      </header>
      <body className="App-body">
        Click on beginner tab to check my projects for beginner level
      </body>
    </div>
)
}
export default Index