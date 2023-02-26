import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Todo from '../Containter/Intermediate/Todo'
import Bin2Dec from '../Containter/Beginner/Bin2Dec'
import BorderRadius from '../Containter/Beginner/BorderRadius'
import Calculator from '../Containter/Beginner/Calculator'
import Intermediate from '../Containter/Intermediate'
import Advanced from '../Containter/Advanced'
import ChristmasLights from '../Containter/Beginner/christmasLights'
import Portfolio from '../Containter/Portfolio'
import PrivateRoute from "./PrivateRoute"
import Beginner from "../Containter/Beginner"
function Routepath() {
  return (
   <>
    <BrowserRouter>
      <Switch>
        <PrivateRoute component={Portfolio} exact={true} path='/'/>
        <PrivateRoute component={Bin2Dec} exact={true}  path="/beginner/bin2dec" />
        <PrivateRoute component={BorderRadius} exact={true} path="/beginner/borderRadius" />
        <PrivateRoute component={Calculator} exact={true} path="/beginner/calculator" />
        <PrivateRoute component={ChristmasLights} exact={true} path="/beginner/christmasLights" />
        <PrivateRoute component={Beginner} exact={true} path="/beginner" />
        {/* <PrivateRoute component={Intermediate} exact={true} path="/intermediate" />
        <PrivateRoute component={Advanced} path="/advanced" /> */}
      </Switch>
    </BrowserRouter>
   </>
  );
}

export default Routepath;
