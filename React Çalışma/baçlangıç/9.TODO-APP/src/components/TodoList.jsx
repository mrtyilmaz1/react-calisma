import "../App.css"
import Todo from "./Todo"
function TodoList(todos) {
    return (
        <div style={{ width: "100%" }}>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))
            }

        </div>
    )
}

export default TodoList