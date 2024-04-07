import React from 'react';
import TodoList from './TodoList';
import './Todo.css';

const TodoApp=()=>{
    return(
        <>
        <h1>Today's Tasks</h1>
        <div className='todo-app'>
            <TodoList/>
        </div>
        </>
    );
}
export default TodoApp;