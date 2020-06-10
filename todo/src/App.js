import React, {useState, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

import {initialState, reducer} from './reducers/reducer'
import TodoForm from './components/todoForm';
import TodoList from './components/todoList'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <TodoForm state={state} dispatch={dispatch} newTodo={newTodo}/>
    <TodoList state={state}/>
    </>
  );
}

export default App;
