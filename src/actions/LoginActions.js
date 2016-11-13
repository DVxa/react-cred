/**
 * Created by Kaiser on 06.10.2016.
 */

export function setEmail(value) {
    return {
        type: 'SET_EMAIL',
        payload: value,
    }
}

export function setPassword(value) {
    return {
        type: 'SET_PASSWORD',
        payload: value,
    }
}
