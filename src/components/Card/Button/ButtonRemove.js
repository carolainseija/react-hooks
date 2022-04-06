import React, { useContext } from "react";
import Context from "../../../Context/Context";

const ButtonRemove = () => {
    const functionsContext = useContext(Context);
    return (
        <button onClick={functionsContext.HandlerRemove}>
            Eliminar 1
        </button>
    )
}

export default ButtonRemove;