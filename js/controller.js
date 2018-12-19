import * as data from "./data.js";
import * as ui from "./ui.js";

const init = () => {
    console.log("ready")

    data.fetchPosts()
        .then(postList => {
            ui.displayPosts(postList)
        })
}

export {
    init,
}