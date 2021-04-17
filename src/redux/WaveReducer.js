const initialState = {
    curviness: 1,
    color: "black",
    bezierPath: "",
}

function WaveReducer(state = initialState, action) {
    switch(action.type) {
        case "WAVE-CURVINESS":

            // sets left side border
            state.bezierPath = `M 0 100 L 0 ${Math.random()*100} `

            for (let i = 1; i < action.payload + 1; i++) {

                const endpointX = (100 / action.payload) * i
                const endpointY = Math.random()*100

                const focusOneX = endpointX - (action.payload / 10)
                const focusOneY = Math.random() * 100
                const focusTwoX = endpointX + (action.payload / 10)
                const focusTwoY = Math.random() * 100

                if (i === 1) {
                    state.bezierPath += `C ${focusOneX} ${focusOneY}, ${focusTwoX} ${focusTwoY}, ${endpointX} ${endpointY} `
                } else {
                    state.bezierPath += `S ${focusTwoX} ${focusTwoY}, ${endpointX} ${endpointY} `
                }
            }

            state.bezierPath += "L 100 100"

            return {...state, curviness: action.payload, bezierPath: state.bezierPath};
        case "WAVE-COLOR":
            return {...state, color: action.payload};
        default:
            return state;
    }
}

export default WaveReducer;