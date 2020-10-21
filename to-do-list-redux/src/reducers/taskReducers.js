import { ADD_NEW_TASK, DELETE_TASK } from "../const";
const taskReducers = (state = [], action) => {
  // dựa vào thuộc tính action.type để xác định mình nên làm gì với state.
  switch (action.type) {
    //Thêm task
    case ADD_NEW_TASK:
      const key = Math.random();
        //điều kiện input nhập vào có nội dung
      if (action.taskName !== null && action.taskName !== "") {
        state = [...state, { key: key, taskName: action.taskName }];
      }

      return state;
    //Xóa task
    case DELETE_TASK:
      const deleteId = action.key;
      state = state.filter((item) => item.key !== deleteId);
      return state;

    default:
      return state;
  }
};
export default taskReducers;

//Reducers sẽ có nhiệm vụ thay đổi state của ứng dụng dựa trên từng hành động được gửi đến.
