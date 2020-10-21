import React, { Component } from "react";

class TodoList extends Component {
  //  constructor(props) {
  //      super(props)
  //      this.state = {
  //           taskInput:''
  //      }
  //  }

  handleInput = (e) => {
    // loại bỏ hoạt động mặc định khi button submit được click (trong trường hợp này, hoạt động mặc định là submit HTML form)
    e.preventDefault();

    // this.props.addItem(this.state.taskInput);
    // this.setState({
    //     taskInput:''
    // })
    const taskName = this.refs.taskInput.value;
    this.props.addItem(taskName);
    this.refs.taskInput.value = "";
    this.refs.taskInput.focus();
  };
  // handleChange = (e) =>{
  //     this.setState({
  //         taskInput: e.target.value
  //     })
  // }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.handleInput}>
            {/* sử dụng thuộc tính ref để xây dựng một tham chiếu đến phần tử input với tên taskInput */}
            <input placeholder="Task" ref="taskInput"></input>
            <button type="submit">Add Task</button>
          </form>
        </div>
      </div>
      //value = {this.state.taskInput}
      // onChange = {this.handleChange}
    );
  }
}

export default TodoList;
