/**
 * Created by V.Minyailov-book on 08.11.2016.
 */

import React from 'react';
import { AuthUtils } from './AuthUtils'

export class ApiClient {

    uid = AuthUtils.getUid();

    static get(url) {

        var access_token = AuthUtils.getToken();

        return (
            fetch (
                url,
                {
                    method: 'GET',
                    headers: {
                        "Accept" : "application/json",
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8;"
                    },
                    credentials: 'include'
                }
            ).then (
                function(response) {
                    if (response.status !== 200) {
                        Promise.reject(response.status);
                    }
                    return response.json();
                }
            ).catch(function(err) {
                Promise.reject(err);
            })
        );
    }

    static post(url, body) {

        var access_token = AuthUtils.getToken();

        return (
            fetch (
                url,
                {
                    method: 'POST',
                    body: body + '&access_token=' + access_token,
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },
                    credentials: 'include'
                }
            ).then (
                function(response) {
                    if (response.status !== 200) {
                        Promise.reject(response.status);
                    }
                    return response.json();
                }
            ).catch(function(err) {
                Promise.reject(err);
            })
        );
    }

    // For Login && Register
    static postNoAuth(url, body) {
        return (
            fetch (
                url,
                {
                    method: 'POST',
                    body: body,
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    },
                }
            ).then (
                function(response) {
                    if (response.status !== 200) {
                        Promise.reject(response.status);
                    }
                    return response.json();
                }
            ).catch(function(err) {
                Promise.reject(err);
            })
        );
    }
}

//"Authorization": "Basic " + access_token
//"SBLAUTH": access_token