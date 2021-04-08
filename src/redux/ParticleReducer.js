const initialState = {
    coords: [], 
    color: "black",
    maxSize: 1
}

function ParticleReducer(state = initialState, action) {
    switch (action.type) {
        case "PARTICLE-COUNT":
            state.coords = []
            for (let i = 0; i < action.payload; i++) {
                state.coords.push([
                    Math.floor(Math.random()*100),
                    Math.floor(Math.random()*100),
                ])
            }
            return {...state, coords: state.coords}
        case "PARTICLE-COLOR":
            state.color = action.payload
            return {...state, color: state.color}
        case "PARTICLE-MAXSIZE":
            state.maxSize = action.payload
            return {...state, maxSize: state.maxSize}
        default:
            return state;
    }
}

export default ParticleReducer;