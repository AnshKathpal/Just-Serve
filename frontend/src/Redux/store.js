import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./Authentication/reducer";
import { reducer as adminReducer } from "./AdminReducer/reducer";
import { reducer as jobsReducer } from "./JobsReducer/reducer";
import { reducer as volunteerReducer } from "./VolunteerReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer,
  adminReducer,
  jobsReducer,
  volunteerReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
