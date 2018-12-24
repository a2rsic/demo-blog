import Post from "../entities/Post.js";
import User from "../entities/User.js";

const fetchPosts = () => {
    const urlPosts = "https://jsonplaceholder.typicode.com/posts";

    return fetch(urlPosts)
        .then(response => response.json())
        .then(listOfPosts => {
            console.log(listOfPosts);

            const slicePostList = listOfPosts.slice(0, 50);
            console.log(slicePostList);

            const postList = slicePostList.map(post => {
                return new Post(post.id, post.body, post.title)
            })
            // for (let i = 0; i < slicePostList.length; i++) {

            //     const { id, body, title } = slicePostList[i];

            //     postList.push(new Post(id, body, title))
            // }
            return postList;
        })
}

const fetchUsers = () => {
    const urlUsers = "https://jsonplaceholder.typicode.com/users";

    return fetch(urlUsers)
        .then(response => response.json())
        .then(listOfUsers => {
            console.log(listOfUsers);

            const userList = listOfUsers.map(user => {
                return new User(user.id, user.name)
            })
            // for (let i = 0; i < listOfUsers.length; i++) {

            //     const { id, name } = listOfUsers[i];

            //     userList.push(new User(id, name))
            // }

            return userList;
        })
}

const savePostId = (postId) => {
    // console.log(event);
    // const postId = event.target.dataset.id;
    localStorage.setItem("id", postId)
}

const getPostId = () => {
    const postId = localStorage.getItem("id");

    return postId;
}
const fetchPost = (id) => {
    const urlPost = "https://jsonplaceholder.typicode.com/posts/" + `${id}`;

    return fetch(urlPost)
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
}

export {
    fetchPosts,
    fetchUsers,
    fetchPost,
    savePostId,
    getPostId
}