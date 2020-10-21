import React, { Component } from "react";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }
  //Tạo function callback addItem với input là nội dung task được gửi từ form trong component ToDoList
  addItem = (taskName) => {
    const newTask = {
      key: Math.random(), //key lấy tự động
      text: taskName, //text là nội dung nhập vào input
    };
    //điều kiện input nhập vào có nội dung
    if (taskName !== null && taskName !== "") {
      //   const items = [...this.state.items , newTask];

      //trường hợp ứng dụng phức tạp với nhiều lời gọi setState tại cùng thời điểm, điều này sẽ làm giá trị bị xung đột và trả về kết quả không chính xác

      // this.setState({
      //    items, //Đây là một cách viết tắt trong quá trình khởi tạo object theo ES6 (Shorthand property trong Object initializer).Đầy đủ là items: items
      // })

      //Thay vì cách làm trước, chúng ta cần đưa vào tham số cho setState là một anonymous function
      this.setState((state) => {
        return {
          //Cú pháp này sử dụng spread operator.
          // Đây cũng là một đặc điểm mới của ES6 được sử dụng khi xây dựng khi muốn bóc tách các phần tử của một mảng để xây dựng một mảng mới, hoặc cung cấp giá trị tham số khi gọi một function.
          items: [...this.state.items, newTask], //xây dựng một danh sách các thuộc tính mới items, gồm các thuộc tính cũ và newItem mới nhập
          //  items: state.items.concat(newTask),
        };
      });
    }
  };
  deleteItem = (key) => {
    const items = [...this.state.items];
    const updateList = items.filter((item) => item.key !== key);
    this.setState({
      items: updateList,
    });
  };

  render() {
    return (
      //Truyền function callback addItem vào component ToDoList thông qua thuộc tính addItem
      <div>
        <TodoList addItem={this.addItem}></TodoList>
        <TodoItems
          entries={this.state.items}
          delete={this.deleteItem}
        ></TodoItems>
      </div>
    );
  }
}

export default App;
