import React, { useState } from "react";




const todoDataList = [
    { id: "1", title: "공부하기", completed: false },
    { id: "2", title: "야근하기", completed: false },
    { id: "3", title: "철야하기", completed: false },
];




function TodoList() {
    const [todo, setTodo] = useState(todoDataList);

    const [newTodo, setNewTodo] = useState("");

    const toggleComplete = (id) => {
        const updatedTodo = todo.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodo(updatedTodo);
    };

    const deleteTodo = (id) => {
        const updatedTodo = todo.filter((todo) => todo.id !== id);
        setTodo(updatedTodo);
    };

    const addTodo = () => {
        if (newTodo.trim() === "") return; 

        const newTodoItem = {
            id: Date.now().toString(), title: newTodo, completed: false};

        setTodo([...todo, newTodoItem]);
        setNewTodo(""); 
    };



    return (
        <div style={styles.container}>
            <h1>할 일 목록</h1>

            <div style={styles.addTodoContainer}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="해야 할 일을 입력하세요"
                    style={styles.inputField}
                />
                <button onClick={addTodo} style={styles.addButton}>
                    입력
                </button>
            </div>

            <ul style={styles.todoList}>
                {todo.map((todo) => (
                    <li key={todo.id} style={styles.todoItem}>
                        <input
                            type="checkbox"
                            checked={todo.completed} 
                            onChange={() => toggleComplete(todo.id)}
                        />
                        <span
                            style={{
                                ...styles.todoText,
                                textDecoration: todo.completed ? "line-through" : "none",
                            }}
                        >
                            {todo.title}
                        </span>
                        <button style={styles.deleteButton} onClick={() => deleteTodo(todo.id)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: "lightblue",
        margin: "0 auto",
        maxWidth: "600px",
        padding: "30px",
        marginTop: "50px",
        borderRadius: "10px",
    },
    addTodoContainer: {
        display: "flex",
        justifyContent: "center",
        
    },
    todoList: {
        listStyleType: "none",
        padding: 0,
    },
    todoItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px dotted black",
        padding: "10px",
    },
    todoText: {
        flex: 1,
        marginLeft: "10px",
        color: "black",
    },
    deleteButton: {
        color: "gray",
        backgroundColor: "lightgray",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
    },
};

export default TodoList;
