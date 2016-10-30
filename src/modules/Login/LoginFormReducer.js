const initialState = {
    email: {
        value: '',
        valid: false,
        dirty: false
    },
    password: {
        value: '',
        valid: false,
        dirty: false,
        errors: [
            'ошибка1',
            'ошибка2',
        ]
    }
};

export default function loginFormReducer(state = initialState, action) {
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
                errors.push('Введите корректный email');
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
        case 'SET_PASSWORD':
            if (action.payload.length === 0) {
                errors.push('Это поле является обязательным');
                valid = false;
            }
            if (action.payload.length > 0 && action.payload.length < 6) {
                errors.push('Пароль должен быть длиной не менее 6 символов');
                valid = false;
            }
            return {
                ...state,
                password: {
                    ...state.password,
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
