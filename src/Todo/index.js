import '../Global.css';
import Todo from './todo.js'
import Link from '../Link'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        TO-DO list
        <Link />
      </header>
      <body className="App-body">
        <Todo />
      </body>
    </div>
  );
}

export default App ;
