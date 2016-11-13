/**
 * Created by V.Minyailov-book on 21.10.2016.
 */

export function setAmount(value) {
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

export function setOfferType(value) {
    return {
        type: 'SET_OFFER_TYPE',
        payload: value,
    }
}

export function setDelimiter(value) {
    return {
        type: 'SET_DELIMITER',
        payload: value,
    }
}