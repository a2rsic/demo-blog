import * as data from "./data.js";
import * as ui from "./ui.js";



const init = () => {
    console.log("ready")

    $('#navbar-img').on('click', () => {

        $(".navbar-container").classList.toggle("active");
    })


    data.fetchPosts()
        .then(postList => {
            ui.hideLoading();
            ui.displayPosts(postList)
            $(".post-id-div").on('click', onPostClickHandler);
        })
}

const onPostClickHandler = (event) => {
    const { currentTarget } = event;
    // console.log(event);
    const postId = $(currentTarget).attr("data-id");
    data.savePostId(postId);

    const userId = $(currentTarget).attr("data-userId");
    data.saveUserId(userId);

    const user_id = $(currentTarget).attr("data-user-id");
    data.setUserId(user_id);

    window.location = "./singlePostPage.html"

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

                window.location = "./singleAuthorPage.html"
            })
        })
}

const initSinglePostPage = () => {
    console.log("ready postPage");
    // ui.showLoading()

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

                    $("#userLink").on("click", event => {
                        console.log("user event", event);
                        const { target } = event;

                        const authorId = $(target).attr("data-user-id")
                        data.setUserId(authorId);
                        window.location.href = "./singleAuthorPage.html"
                    })
                });
        });

    const userId = data.getUserId();

    data.fetchRelatedLinks(userId)
        .then(relatedLinks => {

            // console.log("related Links", relatedLinks);
            ui.hideLoading();
            ui.displayRelatedLinks(relatedLinks);

            $(".relatedLinks").on("click", event => {
                console.log("event", event);
                const { currentTarget } = event;

                // const postId = event.currentTarget.attributes[0].value;
                const postId = $(currentTarget).attr('data-id');

                data.savePostId(postId);

                window.location = "./singlePostPage.html"
            })
        });

    data.fetchComments(postId)
        .then(commentList => {
            ui.displayCommentCard(commentList)
            ui.hideLoading()
            ui.showContentonLoad()
        });
}

const initSingleAuthorPage = () => {
    console.log("ready AuthorPage");

    const user_id = data.catchUserId()
    data.fetchUser(user_id)
        .then(user => {
            // console.log("user info", user);
            ui.hideLoading()
            ui.displayUserInfo(user)
        })
}




export {
    init,
    initAuthorsPage,
    initSinglePostPage,
    initSingleAuthorPage
}