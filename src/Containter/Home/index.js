import '../../Global.css';
import Tab from '../../Component/Tab'
import BulkProjects from './bulkProjects'
import './style.css'
function Index(){
return(
    <div className="App">
      <header className="App-header">
        My Project
        <Tab />
      </header>
      <body >
        <BulkProjects />
      </body>
    </div>
)
}
export default Index