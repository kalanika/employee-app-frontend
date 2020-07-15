import { RECEIVE_API_DATA } from "../actions";

export default (state = {}, { type, data }) => {
  console.log("Recieveeeeeee");
  console.log(data);
  console.log(type);
  switch (type) {
   
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};
