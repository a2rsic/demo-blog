import Post from "./entities/Post.js";
import User from "./entities/User.js";
import Comment from "./entities/Comment.js";

const fetchPosts = () => {
    const urlPosts = "https://jsonplaceholder.typicode.com/posts";

    return fetch(urlPosts)
        .then(response => response.json())
        .then(listOfPosts => {
            console.log(listOfPosts);

            const postList = listOfPosts.map(post => {
                return new Post(post.id, post.body, post.title, post.userId)
            })
            return postList;
        })
}

const fetchUsers = () => {
    const urlUsers = "https://jsonplaceholder.typicode.com/users";

    return fetch(urlUsers)
        .then(response => response.json())
        .then(listOfUsers => {
            console.log("user list", listOfUsers);

            const userList = listOfUsers.map(user => {
                return new User(user.id, user.name, user.username, user.email, user.phone)
            })
            return userList;
        })
}

const fetchUser = (id) => {
    const urlUser = "https://jsonplaceholder.typicode.com/users/" + `${id}`;

    return fetch(urlUser)
        .then(response => response.json())
        .then(response => {
            const { id, name, username, email, phone, address, company } = response;
            return new User(id, name, username, email, phone, address, company)
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
            const relatedLinks = userArray.map(post => {
                return new Post(post.id, post.body, post.title, post.userId);
            });
            const relatedPostId = getPostId()
            return relatedLinks.filter(post => post.id !== relatedPostId)
        })

}

const fetchComments = (postId) => {
    const urlComments = "https://jsonplaceholder.typicode.com/comments?postId=" + `${postId}`;

    return fetch(urlComments)
        .then(response => response.json())
        .then(commentsArray => {
            const comment = commentsArray.map(comment => {
                const { postId, name, body, email } = comment;
                return new Comment(postId, name, body, email);
            })
            return comment;
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
    catchUserId,
    fetchComments
}