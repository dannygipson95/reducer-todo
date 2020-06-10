import React from 'react'

function TodoList(props){
    const {state} = props
    console.log(state)
    return(
        <div>
        {state.map(todo=>{
            return(
                <h1>{todo.item}</h1>
            )
        })}
        </div>
    )
}

export default TodoList