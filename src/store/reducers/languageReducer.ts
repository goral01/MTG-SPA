import { CHANGE_LANGUAGE, ChangeLanguageAction } from "../actions/languageActions";

const initialState: string = "ru";

const languageReducer = (state = initialState, action: ChangeLanguageAction): string => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
};

export default languageReducer;
