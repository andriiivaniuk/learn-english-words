import {
    fetchWordInfo,
    getCurrentWordInfo,
    setUserLanguage,
    resetMainMode,
    selectMainMode,
    setModalSettings,
    clearModalSettings,
    setModalSelectedWords,
    clearModalSelectedWords,
    incrementRightAnswers,
    incrementWrongAnswers,
    getCurrentPictureData,
    searchImages,
    clearCurrentPictureData
} from "./appInfoActions";

import appInfoReducer from "./appInfoReducer";

export {
    appInfoReducer,

    fetchWordInfo,
    getCurrentWordInfo,
    setUserLanguage,
    resetMainMode,
    selectMainMode,
    setModalSettings,
    clearModalSettings,
    setModalSelectedWords,
    clearModalSelectedWords,
    incrementRightAnswers,
    incrementWrongAnswers,
    getCurrentPictureData,
    searchImages,
    clearCurrentPictureData
};