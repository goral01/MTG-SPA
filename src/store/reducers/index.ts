import { combineReducers } from "redux";
import languageReducer from "../reducers/languageReducer";
import reviewReducer from "../reducers/reviewReducer";

export interface ReviewState {
    loading: boolean;
    reviews: string;
    error: string;
}

export interface AppState {
    language: string;
    reviews: ReviewState;
}

const rootReducer = combineReducers({
    language: languageReducer,
    reviews: reviewReducer,
});

export default rootReducer;
