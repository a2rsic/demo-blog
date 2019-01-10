import * as data from "./data.js";
import * as ui from "./ui.js";



const initHomePage = () => {
    console.log("ready");

    data.fetchPosts()
        .then(postList => {
            ui.hideLoading();
            ui.displayPosts(postList)
            $(".post-link").on('click', onPostClickHandler);
        })
}

const onPostClickHandler = (event) => {
    const { currentTarget } = event;
    // console.log(event);
    const postId = $(currentTarget).attr("data-id");
    data.savePostId(postId);

    const userId = $(currentTarget).attr("data-userId");
    data.saveUserId(userId);

    window.location.href = "./singlePostPage.html"

}

const initAuthorsPage = () => {
    console.log("ready")


    data.fetchUsers()
        .then(userList => {
            ui.hideLoading();
            ui.displayUsers(userList);

            $(".author-link-list").on("click", (event) => {
                const { currentTarget } = event;

                const userId = $(currentTarget).attr("data-user-id");
                data.saveUserId(userId)

                // console.log("myEvent", event);

                window.location.href = "./singleAuthorPage.html"
            }
            )
        })
}

const onUserClickHandler = (event) => {
    // console.log("user event", event);
    const { target } = event;

    const authorId = $(target).attr("data-user-id")
    data.saveUserId(authorId);
    window.location.href = "./singleAuthorPage.html"
}

const initSinglePostPage = () => {
    console.log("ready postPage");

    // read LC id value 

    const postId = data.getPostId();
    data.fetchPost(postId)
        .then(post => {
            ui.hideLoading();
            ui.displaySinglePost(post);


            data.fetchUser(post.userId)
                .then(userLink => {
                    // console.log("my response", userLink);
                    ui.displayUserLink(userLink);

                    $("#user-link").on("click", onUserClickHandler)
                });
        });

    const userId = data.getUserId();

    data.fetchRelatedLinks(userId)
        .then(relatedLinks => {

            // console.log("related Links", relatedLinks);
            ui.hideLoading();
            ui.displayRelatedLinks(relatedLinks);

            $(".related-posts").on("click", onPostClickHandler)
        });

    data.fetchComments(postId)
        .then(commentList => {
            ui.hideLoading()
            ui.displayCommentCard(commentList)
        });
}

const initSingleAuthorPage = () => {
    console.log("ready AuthorPage");

    const authorId = data.getUserId()
    data.fetchUser(authorId)
        .then(user => {
            // console.log("user info", user);
            ui.hideLoading()
            ui.displayUserInfo(user)
        })
}




export {
    initHomePage,
    initAuthorsPage,
    initSinglePostPage,
    initSingleAuthorPage
}