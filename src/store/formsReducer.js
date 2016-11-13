import registrationFormReducer  from '../reducers/RegistrationFormReducer';
import offerCreateFormReducer   from '../reducers/OfferCreateFormReducer';
import loginFormReducer         from '../reducers/LoginFormReducer';
import homeFormReducer          from '../reducers/HomeFormReducer';
import feedbackFormReducer      from '../reducers/FeedbackFormReducer';
import userProfileFormReducer   from '../reducers/UserProfileFormReducer';

export default function formsReducer(state = {}, action) {
    return {
        ...state,
        registration:  registrationFormReducer(state.registration, action),
        offerCreate:   offerCreateFormReducer(state.offerCreate, action),
        login:         loginFormReducer(state.login, action),
        home:          homeFormReducer(state.home, action),
        feedback:      feedbackFormReducer(state.feedback, action),
        userProfile:   userProfileFormReducer(state.userProfile, action)
    }
}