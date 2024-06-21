import "../App.css"
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../App.css"



function Todo({ todo }) {
    const { id, content } = todo;
    return (
        <div className="todo">
            <div >
                {content}
            </div>
            <div className="todo-icons">
                <IoIosRemoveCircle style={{ marginRight: "5px" }} />
                <FaEdit />

            </div>
        </div>
    )
}

export default Todo