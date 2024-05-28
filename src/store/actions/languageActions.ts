export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export interface ChangeLanguageAction {
    type: typeof CHANGE_LANGUAGE;
    payload: string;
}


export const changeLanguage = (language: string): ChangeLanguageAction => ({
    type: CHANGE_LANGUAGE,
    payload: language,
});
