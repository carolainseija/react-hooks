import React, { useContext } from "react";
import Context from "../../../Context/Context";

const ButtonAdd = () => {
    const functionsContext = useContext(Context);
    return (
        <button onClick={functionsContext.HandlerAdd}>
            Añadir 1
        </button>
    )
}

export default ButtonAdd;