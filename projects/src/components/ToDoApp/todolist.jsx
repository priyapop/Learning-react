import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";


export const TodoList = ({key,onHandleDelete,data}) => {

    return(
  <li className="todo-item" key={key}>
    <span>{data}</span>
    <button className="check-btn">
      <IoMdCheckmark />
    </button>
    <button className="delete-btn" onClick={() => onHandleDelete(data)}>
      <MdOutlineDeleteForever />
    </button>
  </li>
  )
};
