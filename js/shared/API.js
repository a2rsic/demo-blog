import { BASE_URL } from "./constants.js";

class API {
    get(path) {
        const requestUrl = BASE_URL + path;
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "B1tD3V",
            }
        }
        return fetch(requestUrl, requestOptions)
            .then(response => {
                return response.json()
            })
    }

    post() {

    }
}

export const api = new API()

