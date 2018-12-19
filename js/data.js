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

            const postList = [];
            for (let i = 0; i < slicePostList.length; i++) {

                const { id, body, title } = slicePostList[i];

                postList.push(new Post(id, body, title))
            }
            return postList;
        })
}

const fetchUsers = () => {
    const urlUsers = "https://jsonplaceholder.typicode.com/users";

    return fetch(urlUsers)
        .then(response => response.json())
        .then(listOfUsers => {
            console.log(listOfUsers);

            const userList = [];
            for (let i = 0; i < listOfUsers.length; i++) {

                const { id, name } = listOfUsers[i];

                userList.push(new User(id, name))
            }

            return userList;
        })
}

export {
    fetchPosts,
    fetchUsers
}