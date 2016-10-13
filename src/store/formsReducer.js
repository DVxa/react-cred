/**
 * Created by Kaiser on 06.10.2016.
 */
import registrationFormReducer from '../modules/Registration/RegistrationFormReducer';

export default function formsReducer(state = {}, action) {
 return {
     ...state,
     registration: registrationFormReducer(state.registration, action),
 }
}