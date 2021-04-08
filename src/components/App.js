import '../css/App.css';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '@material-ui/core/Slider'
import TextField from '@material-ui/core/TextField'
import ColorPicker from 'material-ui-color-picker'


function App() {

  const particles = useSelector(store => store.ParticleReducer)
  const dispatch = useDispatch()

  return (
    <div className="App">

      {/* goes in dashboard component */}
      <div className="controls">
        <Slider 
          defaultValue={0}
          min={1} 
          max={500} 
          value={particles.coords.length} 
          onChange={(e, value) => {
            dispatch({type:"PARTICLE-COUNT", payload:value })
          }} 
          aria-labelledby="continuous-slider"
        />

        <ColorPicker 
          label = "Color"
          defaultValue={"#000000"}
          value={particles.color}
          onChange={(value) => {
            dispatch({type:"PARTICLE-COLOR", payload: value})
          }}
        />

        <TextField 
          type="number"
          label = "Maximum Size"
          value = {particles.maxSize}
          onChange = {(e) => {
            dispatch({type:"PARTICLE-MAXSIZE", payload: e.target.value})
          }}
        />
      </div>

      <svg viewBox="0 0 100 80">
        {particles.coords.map((coords) => (
          <circle fill={particles.color} cx={coords[0]} cy={coords[1]} r={Math.random() * particles.maxSize}/>
        ))}
      </svg>

    </div>
  );
}

export default App;

// https://www.smashingmagazine.com/2015/12/generating-svg-with-react/
// 