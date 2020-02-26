// import { bindActionCreators } from "redux";
// import store from "../store";

//a reducer takes in 2 thinks:

//1. the action (what happened)
//2. copy of current state

function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      console.log("incrementing likes");
      const i = action.index;
      console.log(i)
      
      return [
        ...state.slice(0,i), //before the one we are updateing
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), //after the one we are updateing
      ]
    //return the updated state
    default:
      return state;
  }
}

export default posts;
