import * as data from "./data.js";
import * as ui from "./ui.js";

const init = () => {
    console.log("ready")

    data.fetchPosts()
        .then(postList => {
            ui.displayPosts(postList)
        })
}

const initAuthorsPage = () => {
    console.log("ready")

    data.fetchUsers()
        .then(userList => {
            ui.displayUsers(userList)
        })
}

export {
    init,
    initAuthorsPage
}