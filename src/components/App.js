import '../css/App.css';
import Particles from './Particles'
import Polygon from './Polygon'
import Wave from './Wave'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Router>


        <Switch>
          <Route exact path='/'>
            <Link to="/particles">Particles</Link>
            <Link to="/polygon">Polygon</Link>
            <Link to="/wave">Waves</Link>
          </Route>

          <Route exact path='/particles'>
            <Particles/>
          </Route>

          <Route exact path='/polygon'>
            <Polygon/>
          </Route>

          <Route exact path='/wave'>
            <Wave/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
