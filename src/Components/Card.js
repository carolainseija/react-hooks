import Button from "./Button"


const Card = (props) => {
    return (
        <div>
            {props.childrens}
            <Button />
        </div>
    )
}

export default Card;