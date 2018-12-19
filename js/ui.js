const $userContainer = $(".userContainer");
const $cardContainer = $(".cardContainer")

const displayPosts = (postList) => {
    for(let i = 0; i < postList.length; i++){
        const $divCard = $("<div>")
        const $title = $("<h3>")
        const $p = $("<p>");

        const postTitle = postList[i].title;
        const body = postList[i].body;

        $p.text(body);
        $title.text(postTitle);

        $divCard.append($title);
        $divCard.append($p);
        $cardContainer.append($divCard)
    }
}

const displayUsers = (userList) => {
    for(let i = 0; i < userList.length; i++ ){
        const $divCardUser = $("<div>");
        const $p = $("<p>");
        $p.attr("class", "userName")

        const userName = userList[i].name;

        $p.text(userName);
        $divCardUser.append($p);
        $userContainer.append($divCardUser);
    }

}

export {
    displayPosts,
    displayUsers
}