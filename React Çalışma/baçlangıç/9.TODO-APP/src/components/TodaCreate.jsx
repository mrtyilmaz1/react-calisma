import "../App.css"
function TodaCreate() {
    return (
        <div className="todo-create">
            <input className="todo-input" type="text" placeholder="Todo giriniz" />
            <button className="todo-create-button">Todo Oluştur</button>
        </div>
    )
}

export default TodaCreate