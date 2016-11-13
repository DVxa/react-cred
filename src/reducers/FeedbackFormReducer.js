const initialState = {
    email: {
        value: '',
        valid: false,
        dirty: false
    },
    name: {
        value: '',
        valid: false,
        dirty: false,
    },
    text: {
        value: '',
        valid: false,
        dirty: false,
    }
};

export default function feedbackFormReducer(state = initialState, action) {
    let errors = [];
    let valid = true;
    switch (action.type) {
        case 'SET_EMAIL':
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            // let errors = [];
            // let valid = true;
            if (action.payload.length === 0) {
                errors.push('Это поле является обязательным');
                valid = false;
            }
            if (!re.test(action.payload) && action.payload.length > 0) {
                errors.push('Email должен быть вида name@example.com');
                valid = false;
            }
            return {
                ...state,
                email: {
                    ...state.email,
                    value: action.payload,
                    valid: valid,
                    dirty: true,
                    errors: errors,
                }
            };
        case 'SET_NAME':
            if (action.payload.length === 0) {
                errors.push('Это поле является обязательным');
                valid = false;
            }
            return {
                ...state,
                name: {
                    ...state.name,
                    value: action.payload,
                    valid: valid,
                    dirty: true,
                    errors: errors,
                }
            };
        case 'SET_TEXT':
            if (action.payload.length === 0) {
                errors.push('Это поле является обязательным');
                valid = false;
            }
            return {
                ...state,
                text: {
                    ...state.text,
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
