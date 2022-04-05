import React, {useState} from "react";

const State = () => {

    const [dep, setDep] = useState('Montevideo')
    const [pais, setPais] = useState('Uruguay')

    const handlerPais = (event)=> {
        setPais(event.target.value)
    }

    const handlerDep = (event) => {
        setDep(event.target.value)
    }
    return (
        <div>
        <div>
            <label>busque su pais y departamento: </label>
            <br />
            <select
                value={pais}
                onChange={handlerPais}
            >
                <option value="Uruguay">Uruguay</option>
                <option value="Argetina">Argentina</option>
                <option value="Colombia">Colombia</option>
            </select>
            <br />
            <select
                value={dep}
              onChange={handlerDep}
            >
                <option value="Montevideo">Montevideo</option>
                <option value="Rosario">Rosario</option>
                <option value="Canelones">Canelones</option>
            </select>
            <br />
           Su pais es  {pais} y su departamento es:  {dep}
        </div>
    </div>
    )
}

export default State;