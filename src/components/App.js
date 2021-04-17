import '../css/App.css';
import Particles from './Particles'
import Polygon from './Polygon'
import Wave from './Wave'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Navbar from './Navbar';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

function App() {

  return (
    <div className="App">
      <Router>

        <Navbar/>

        <Switch>
          <Route exact path='/'>
            <div className="sections">
                <section className="particles-section">
                  <Box style={{margin:"1rem"}} textAlign="center" fontSize="4rem" fontWeight="fontWeightBold">Particles</Box>
                  <Box style={{margin:"1rem"}} textAlign="center">Adjust the number of particles, color, and maximum size</Box>
                  <Link to="/particles" style={{textDecoration:'none'}}>
                    <Button variant="contained" color="primary">Try It Out</Button>
                  </Link>
                </section>
                <section className="polygon-section">
                  <Box style={{margin:"1rem"}} textAlign="center" fontSize="4rem" fontWeight="fontWeightBold">Polygon</Box>
                  <Box style={{margin:"1rem"}} textAlign="center">Adjust the number of sides, fill color, and stroke color</Box>
                  <Link to="/polygon" style={{textDecoration:'none'}}>
                    <Button variant="contained" color="primary">Try It Out</Button>
                  </Link>
                </section>
                <section className="wave-section">
                  <Box style={{margin:"1rem"}} textAlign="center" fontSize="4rem" fontWeight="fontWeightBold">Waves</Box>
                  <Box style={{margin:"1rem"}} textAlign="center">Adjust the number of peaks and the color</Box>
                  <Link to="/waves" style={{textDecoration:'none'}}>
                    <Button variant="contained" color="primary">Try It Out</Button>
                  </Link>
                </section>
            </div>
          </Route>

          <Route exact path='/particles'>
            <Particles/>
          </Route>

          <Route exact path='/polygon'>
            <Polygon/>
          </Route>

          <Route exact path='/waves'>
            <Wave/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;