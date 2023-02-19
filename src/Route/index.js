import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Todo from '../Containter/Intermediate/Todo'
import Bin2Dec from '../Containter/Beginner/Bin2Dec'
import BorderRadius from '../Containter/Beginner/BorderRadius'
import Calculator from '../Containter/Beginner/Calculator'
import Home from '../Containter/Home'
import Beginner from '../Containter/Beginner'
import Intermediate from '../Containter/Intermediate'
import Advanced from '../Containter/Advanced'
import ChristmasLights from '../Containter/Beginner/christmasLights'
import Portfolio from '../Containter/Portfolio'
function Routepath() {
  return (
   <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Portfolio />
        </Route>
        <Route exact path="/projectSummary">
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
        {/* <Route path="/intermediate/todo">
          <Todo /> 
        </Route> */}
        <Route path="/advanced">
          <Advanced />
        </Route>
      </Switch>
    </BrowserRouter>
   </>
  );
}

export default Routepath;
