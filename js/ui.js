const $mainContainer = $(".mainContainer");
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

export {
    displayPosts,
}