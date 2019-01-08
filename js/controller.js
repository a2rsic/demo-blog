import * as data from "./data.js";
import * as ui from "./ui.js";



const init = () => {
    console.log("ready")

    // $('#navbar-img').on('click', function () {

    //     $('#js-menu').classList.toggle(

    //         function(){$("#navbar-img").css({"color": "red"});},

    //     );
    // })


    data.fetchPosts()
        .then(postList => {
            ui.hideLoading();
            ui.displayPosts(postList)
            $(".post-id-div").on('click', onPostClickHandler)
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
    // ui.showLoading()

    // read LC id value 

    const postId = data.getPostId();
    data.fetchPost(postId)
        .then(post => {
            ui.hideLoading();
            ui.displaySinglePost(post);


            data.fetchUser(post.userId)
                .then(userLink => {
                    console.log("my response", userLink);
                    ui.displayUserLink(userLink)
                });
        });

    const userId = data.getUserId();

    data.fetchRelatedLinks(userId)
        .then(relatedLinks => {

            console.log("related Links", relatedLinks);
            ui.hideLoading();
            ui.displayRelatedLinks(relatedLinks);

            $(".relatedLinks").on("click", event => {
                console.log("event", event);
                const { currentTarget } = event;

                // const postId = event.currentTarget.attributes[0].value;
                const postId = $(currentTarget).attr('data-id');

                data.savePostId(postId)
            })
        });

    data.fetchComments(postId)
        .then(commentList => {
            // console.log("my comments", comment);
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