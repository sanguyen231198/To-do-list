import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../actions";

function TodoItems(props) {
  //sử dụng destruction assignment(ES6) để gán giá trị cho biến
  const { taskName } = props.taskData;
  const { key } = props.taskData;
  const handleDelete = () => {
    props.deleteItem(key);
  };

  return (
    <div>
      <li onClick={handleDelete}> {taskName}</li>
    </div>
  );
}
// chuyển dispatch thành props
const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (key) => {
      dispatch(deleteItem(key));
    },
  };
};

export default connect(null, mapDispatchToProps)(TodoItems);
