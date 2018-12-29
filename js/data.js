import Post from "./entities/Post.js";
import User from "./entities/User.js";

const fetchPosts = () => {
    const urlPosts = "https://jsonplaceholder.typicode.com/posts";

    return fetch(urlPosts)
        .then(response => response.json())
        .then(listOfPosts => {
            console.log(listOfPosts);

            const slicePostList = listOfPosts.slice(0, 50);
            console.log(slicePostList);

            const postList = slicePostList.map(post => {
                return new Post(post.id, post.body, post.title, post.userId)
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
                return new User(user.id, user.name, user.username, user.email, user.phone)
            })
            // for (let i = 0; i < listOfUsers.length; i++) {

            //     const { id, name } = listOfUsers[i];

            //     userList.push(new User(id, name))
            // }

            return userList;
        })
}

const fetchUser = (id) => {
    const urlUser = "https://jsonplaceholder.typicode.com/users/" + `${id}`;

    return fetch(urlUser)
        .then(response => response.json())
        .then(response => {
           return response;
        })
}

const setUserId = (id) => {
    localStorage.setItem("user-id", id)
}

const catchUserId = () => {
    const user_id = localStorage.getItem("user-id");

    return user_id;
}

const savePostId = (postId) => {
    localStorage.setItem("postId", postId)
}

const getPostId = () => {
    const postId = localStorage.getItem("postId");

    return postId;
}
const fetchPost = (id) => {
    const urlPost = "https://jsonplaceholder.typicode.com/posts/" + `${id}`;

    return fetch(urlPost)
        .then(response => response.json())
        .then(response => {
            return response
        })
}

const saveUserId = (userId) => {
    localStorage.setItem("userId", userId)
}

const getUserId = () => {
    const userId = localStorage.getItem("userId");
    return userId;
}

const fetchRelatedLinks = (userId) => {
    const urlUserId = "https://jsonplaceholder.typicode.com/posts?userId=" + `${userId}`;

    return fetch(urlUserId)
        .then(response => response.json())
        .then(userArray => {
           const relatedLinks = userArray.map( post => {
               return new Post(post.id, post.body, post.title, post.userId)
           })
           return relatedLinks;
        })

    }
    // const checkUserId = () => {
    //     const userIdValue = getUserId();
        
    //     if()
    // }



export {
    fetchPosts,
    fetchUsers,
    fetchPost,
    savePostId,
    getPostId,
    fetchRelatedLinks,
    saveUserId,
    getUserId,
    fetchUser,
    setUserId,
    catchUserId
}