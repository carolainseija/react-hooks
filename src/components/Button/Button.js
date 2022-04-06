import React, { useReducer } from "react";

const initialState = {
    count: 0,
}

const reducer = (state, action) => {
    if (action.type === 'add') {
        return {
            count: state.count + 1
        }
    } else {
        console.log("funcion")
    }
}

const Button = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const añadir = () => {
        dispatch({ type: 'add' })
    }
    return (
        <div>
            <button onClick={añadir}>
                Click
            </button>
            {state.count}
        </div>
    )
}

export default Button;
