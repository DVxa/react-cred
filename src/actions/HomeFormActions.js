export function setAmount(value) {
    console.log(value);
    return {
        type: 'SET_AMOUNT',
        payload: value,
    }
}

export function setPeriod(value) {
    return {
        type: 'SET_PERIOD',
        payload: value,
    }
}

export function setRate(value) {
    return {
        type: 'SET_RATE',
        payload: value,
    }
}
