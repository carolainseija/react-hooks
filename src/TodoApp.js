import { useReducer, useState } from "react";

const initialTodos = [
    {
        id: 1,
        title: "Todo #1"
    },
    {
        id: 2,
        title: "Todo #2"
    },
    {
        id: 3,
        title: "Todo #3"
    },
    {
        id: 4,
        title: "Todo #4"
    }
]


const types = {
    add: "add",
    update: "update",
    delete: "delete",
}

const reducer = (state, action) => {
    switch (action.type) {
        case types.add:
            console.log(action.payload)
            // copiamos el estado anterior y agregamos uno
            return [...state, action.payload]
        case types.update:
            const todoEdit = action.payload
            return state.map(todo => todo.id === todoEdit.id ? todoEdit : todo)
        case types.delete:
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state;
    }
}

const TodoApp = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos)
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: types.add, payload: { title: text, id: Date.now() } })
    }

    return (
        <div>
            <h1>Todo app</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => dispatch({
                            type: types.delete,
                            payload: todo.id
                        })}>
                            Delete
                        </button>

                        <button onClick={() => dispatch({
                            type: types.update,
                            //va a contener todo el todo, pero el campo title va a tener lo del input text
                            payload: {
                                ...todo, title: text
                            }
                        })}>
                            Update
                        </button>
                    </li>
                ))
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
        </div>
    )
}

export default TodoApp;