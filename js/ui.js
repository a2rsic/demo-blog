const $authorsContainer = $(".authors-container");
const $cardContainer = $(".posts-card-container");
const $singlePostContainer = $(".single-post-container");
const $singleAuthorContainer = $(".single-author-container");
const $relatedLinksContainer = $(".related-links-container");
const $commentList = $(".comment-list");


// Home / Posts Page

const displayPosts = (postList) => {
    postList.forEach(post => {
        const $postsListHtml = createPostCard(post)
        $cardContainer.append($postsListHtml)
    })
}

const createPostCard = (post) => {
    return $(`
        <a data-id="${post.id}" data-userId="${post.userId}" class="post-link">
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        </a>
    `)
}


// Single Post Page

const displaySinglePost = (post) => {
    $('.post-container-section').removeClass('hidden');

    const $singlePostHtml = createSinglePost(post)
    $singlePostContainer.append($singlePostHtml);
}

const createSinglePost = (post) => {
    return $(`
            <h1 class="single-post-title">${post.title}</h1>
            <div class="author-link" ></div>
            <p class="single-post-body">${post.body}</p> 
        `)
}

const displayUserLink = (userLink) => {
    const $authorLinkHtml = createUserLink(userLink)
    $(".author-link").append($authorLinkHtml)
}

const createUserLink = (user) => {
    return $(`
        <a data-user-id=${user.id} id="author-link">${user.name}</a>
    `)
}

const displayRelatedLinks = (relatedLinks) => {

    relatedLinks.forEach(post => {
        $('.related-links-section').removeClass('hidden');
        const $relatedLinksHtml = createRelatedLinks(post)
        $relatedLinksContainer.append($relatedLinksHtml)
    })
}

const createRelatedLinks = (post) => {
    return $(`
        <a data-id="${post.id}" data-userId=${post.userId} class="related-posts">
        - ${post.title}
        </a>
    `)
}

const displayCommentCard = (commentList) => {
    $(".comments-container-section").removeClass("hidden");
    commentList.forEach(comment => {
        const $commentHtml = createCommentCard(comment)
        $commentList.append($commentHtml);
    })
}

const createCommentCard = (comment) => {
    return (`
            <li class="comment-content">
                <img src="./images/user_image.jpg" class="comment-user-picture"/>
                <span>${comment.email}</span>
                <p>${comment.body}</p>
            </li>
    `)
}


// Authors Page

const displayUsers = (userList) => {
    $(".authors-container").removeClass("hidden");
    userList.forEach(user => {
        const $userCard = createAuthorCard(user)
        $authorsContainer.append($userCard);
    })
}

const createAuthorCard = (user) => {
    return $(`
        <a data-user-id=${user.id} class="author-link-list"> 
            <div class="author-card-container">
                <p>${user.name}</p>
            </div>
        </a>
    `)
}

// Single Author Page

const displayUserInfo = (user) => {
    $(".single-author-container").removeClass("hidden");

    const $userInfoHtml = createUserInfo(user)
    $singleAuthorContainer.append($userInfoHtml)
}

const createUserInfo = (user) => {
    return (`
        <div class="single-author-info">
            <h2>${user.name}</h2>
            <p class="single-author-paragraph"><b>Username:</b> ${user.username}</p>
            <p class="single-author-paragraph"><b>Email:</b> ${user.email}</p>
            <p class="single-author-paragraph"><b>Phone:</b> ${user.phone}</p>
        </div>   
        <div class="single-author-info">
            <h2>Address</h2>
            <p class="single-author-paragraph"><b>Street:</b> ${user.address.street}</p>
            <p class="single-author-paragraph"><b>City:</b> ${user.address.city}</p>
        </div> 
        <div class="single-author-info">
            <h2>Company</h2>
            <p class="single-author-paragraph"><b>Name:</b> ${user.company.name}</p>
            <p class="single-author-paragraph"><b>Slogan:</b> ${user.company.catchPhrase}</p>
        </div> 
    `)
}


const hideLoading = () => {
    $(".spinner").hide();
}



export {
    displayPosts,
    displayUsers,
    displaySinglePost,
    displayRelatedLinks,
    displayUserInfo,
    displayUserLink,
    displayCommentCard,
    hideLoading,
}