import { createRef, useRef, useState } from "react";
import Button from "./Button"

const Card = (props) => {

    const [name, setName] = useState('');
    const nameInputRef = useRef();
    const handlerName = (event) => {
        setName(event.target.value)
        console.log(name)
    }
    console.log('refs,',nameInputRef)

    return (
        <div>
            {props.childrens}
            <input className="input" onChange={handlerName} ref={nameInputRef} />
            <button>Click</button>
            {name}
            <Button />
        </div>
    )
}

export default Card;