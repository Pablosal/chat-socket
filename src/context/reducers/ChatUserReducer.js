import { ADD_USER, ADD_MESSAGE, ADD_USERS } from "../actions/types";
// const initialState = {
//   userName: "",
//   userImage: ""
// };
const ChatUserReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userName: action.payload.userName,
        userImage: action.payload.userImage
      };
    case ADD_USERS:
      return {
        ...state,
        users: action.payload
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};
export default ChatUserReducer;
