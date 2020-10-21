import { ADD_NEW_TASK, DELETE_TASK } from "../const";
//Action thêm task
export const addItem = (taskName) => {
  return {
    type: ADD_NEW_TASK,
    taskName,
  };
};
//action xóa task
export const deleteItem = (key) => {
  return {
    type: DELETE_TASK,
    key,
  };
};
//Actions là một object chứa các hành động mà bạn muốn thực hiện dispatch gửi đến reducers
//Mỗi action chúng ta cần phải chỉ định thụôc tính type có giá trị duy nhất.
//Bởi khi action gửi đến reducer nó sẽ dựa vào thuộc tính action.type để xác định mình nên làm gì với state.
