import { BASE_URL } from "./constants.js";

class API {
    get(path) {
        const requestUrl = BASE_URL + path;
        return fetch(requestUrl)
            .then(response => response.json())
    }

    post() {

    }
}

export const api = new API()

