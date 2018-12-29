const $userContainer = $(".userContainer");
const $cardContainer = $(".cardContainer");
const $singlePostContainer = $(".single-post-container");
const $singleAuthorContainer = $(".singleAuthorContainer");
const $relatedLinksDiv = $(".relatedLinksDiv");


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
        <a data-id="${post.id}" data-userId=${post.userId} class="post-id-div" href="singlePostPage.html" >
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
        <a data-user-id=${user.id} class="user-link" href="singleAuthorPage.html"> 
            <div class="div-display-user">
                <p>${user.name}</p>
            </div>
        </a>
    `)
}

const displaySinglePost = (post) => {

    $singlePostContainer.append(createSinglePost(post));



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
    <div class="singlePostDiv">
     <h1 class="singlePostTitle">${post.title}</h1>
     <p class="singlePostBody">${post.body}</p> 
    </div>
    `)
}

const displayUserLink = (user) => {
    $singlePostContainer.append(createUserLink(user))
}

const createUserLink = (user) => {
    return $(`
    <a href="singleAuthorPage">${user.name}</a>
    `)
}

const displayRelatedLinks = (relatedLinks) => {
    relatedLinks.forEach(post => {

        $relatedLinksDiv.append(createRelatedLinks(post))
    })
}

const createRelatedLinks = (post) => {
    return $(`
    <a  class="relatedLinks" href="singlePostPage.html">${post.title}</a>
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

// const loadContent = () => {
//     const $loading = $(`<h3>loading...</h3>`)
//     $('.cardContainer').append($loading)
// }

// const showLoading = () => {
//     loadContent()
// }

// const hideLoading = () => {
//     const $loading = $(`<h3>loading...</h3>`)
//     $(".cardContainer").hide($loading)

// }


export {
    displayPosts,
    displayUsers,
    createPostCard,
    createUserCard,
    // showLoading,
    // hideLoading,
    displaySinglePost,
    displayRelatedLinks,
    displayUserInfo,
    displayUserLink
}