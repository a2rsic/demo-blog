const $userContainer = $(".userContainer");
const $cardContainer = $(".cardContainer");
const $singlePostContainer = $(".single-post-container");
const $singleAuthorContainer = $(".singleAuthorContainer");
const $relatedLinksContainer = $(".related-links-container");
const $commentList = $(".comment-list");


// Home / Post Page

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


// Single Post Page

const displaySinglePost = (post) => {
    $('.post-container-section').removeClass('hidden');

    const singlePostHtml = createSinglePost(post)
    $singlePostContainer.append(singlePostHtml);
}

const createSinglePost = (post) => {
    return $(`
            <h1 class="single-post-title">${post.title}</h1>
            <div class="author-link"></div>
            <p class="single-post-body">${post.body}</p> 
        `)
}

const displayUserLink = (userLink) => {
    console.log(userLink);
    const authorLinkHtml = createUserLink(userLink)
    $(".author-link").append(authorLinkHtml)
}

const createUserLink = (user) => {
    return $(`
        <a data-user-id='${user.id}' id="userLink" href="./singleAuthorPage.html">${user.name}</a>
    `)
}

const displayRelatedLinks = (relatedLinks) => {
    $('.related-links-section').removeClass('hidden');

    relatedLinks.forEach(post => {
        const relatedLinksHtml = createRelatedLinks(post)
        $relatedLinksContainer.append(relatedLinksHtml)
    })
}

const createRelatedLinks = (post) => {
    return $(`
        <a data-id="${post.id}" data-userId=${post.userId} href="" class="relatedLinks">
        - ${post.title}
        </a>
    `)
}

const displayCommentCard = (commentList) => {
    $(".comments-container-section").removeClass("hidden");
    commentList.forEach(comment => {
        const commentHtml = createCommentCard(comment)
        $commentList.append(commentHtml);
    })
}

const createCommentCard = (comment) => {
    return (`
            <li class="comment-content">
                <img src="https://t4.ftcdn.net/jpg/01/16/06/45/240_F_116064582_KlXENacGmdt4xl8H6fQRYfSZLntLNKSX.jpg" class="comment-user-picture"/>
                <span>${comment.email}</span>
                <p>${comment.body}</p>
            </li>
    `)
}


// Authors Page

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

// Single Author Page

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


const hideLoading = () => {
    $(".spinner").hide();
}

const showContentonLoad = () => {
    $(function () {
        $('#root').removeClass('hidden');
    })
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
    hideLoading,
    showContentonLoad,
}