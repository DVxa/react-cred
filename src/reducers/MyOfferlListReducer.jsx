        /**
 * Created by V.Minyailov-book on 08.11.2016.
 */
const initialState = {
    offers: {
        offerType: 'borrow',
        data: [],
        error: '',
        url: '',
        fetchng: false
    }
};

export default function myOfferListReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TYPE':
            return {
                ...state,
                offers: {
                    ...state.offers,
                    offerType: action.payload
                }
            };

        case 'GET_OFFERS_REQUEST':
            return {
                ...state,
                offers: {
                    ...state.offers,
                    url: action.payload,
                    fetching: true
                }
            };

        case 'GET_OFFERS_SUCCESS':
            return {
                ...state,
                offers: {
                    ...state.offers,
                    data: action.payload,
                    fetching: false
                }
            };

        case 'GET_OFFERS_ERROR':
            return {
                ...state,
                offers: {
                    ...state.offers,
                    error: action.payload,
                    fetching: false
                }
            };

        default:
            return {
                ...state
            }
    }
}