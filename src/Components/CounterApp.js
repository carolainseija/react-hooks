import { useReducer } from "react";

const types = {
    increment: "increment",
    decrement: "decrement",
    reset: "reset"
}

const reducer = (state, action) => {
    switch (action.type) {
        case types.increment:
            return state + 1;
        case types.decrement:
            return state - 1;
        case types.reset:
            return 0
        default:
            return state
    }
}


const CounterApp = () => {

    const [counter, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <h1>Clicks: {counter}</h1>
            {/* funcion flecha para que solo se ejecute cuando demos click */}
            <button onClick={() => dispatch({ type: types.increment })}>Increment</button>
            <button onClick={() => dispatch({ type: types.decrement })}>Decrement</button>
            <button onClick={() => dispatch({ type: types.reset })}>Reset</button>
        </div>
    )
}

export default CounterApp;