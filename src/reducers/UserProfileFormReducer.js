const initialState = {
    email: {
        value: '',
        valid: false,
        dirty: false
    },
    password: {
        value: '',
        valid: false,
        dirty: false
    },
    passwordRepeat: {
        value: '',
        valid: false,
        dirty: false
    },
    firstName: {
        value: '',
        valid: false,
        dirty: false,
        descr: 'Имя'
    },
    lastName: {
        value: '',
        valid: false,
        dirty: false,
        descr: 'Фамилия'

    },
    patronomyc: {
        value: '',
        valid: false,
        dirty: false,
        descr: 'Отчество'
    },
    region: {
        value: 1,
        valid: false,
        dirty: false,
    },
    grade: {
        value: 1,
        valid: false,
        dirty: false,
    }

};

export default function userProfileFormReducer(state = initialState, action) {
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
        case 'SET_PASSWORD_REPEAT':
            if (action.payload.length === 0) {
                errors.push('Это поле является обязательным');
                valid = false;
            }
            if (action.payload.length > 0 && action.payload !== state.password.value) {
                errors.push('Пароли должны совпадать');
                valid = false;
            }
            return {
                ...state,
                passwordRepeat: {
                    ...state.passwordRepeat,
                    value: action.payload,
                    valid: valid,
                    dirty: true,
                    errors: errors,
                }
            };
        case 'SET_FIRST_NAME':
            if (action.payload.length === 0) {
                errors.push('Это поле является обязательным');
                valid = false;
            }
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                    value: action.payload,
                    valid: valid,
                    dirty: true,
                    errors: errors,
                }
            };
        case 'SET_LAST_NAME':
            if (action.payload.length === 0) {
                errors.push('Это поле является обязательным');
                valid = false;
            }
            return {
                ...state,
                lastName: {
                    ...state.lastName,
                    value: action.payload,
                    valid: valid,
                    dirty: true,
                    errors: errors,
                }
            };
        case 'SET_PATRONOMYC':
            if (action.payload.length === 0) {
                errors.push('Это поле является обязательным');
                valid = false;
            }
            return {
                ...state,
                patronomyc: {
                    ...state.patronomyc,
                    value: action.payload,
                    valid: valid,
                    dirty: true,
                    errors: errors,
                }
            };
        case 'SET_REGION':
            return {
                ...state,
                region: {
                    ...state.region,
                    value: action.payload,
                    valid: valid,
                    dirty: true,
                    errors: errors,
                }
            };
        case 'SET_GRADE':
            return {
                ...state,
                grade: {
                    ...state.grade,
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
