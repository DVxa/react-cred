/**
 * Created by Kaiser on 05.10.2016.
 */
import formsReducer from './formsReducer';

export default function rootReducer(state = {}, action) {
    return {
        ...state,
        forms: formsReducer(state.forms, action)
    };
}