        /**
 * Created by V.Minyailov-book on 08.11.2016.
 */
const initialState = {
    amount: {
        minValue:   3000,
        maxValue:   30000,
        curValue:   5000,
        value:      5000,
        step:       1000,
        descr:      "Сумма заявки"
    },
    period: {
        minValue:   1,
        maxValue:   30,
        curValue:   14,
        step:       1,
        descr:      "Период заявки"
    },
    rate: {
        minValue:   0.1,
        maxValue:   2.0,
        curValue:   0.2,
        step:       0.1,
        descr:      "Ставка (% в день)"
    }
};

export default function homeFormReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_AMOUNT':
            return {
                ...state,
                amount: {
                    ...state.amount,
                    curValue: action.payload

                }
            };

        case 'SET_PERIOD':
            return {
                ...state,
                period: {
                    ...state.period,
                    curValue: action.payload
                }
            };

        case 'SET_RATE':
            return {
                ...state,
                rate: {
                    ...state.home,
                    curValue: action.payload
                }
            };

        default:
            return {
                ...state
            }
    }
}