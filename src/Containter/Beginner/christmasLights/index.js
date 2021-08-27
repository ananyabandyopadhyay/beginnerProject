import Tab from '../../../Component/Card'
import { useState } from 'react';
import ChristmasLights from './christmasLights'
function Index(){
    
return(
    <div className="App">
      <header className="App-header">
      Christmas Lights
        <Tab />
      </header>
      <body className="App-body">
       < ChristmasLights />
      </body>
    </div>
)
}
export default Index