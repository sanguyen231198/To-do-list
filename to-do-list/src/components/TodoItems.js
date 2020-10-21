import React, { Component } from "react";

class TodoItems extends Component {
  render() {
    //sử dụng destruction assignment(ES6) để gán giá trị cho biến entries
    const { entries } = this.props;
    const listItems = entries.map((item) => {
      return (
        <li
          key={item.key}
          onClick={() => {
            this.props.delete(item.key);
          }}
        >
          {item.text}
        </li>
      );
    });
    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;
