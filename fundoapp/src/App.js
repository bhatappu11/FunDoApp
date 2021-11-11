import SignUp from "./pages/signup/SignUp"
import SignIn from "./pages/signin/SignIn"
import Forgot from "./pages/forgot/Forgot"
import Reset from "./pages/reset/Reset"
import Dashboard from "./pages/dashboard/Dashboard"
import './App.css';
//import History from "./history/History"
// import { Router, Route, Switch} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      
        <div className="App">
          <Router>
          <Switch>
            <Route exact path='/signup' component={SignUp}></Route>
            <Route exact path='/' component={SignIn}></Route>
            <Route exact path='/forgot' component={Forgot}></Route>
            <Route exact path='/reset-password/:id' component={Reset}></Route>
            <Route exact path='/dashboard' component={Dashboard}></Route>
          </Switch>
          </Router>
        </div>
      
  );
}

export default App;
