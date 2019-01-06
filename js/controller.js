import * as data from "./data.js";
import * as ui from "./ui.js";



const init = () => {
    console.log("ready")


    data.fetchPosts()
        .then(postList => {
            ui.displayPosts(postList)
            ui.hideLoading();
            $(".post-id-div").on('click', (event) => {
                const { currentTarget } = event;
                // console.log(event);
                const postId = $(currentTarget).attr("data-id");
                data.savePostId(postId);

                const userId = $(currentTarget).attr("data-userId");
                data.saveUserId(userId);

                const user_id = $(currentTarget).attr("data-user-id");
                data.setUserId(user_id);

            })
        })
}

const onClickHandler = () => {

}

const initAuthorsPage = () => {
    console.log("ready")


    data.fetchUsers()
        .then(userList => {
            ui.displayUsers(userList);
            ui.hideLoading()

            $(".user-link").on("click", (event) => {
                const { currentTarget } = event;

                const user_id = $(currentTarget).attr("data-user-id");
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
            ui.hideLoading()
        });

    const userId = data.getUserId();

    data.fetchRelatedLinks(userId)
        .then(relatedLinks => {

            console.log("related Links", relatedLinks);
            ui.displayRelatedLinks(relatedLinks);
            ui.hideLoading();

            $(".relatedLinks").on("click", event => {
                const { currentTarget } = event;

                // const postId = event.currentTarget.attributes[0].value;
                const postId = $(currentTarget).attr('data-id');

                data.savePostId(postId)
            })
        });

    const user_id = data.catchUserId()

    data.fetchUser(user_id)
        .then(userLink => {
            console.log("my response", userLink);
            ui.displayUserLink(userLink)
            ui.hideLoading()
        });

    data.fetchComments(postId)
        .then(commentList => {
            // console.log("my comments", comment);
            ui.displayCommentCard(commentList)
            ui.hideLoading()
        });
}

const initSingleAuthorPage = () => {
    console.log("ready AuthorPage");

    const user_id = data.catchUserId()
    data.fetchUser(user_id)
        .then(user => {
            ui.displayUserInfo(user)
            ui.hideLoading()
        })
}




export {
    init,
    initAuthorsPage,
    initSinglePostPage,
    initSingleAuthorPage
}