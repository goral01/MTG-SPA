export const FETCH_REVIEWS_REQUEST = "FETCH_REVIEWS_REQUEST";
export const FETCH_REVIEWS_SUCCESS = "FETCH_REVIEWS_SUCCESS";
export const FETCH_REVIEWS_FAILURE = "FETCH_REVIEWS_FAILURE";

export interface FetchReviewsRequestAction {
    type: typeof FETCH_REVIEWS_REQUEST;
}

export interface FetchReviewsSuccessAction {
    type: typeof FETCH_REVIEWS_SUCCESS;
    payload: any;
}

export interface FetchReviewsFailureAction {
    type: typeof FETCH_REVIEWS_FAILURE;
    payload: string;
}

export const fetchReviewsRequest = (): FetchReviewsRequestAction => ({
    type: FETCH_REVIEWS_REQUEST,
});

export const fetchReviewsSuccess = (reviews: any): FetchReviewsSuccessAction => ({
    type: FETCH_REVIEWS_SUCCESS,
    payload: reviews,
});

export const fetchReviewsFailure = (error: string): FetchReviewsFailureAction => ({
    type: FETCH_REVIEWS_FAILURE,
    payload: error,
});

export const fetchReviews = () => {
    return async (dispatch: any) => {
        dispatch(fetchReviewsRequest());
        try {
            const response = await fetch("../../public/data.json");
            const data = await response.json();
            dispatch(fetchReviewsSuccess(data));
        } catch (error) {
            dispatch(fetchReviewsFailure(error.message));
        }
    };
};
