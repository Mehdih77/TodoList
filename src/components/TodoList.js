import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

export default function TodoList() {

    const [todos, setTodos] = useState([])
    const addTodos = todo => {
        // if (!todo.text || /^\s*$/.test(todo.text)) {
        //     return;
        // }
        const newTodo = [todo , ...todos]
        setTodos(newTodo)
        //console.log(newTodo);
    }


    const completeTodo = id => {
        let updateTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updateTodo)
        //console.log(updateTodo);
    }


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr)
        //console.log(removeArr);
    }


    const updateTodo = (todoId,newValue) => {
        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
        //console.log(newValue);
    }


    return (
        <div>
            <h1>Whats's the plan for Today?</h1>
            <TodoForm onSubmit={addTodos} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
            updateTodo={updateTodo} />
        </div>
    )
}
