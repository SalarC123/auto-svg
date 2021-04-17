import {useSelector, useDispatch} from 'react-redux'
import Slider from '@material-ui/core/Slider'
import TextField from '@material-ui/core/TextField'
import ColorPicker from 'material-ui-color-picker'
import AutorenewIcon from '@material-ui/icons/Autorenew'

function Particles() {

    const particles = useSelector(store => store.ParticleReducer)
    const dispatch = useDispatch()

    return (
        <>
            <div className="controls">
                <h1>Particles</h1>

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
                    style={{margin:'1rem',}}
                    label = "Color"
                    defaultValue={"#000000"}
                    value={particles.color}
                    onChange={(value) => {
                        dispatch({type:"PARTICLE-COLOR", payload: value})
                    }}
                />

                <TextField 
                    style={{margin:'1rem',}}
                    type="number"
                    label = "Maximum Size"
                    value = {particles.maxSize}
                    onChange = {(e) => {
                        dispatch({type:"PARTICLE-MAXSIZE", payload: e.target.value})
                    }}
                />

                <AutorenewIcon
                    style={{margin:'1rem',width:"3rem", height:"3rem"}}
                    onClick={() => {
                        dispatch({type: "PARTICLE-COUNT", payload: particles.coords.length})
                    }}
                />

            </div>
        
            <svg viewBox="0 0 100 100">
                {particles.coords.map((coords) => (
                <circle fill={particles.color} cx={coords[0]} cy={coords[1]} r={Math.random() * particles.maxSize}/>
                ))}
            </svg>
        </>
    )
}

export default Particles;