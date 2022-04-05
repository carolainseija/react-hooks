import React, { useReducer } from 'react';

const seleccion = {
    departamento: 'departamento',
    Pais: 'pais',
}
const Reducer = (state, action) => {
    if (action.type == seleccion.pais) {
        return {...state, paisState: action.value }
    } else if (action.type == seleccion.departamento) {
        return { ...state, depState: action.value }
    }else {
        console.log("no coincide")
    }
}


const initialState = {
    paisState: 'Uruguay',
    depState: 'Montevideo',
}

const Reactjs = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <label>busque su pais y departamento: </label>
                <br />
                <select
                    value={state.paisState}
                    onChange={event => {
                        dispatch({ type: seleccion.pais, value: event.target.value })
                    }}
                >
                    <option value="Uruguay">Uruguay</option>
                    <option value="Argetina">Argentina</option>
                    <option value="Colombia">Colombia</option>
                </select>
                <br />
                <select
                    value={state.depState}
                    onChange={event => {
                        dispatch({ type: seleccion.departamento, value: event.target.value })
                    }}
                >
                    <option value="Montevideo">Montevideo</option>
                    <option value="Rosario">Rosario</option>
                    <option value="Canelones">Canelones</option>
                </select>
                <br />
               Su pais es  {state.paisState} y su departamento es:  {state.depState}
            </div>
        </div>
    )
}
export default Reducer;
