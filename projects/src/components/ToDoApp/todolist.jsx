import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";

export const TodoList = ({
  onHandleChecked,
  checked,
  onHandleDelete,
  data,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notChecklist"}>{data}</span>
      <button className="check-btn" onClick={()=>onHandleChecked(data)}>
        <IoMdCheckmark />
      </button>
      <button className="delete-btn" onClick={() => onHandleDelete(data)}>
        <MdOutlineDeleteForever />
      </button>
    </li>
  );
};
