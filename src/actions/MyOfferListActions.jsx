import {ApiClient} from '../utils/ApiClient'

export function setType(value) {
    return {
        type: 'SET_TYPE',
        payload: value
    }
}

export function getOfferData(url) {

    return (dispatch) => {

        dispatch({
            type: 'GET_OFFERS_REQUEST',
            payload: url
        });

        ApiClient.get(url)
            .then((data) => {
                dispatch({
                    type: 'GET_OFFERS_SUCCESS',
                    payload: data
                })
            }, (error) =>
                dispatch({
                    type: 'GET_OFFERS_ERROR',
                    payload: error,
                    error: true
                })
            );
    }
}
