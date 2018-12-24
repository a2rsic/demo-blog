import * as data from "./data.js";
import * as ui from "./ui.js";



const init = () => {
    console.log("ready")
    ui.showLoading()
    // ui.loadContent()


    data.fetchPosts()
        .then(postList => {
            ui.displayPosts(postList)
            // ui.hideLoading()
            $(".post-id-div").on('click', (event) => {
                console.log(event);
                const postId = event.currentTarget.attributes[0].value;
                data.savePostId(postId);

                // window.location = "singlePostPage.html"
                // console.log(postId);
                
            })
        })
}

const initAuthorsPage = () => {
    console.log("ready")

    data.fetchUsers()
        .then(userList => {
            ui.displayUsers(userList)
        })
}

const initSinglePostPage = () => {
    console.log("ready");

    // read LC id value 

    const postId = data.getPostId();
    data.fetchPost(postId, post => {
        ui.displaySinglePost(post)
       
    })

}


export {
    init,
    initAuthorsPage,
    initSinglePostPage
}