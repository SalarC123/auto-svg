import {useSelector, useDispatch} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import ColorPicker from 'material-ui-color-picker'
import AutorenewIcon from '@material-ui/icons/Autorenew'


function Polygon() {

    const polygon = useSelector(store => store.PolygonReducer);
    const dispatch = useDispatch();

    function polygonPoints(coordsArray) {
        let points = "";
        
        coordsArray.forEach((element) => {
            points += `${element[0]},${element[1]} `
        })

        return points
    }

    return (

        <>
            <div className="controls">
                <TextField
                    type="number"
                    label="Number of Sides"
                    value={polygon.sides.length}
                    onChange={(e) => (
                        dispatch({type:"POLYGON-SIDES", payload: e.target.value})
                    )}
                />

                <ColorPicker
                    label="Fill Color"
                    value={polygon.fillColor}
                    onChange={(value) => (
                        dispatch({type:"POLYGON-FILL-COLOR", payload: value})
                    )}
                />

                <ColorPicker
                    label="Stroke Color"
                    value={polygon.strokeColor}
                    onChange={(value) => (
                        dispatch({type:"POLYGON-STROKE-COLOR", payload: value})
                    )}
                />

                <AutorenewIcon
                    style={{margin:'1rem',width:"3rem", height:"3rem"}}
                    onClick={() => {
                        dispatch({type: "POLYGON-SIDES", payload: polygon.sides.length})
                    }}
                />
            </div>

            <svg viewBox="0 0 100 100">
                <polygon 
                    points={polygonPoints(polygon.sides)}
                    fill={polygon.fillColor} 
                    stroke={polygon.strokeColor}
                />
            </svg>
        </>
    )
}

export default Polygon;