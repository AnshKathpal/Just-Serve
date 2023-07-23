import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as registerReducer } from "./registerReducer/reducer";
import { reducer as loginReducer } from "./loginReducer/reducer";
import { reducer as adminReducer } from "./AdminReducer/reducer";
import { reducer as jobsReducer } from "./JobsReducer/reducer";
import { reducer as volunteerReducer } from "./VolunteerReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
  adminReducer,
  jobsReducer,
  volunteerReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
