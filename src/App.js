import LogedInApp from './components/logedInHome/LogedInApp'
import './assets/css/HomePage.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/homepage/Home';
import SigninPage from './components/Signin_Signup/signin';
import SignupPage from './components/Signin_Signup/signup';
import TracuuPage from './components/services/tracuu_page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signup' component={SignupPage} exact />
        <Route path='/tracuu' component={TracuuPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
