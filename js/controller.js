import * as data from "./data.js";
import * as ui from "./ui.js";



const init = () => {
    console.log("ready")
    // ui.showLoading()
    // ui.loadContent()


    data.fetchPosts()
        .then(postList => {
            ui.displayPosts(postList)
            // ui.hideLoading()
            $(".post-id-div").on('click', (event) => {
                console.log(event);
                const postId = event.currentTarget.attributes[0].value;
                data.savePostId(postId);

                const userId = event.currentTarget.attributes[1].value;
                data.saveUserId(userId);

                const user_id = event.currentTarget.attributes[1].value;
                data.setUserId(user_id);
                
            })
        })
}

const initAuthorsPage = () => {
    console.log("ready")

    data.fetchUsers()
        .then(userList => {
            ui.displayUsers(userList);

            $(".user-link").on("click", (event) => {
                const user_id = event.currentTarget.attributes[0].value;
                data.setUserId(user_id)

                console.log("myEvent", event);
            })
        })
}

const initSinglePostPage = () => {
    console.log("ready postPage");

    // read LC id value 

    const postId = data.getPostId();
    data.fetchPost(postId)
        .then(post => {
            ui.displaySinglePost(post)
        });

    const userId = data.getUserId();

    data.fetchRelatedLinks(userId)
        .then(relatedLinks => {
            ui.displayRelatedLinks(relatedLinks)
        });

        const user_id = data.getUserId()

    data.fetchUser(user_id)
        .then(userLink => {
                // console.log("my response", userLink);
                ui.displayUserLink(userLink)
            });



    data.fetchComments(postId)
        .then(commentList => {
            // console.log("my comments", comment);
            ui.displayCommentCard(commentList)
        })
}

const initSingleAuthorPage = () => {
    console.log("ready AuthorPage");

    const user_id = data.catchUserId()
    data.fetchUser(user_id)
        .then(user => {
            ui.displayUserInfo(user)
        })
}




export {
    init,
    initAuthorsPage,
    initSinglePostPage,
    initSingleAuthorPage
}