const $userContainer = $(".userContainer");
const $cardContainer = $(".cardContainer");
const $singlePostContainer = $(".single-post-container");
const $singleAuthorContainer = $(".singleAuthorContainer");
const $relatedLinksDiv = $(".relatedLinksDiv");
const $commentDiv = $(".comment-div-container");
const $userLinkDiv = $(".userLink")


const displayPosts = (postList) => {
    postList.forEach(post => {
        $cardContainer.append(createPostCard(post))
    })
}

const createPostCard = (post) => {
    return $(`
        <a data-id="${post.id}" data-userId="${post.userId}" href="singlePostPage.html" class="post-id-div">
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        </a>
    `)
}

const displayUsers = (userList) => {
    userList.forEach(user => {
        const card = createUserCard(user)
        $userContainer.append(card);
    })
}

const createUserCard = (user) => {
    return $(`
        <a data-user-id=${user.id} class="user-link" href="singleAuthorPage.html"> 
            <div class="div-display-user">
                <p>${user.name}</p>
            </div>
        </a>
    `)
}

const displaySinglePost = (post, user) => {
    $singlePostContainer.append(createSinglePost(post));
    $singlePostContainer.append(createUserLink(user))
}

const createSinglePost = (post, user) => {
    return $(`
            <h1 class="singlePostTitle">${post.title}</h1>
            <p class="singlePostBody">${post.body}</p> 
        `)
}

const displayUserLink = (userLink) => {
    $userLinkDiv.append(createUserLink(userLink))
}

const createUserLink = (user) => {
    return $(`
        <a data-user-id=${user.id} id="userLink" href="singleAuthorPage.html">${user.name}</a>
    `)
}

const displayRelatedLinks = (relatedLinks) => {
    relatedLinks.forEach(post => {
        $relatedLinksDiv.append(createRelatedLinks(post))
    })
}

const createRelatedLinks = (post) => {
    return $(`
        <a data-id="${post.id}" data-userId=${post.userId} href="singlePostPage.html" class="relatedLinks">
        - ${post.title}
        </a>
    `)
}

const displayUserInfo = (user) => {
    $singleAuthorContainer.append(createUserInfo(user))
}

const createUserInfo = (user) => {
    return (`
        <div class="userInfo">
            <h2 class="">${user.name}</h2>
            <p class="userInfoParagraph"><b>Username:</b> ${user.username}</p>
            <p class="userInfoParagraph"><b>Email:</b> ${user.email}</p>
            <p class="userInfoParagraph"><b>Phone:</b> ${user.phone}</p>
        </div>   
        <div class="userInfo">
            <h2>Address</h2>
            <p class="userInfoParagraph"><b>Street:</b> ${user.address.street}</p>
            <p class="userInfoParagraph"><b>City:</b> ${user.address.city}</p>
        </div> 
        <div class="userInfo">
            <h2>Company</h2>
            <p class="userInfoParagraph"><b>Name:</b> ${user.company.name}</p>
            <p class="userInfoParagraph"><b>Slogan:</b> ${user.company.catchPhrase}</p>
        </div> 
    `)
}

const displayCommentCard = (commentList) => {
    commentList.forEach(comment => {
        $commentDiv.append(createCommentCard(comment))
    })
}

const createCommentCard = (comment) => {
    return (`
        <ul class="comment-list">
            <li class="comment-content">
                <img src="https://t4.ftcdn.net/jpg/01/16/06/45/240_F_116064582_KlXENacGmdt4xl8H6fQRYfSZLntLNKSX.jpg" class="comment-user-picture"/>
                <span>${comment.email}</span>
                <p>${comment.body}</p>
            </li>
        </ul>
    `)
}

const hideLoading = () => {
    // $(".spiner").fadeOut('fast');
    $(".spinner").hide();
}

export {
    displayPosts,
    displayUsers,
    createPostCard,
    createUserCard,
    displaySinglePost,
    displayRelatedLinks,
    displayUserInfo,
    displayUserLink,
    displayCommentCard,
    hideLoading
}