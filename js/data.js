import Post from "./entities/Post.js";
import User from "./entities/User.js";
import Comment from "./entities/Comment.js";
import { api } from "./shared/API.js";
import { save, load } from "./shared/storage.js";


const fetchPosts = () => {
    const postsPath = "/posts";
    return api.get(postsPath)
        .then(listOfPosts => {
            console.log("proba", listOfPosts);

            const postList = listOfPosts.map(post => {
                return new Post(post.id, post.body, post.title, post.userId, post.photo)
            })
            return postList;
        })
}



const fetchUsers = () => {
    const usersPath = "/users";
    return api(usersPath)
        .then(listOfUsers => {
            // console.log("user list", listOfUsers);

            const userList = listOfUsers.map(user => {
                return new User(user.id, user.name, user.username, user.email, user.phone)
            })
            return userList;
        })
}

const fetchUser = (id) => {
    const userPath = `/users/${id}`;

    return api.get(userPath)
        .then(response => {
            // console.log(" my user response", response);
            const { id, name, username, email, phone, address, company } = response;
            return new User(id, name, username, email, phone, address, company)
        })

}

const KEYS = {
    USER_ID: "user-id",
    POST_ID: "post-id",
}

const savePostId = (postId) => {
    save(KEYS.POST_ID, postId)
}

const getPostId = () => {
    return load(KEYS.POST_ID)

}
const fetchPost = (id) => {
    const postPath = `/posts/${id}`;

    return api.get(postPath)
        .then(post => {
            console.log("my postssss", post);
            return post;
        })
}

const saveUserId = (userId) => {
    save(KEYS.USER_ID, userId)
}

const getUserId = () => {
    return load(KEYS.USER_ID)
}

const fetchRelatedLinks = (userId) => {
    const userIdPath = `/posts?userId=${userId}`;

    return api.get(userIdPath)
        .then(postsArray => {
            const relatedPostId = getPostId();
            const relatedPosts = postsArray
                .filter(user => {
                    return user.id != relatedPostId
                })
                .map(post => {
                    return new Post(post.id, post.body, post.title, post.userId);
                })
            return relatedPosts;
        })

}

const fetchComments = (postId) => {
    const commentsPath = `/comments?postId=${postId}`;

    return api.get(commentsPath)
        .then(commentsArray => {
            const comment = commentsArray.map(comment => {
                const { postId, name, body, email } = comment;
                return new Comment(postId, name, body, email);
            })
            return comment;
        })
}




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
    fetchComments
}