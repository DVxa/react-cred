/**
 * Created by V.Minyailov-book on 08.11.2016.
 */
const initialState = {
    deals: {
        dealType: 'borrow',
        data: [],
        error: '',
        url: '',
        fetchng: false
    }
};

export default function myDealListReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TYPE':
            return {
                ...state,
                deals: {
                    ...state.deals,
                    dealType: action.payload
                }
            };

        case 'GET_DEALS_REQUEST':
            return {
                ...state,
                deals: {
                    ...state.deals,
                    url: action.payload,
                    fetching: true
                }
            };

        case 'GET_DEALS_SUCCESS':
            return {
                ...state,
                deals: {
                    ...state.deals,
                    data: action.payload,
                    fetching: false
                }
            };

        case 'GET_DEALS_ERROR':
            return {
                ...state,
                deals: {
                    ...state.deals,
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