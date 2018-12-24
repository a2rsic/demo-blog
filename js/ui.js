const $userContainer = $(".userContainer");
const $cardContainer = $(".cardContainer");
const $singlePostContainer = $(".single-post-container");


const displayPosts = (postList) => {
    postList.forEach(post => {
        // hideLoading()
        $cardContainer.append(createPostCard(post))
    })
}
// for(let i = 0; i < postList.length; i++){
//     const $divCard = $("<div>")
//     const $title = $("<h3>")
//     const $p = $("<p>");

//     const postTitle = postList[i].title;
//     const body = postList[i].body;

//     $p.text(body);
//     $title.text(postTitle);

//     $divCard.append($title);
//     $divCard.append($p);
//     $cardContainer.append($divCard)
// }

const createPostCard = (post) => {
    return $(`
        <a data-id="${post.id}" class="post-id-div" href="./singlePostPage.html">
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        <a>
    `)
}

const displayUsers = (userList) => {
    userList.forEach(user => {
        const card = createUserCard(user)
        $userContainer.append(card);
    })
}
// for (let i = 0; i < userList.length; i++) {
//     const $divCardUser = $("<div>");
//     const $p = $("<p>");
//     $p.attr("class", "userName")

//     const userName = userList[i].name;

//     $p.text(userName);
//     $divCardUser.append($p);
//     $userContainer.append($divCardUser);
// }

const createUserCard = (user) => {
    return $(`
        <a class="user-link" href=""> 
            <div class="div-display-user">
                <p>${user.name}</p>
            </div>
        </a>
    `)
}

const displaySinglePost = (post) => {
    post.forEach(post => {
        // const singlePost = createSinglePost(post);
        $singlePostContainer.append(createSinglePost(post));

    })

    // const $divSinglePost = $(`<div></div>`)
    // const $postTitle = $(`<h2>${post.title}</h2>`);
    // const $postBody = $(`<p>${post.body}</p>`);

    // $divSinglePost.append($postTitle);
    // $divSinglePost.append($postBody);
    // $singlePostContainer.append($divSinglePost)
    // $singlePostContainer.append($postBody);
}

const createSinglePost = (post) => {
    return $(`
    <div>
     <h3>${post.title}</h3>
     <p>${post.body}</p>
    </div>
    `)
}

const loadContent = () => {
    const $loading = $(`<h3>loading...</h3>`)
    $('.cardContainer').append($loading)
}

const showLoading = () => {
    loadContent()
}

const hideLoading = () => {
    const $loading = $(`<h3>loading...</h3>`)
    $(".cardContainer").hide($loading)

}


export {
    displayPosts,
    displayUsers,
    createPostCard,
    createUserCard,
    showLoading,
    hideLoading,
    displaySinglePost
}