/**
 * Created by Kaiser on 06.10.2016.
 */
import registrationFormReducer from '../modules/Registration/RegistrationFormReducer';
import offerCreateFormReducer  from '../modules/Offers/components/OfferCreate/OfferCreateFormReducer';
import loginFormReducer        from '../modules/Login/LoginFormReducer';

export default function formsReducer(state = {}, action) {
 return {
     ...state,
     registration: registrationFormReducer(state.registration, action),
     offerCreate:  offerCreateFormReducer(state.offerCreate, action),
     login:        loginFormReducer(state.login, action)
 }
}