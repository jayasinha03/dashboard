import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) =>{
    const [edit, setEdit] = useState({
        id: null,
        value:''
    });

    const submitUpdate = value =>{
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id){
        return <TodoForm 
            edit = {edit}
            onSubmit = {submitUpdate}
            />;
    }

    return todos.map((todo, index) => (
        <>
        <div 
            className={todo.isComplete ? 'todo-row complete' :'todo-row'} 
            key={index}>
                <div 
                    key={todo.id}
                    onClick={()=> completeTodo(todo.id)}>
                        {todo.text}
                </div>

                <div className='icons'>
                <IoIosCloseCircleOutline 
                    onClick={()=>removeTodo(todo.id)}
                    className='delete-icon'
                />
                <FaEdit 
                    onClick={()=>setEdit({id:todo.id, value: todo.text})}
                    className='edit-icon'
                />
                </div>
        </div>
        </>
    ))
}

export default Todo;