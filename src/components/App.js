import '../css/App.css';
import Particles from './Particles'
import Polygon from './Polygon'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Router>


        <Switch>
          <Route exact path='/'>
            <div>
              MAIN PAGE
            </div>
          </Route>

          <Route exact path='/particles'>
            <Particles/>
          </Route>

          <Route exact path='/polygon'>
            <Polygon/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
