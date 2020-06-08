import React, {useReducer} from 'react'

function TodoForm (props){
    const {dispatch, newTodo} =  props

    return(
    <div>
      <h1>To Do</h1>
      <form>
        <label>
          Add new Item
          <input
            type='text'
            placeholder='todo item'
          />
        </label>
        <button
          onClick={()=> dispatch({type: 'ADD_TODO', payload: newTodo})}
        >
          submit
        </button>
      </form>
      
    </div>
    )

}

export default TodoForm