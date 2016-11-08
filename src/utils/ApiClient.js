/**
 * Created by V.Minyailov-book on 08.11.2016.
 */

import React from 'react';
import { AuthUtils } from './AuthUtils'

export class ApiClient {

    uid          = AuthUtils.getUid();
    access_token = AuthUtils.getToken();

    static get(url) {
        return (
            fetch (
                url,
                {
                    method: 'GET',
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
}