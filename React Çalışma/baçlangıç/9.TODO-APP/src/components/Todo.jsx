import "../App.css"
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../App.css"


function Todo() {
    return (
        <div className="todo">
            <div >
                ilk todo
            </div>
            <div className="todo-icons">
                <IoIosRemoveCircle style={{ marginRight: "5px" }} />
                <FaEdit />

            </div>
        </div>
    )
}

export default Todo