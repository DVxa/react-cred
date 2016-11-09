/**
 * Created by V.Minyailov-book on 08.11.2016.
 */


import {ApiClient} from '../../../../utils/ApiClient'

const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS ';

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
            })
            .catch((err) =>
                dispatch({
                    type: 'GET_DEALS_ERROR',
                    payload: err,
                    error: true
                })
           );
    }
}
