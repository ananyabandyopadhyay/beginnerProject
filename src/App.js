import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Todo from './Todo'
import Bin2Dec from './Beginner/Bin2Dec'
import BorderRadius from './Beginner/BorderRadius'
import Calculator from './Beginner/Calculator'
import Home from './Home'
import Beginner from './Beginner'
import Intermediate from './Intermediate'
import Advanced from './Advanced'
import ChristmasLights from './Beginner/christmasLights'
function App() {
  return (
   <>
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/beginner">
          <Beginner />
        </Route>
        <Route path="/beginner/bin2dec">
          <Bin2Dec />
        </Route>
        <Route path="/beginner/borderRadius">
          <BorderRadius />
        </Route>
        <Route path="/beginner/calculator">
          <Calculator />
        </Route>
        <Route path="/beginner/christmasLights">
          <ChristmasLights />
        </Route>
        <Route path="/intermediate">
          <Intermediate />
        </Route>
        <Route path="/intermediate/todo">
          <Todo /> 
        </Route>
        <Route path="/advanced">
          <Advanced />
        </Route>
      </Switch>
    </BrowserRouter>
   </>
  );
}

export default App;
