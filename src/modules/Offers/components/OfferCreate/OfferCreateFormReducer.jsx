/**
 * Created by V.Minyailov-book on 21.10.2016.
 */
const initialState = {
    amount: {
        value: '5000',
        valid: false,
        dirty: false
    },
    period: {
        value: '14',
        valid: false,
        dirty: false,
    },
    rate: {
        value: '0.2',
        valid: false,
        dirty: false
    },
    offerType: {
        value: 'borrow',
        valid: false,
        dirty: false
    },
    delimiter: {
        value: false,
        valid: false,
        dirty: false
    }
};

export default function offerCreateFormReducer(state = initialState, action) {
    let errors = [];
    let valid = true;
    switch (action.type) {
        case 'SET_AMOUNT':
            return {
                ...state,
                amount: {
                    ...state.amount,
                    value: action.payload,
                    valid: valid,
                    dirty: true,
                    errors: errors,
                }
            };
        case 'SET_PERIOD':
            return {
                ...state,
                period: {
                    ...state.period,
                    value: action.payload,
                    valid: valid,
                    dirty: true,
                    errors: errors,
                }
            };
        case 'SET_RATE':
            console.log(action);
            return {
                ...state,
                rate: {
                    ...state.rate,
                    value: action.payload,
                    valid: valid,
                    dirty: true,
                    errors: errors,
                }
            };
        case 'SET_OFFER_TYPE':
            return {
                ...state,
                offerType: {
                    ...state.offerType,
                    value: action.payload,
                    valid: valid,
                    dirty: true,
                    errors: errors,
                }
            };
        case 'SET_DELIMITER':
            console.log(action);
            return {
                ...state,
                delimiter: {
                    ...state.delimiter,
                    value: action.payload,
                    valid: valid,
                    dirty: true,
                    errors: errors,
                }
            };
        default:
            return state;
    }
}
