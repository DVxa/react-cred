/**
 * Created by Kaiser on 26.10.2016.
 */

export class AuthUtils {

    static isTokenExist() {
        return Boolean(localStorage.getItem('auth-token'));
    }

    static getToken() {
        return String(localStorage.getItem('auth-token'));
    }

    static getUid() {
        return localStorage.getItem('uid');
    }
}
