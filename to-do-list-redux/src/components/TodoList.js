import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";

function TodoList(props) {
  //react hook(useState, useRef)
  const [taskName, setTaskName] = useState("");
  //Refs: Giúp chúng ta tương tác với DOM thật
  const taskInput = useRef(null);
  const handleInput = (e) => {
    //loại bỏ hoạt động mặc định khi button submit được click (trong trường hợp này, hoạt động mặc định là submit HTML form)
    e.preventDefault();
    // Dispatch action.
    // Props này được tạo bởi hàm mapDispatchToProps bên dưới
    props.addItem(taskName);
    //Gán giá trị cho input thành rỗng
    taskInput.current.value = "";
    //focus vào input
    taskInput.current.focus();
    //Cập nhật lại state taskName
    setTaskName("");
    // console.log('>>>>>>', taskName);
  };
  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={handleInput}>
          <input
            placeholder="Task"
            value={taskName}
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            ref={taskInput}
          ></input>
          <button>Add Task</button>
        </form>
      </div>
    </div>
  );
}
// chuyển dispatch thành props
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (taskName) => {
      dispatch(addItem(taskName));
    },
  };
};
export default connect(null, mapDispatchToProps)(TodoList);
