import React from "react";
import { connect } from "react-redux";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";

function App(props) {
  const items = props.task.map((item) => {
    return <TodoItems key={item.key} taskData={item}></TodoItems>;
  });
  return (
    <div>
      <TodoList></TodoList>
      <ul className="theList">{items}</ul>
    </div>
  );
}
// Lấy state từ store bằng mapStateToProps
// Lúc này state nhận được sẽ gán vào props
// Gán state nhận về từ store
// thành props có tên task (props.task)
const mapStateToProps = (state) => {
  return {
    task: state.task,
  };
};
//Export component với két nối redux.
export default connect(mapStateToProps, null)(App);
