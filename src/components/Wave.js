import {useSelector, useDispatch} from 'react-redux'
import ColorPicker from 'material-ui-color-picker'
import Slider from '@material-ui/core/Slider'
import AutorenewIcon from '@material-ui/icons/Autorenew'

function Wave() {

    const wave = useSelector(store => store.WaveReducer)
    const dispatch = useDispatch()

    return (
        <>
            <div className="controls">
                <h1>Waves</h1>

                <Slider
                    min={1}
                    max={10}
                    marks
                    value={wave.curviness}
                    onChange={(e, value) => (
                        dispatch({type: "WAVE-CURVINESS", payload: value})
                    )}
                    aria-labelledby="continuous-slider"
                />

                <ColorPicker
                    value={wave.color}
                    onChange={(value) => (
                        dispatch({type: "WAVE-COLOR", payload: value})
                    )}
                    label="Color"
                />

                <AutorenewIcon
                    style={{margin:'1rem',width:"3rem", height:"3rem"}}
                    onClick={() => {
                        dispatch({type: "WAVE-CURVINESS", payload: wave.curviness})
                    }}
                />

            </div>

            <svg viewBox="0 0 100 100">
                <path d={wave.bezierPath} fill={wave.color} />
            </svg>
        </>
    )
}

export default Wave;