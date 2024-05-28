import {
    FETCH_REVIEWS_REQUEST,
    FETCH_REVIEWS_SUCCESS,
    FETCH_REVIEWS_FAILURE,
} from "../actions/reviewAction";
import { ReviewState } from "./index";

const initialState: ReviewState = {
    loading: true,
    reviews: "",
    error: "",
};

const reviewReducer = (state = initialState, action: any): ReviewState => {
    switch (action.type) {
        case FETCH_REVIEWS_REQUEST:
            return {
                ...state,
                loading: true,
                error: "",
            };
        case FETCH_REVIEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                reviews: action.payload,
                error: "",
            };
        case FETCH_REVIEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: String(action.payload),
            };
        default:
            return state;
    }
};

export default reviewReducer;
