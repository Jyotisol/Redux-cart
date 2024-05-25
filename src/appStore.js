
import { createStore } from "redux";
import rooted from "./redux/reducerdata/main";

const store = createStore(
    rooted
);


export default store;