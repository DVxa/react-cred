/**
 * Created by V.Minyailov-book on 08.11.2016.
 */


import {ApiClient} from '../utils/ApiClient'

export function setType(value) {
    return {
        type: 'SET_TYPE',
        payload: value
    }
}

export function getDealData(url) {

    return (dispatch) => {

        dispatch({
            type: 'GET_DEALS_REQUEST',
            payload: url
        });

        ApiClient.get(url)
            .then((data) => {
                dispatch({
                    type: 'GET_DEALS_SUCCESS',
                    payload: data
                })
            }, (error) =>
                dispatch({
                    type: 'GET_DEALS_ERROR',
                    payload: error,
                    error: true
                })
            );
    }
}
