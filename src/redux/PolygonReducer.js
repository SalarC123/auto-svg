const initialState = {
    sides: [],
    fillColor: "black",
    strokeColor: "black"
}

function PolygonReducer(state = initialState, action) {
    switch(action.type) {
        case "POLYGON-SIDES":
            state.sides = []

            for (let i = 0; i < action.payload; i++) { 
                const coord = []
                coord.push(Math.floor(Math.random()*100), Math.floor(Math.random()*100))
                state.sides.push(coord);
            }

            return {...state, sides: state.sides};
        case "POLYGON-FILL-COLOR":
            return {...state, fillColor: action.payload};
        case "POLYGON-STROKE-COLOR":
            return {...state, strokeColor: action.payload};
        default:
            return state;
    }
}


export default PolygonReducer;