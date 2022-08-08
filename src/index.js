const BASE_URL = 'http://localhost:3000';

// function fetchPosts (){
//  return   fetch(`${BASE_URL}/posts/`).then(r => r.json())
// }

// function fetchPostById(postId){
//     return   fetch(`${BASE_URL}/posts/${postId}`).then(r => r.json())

// }

// fetchPostById(1)

const newPost = {
    "title": "test 22",
    "author": "Serhii dev",
}

function addPost (post){
const options = {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
        'Content-Type': 'application/json',
    },
};

return fetch(`${BASE_URL}/posts/`, options).then(r => r.json())

}

addPost(newPost).then(console.log).catch(console.log)

// function updatePostById(update, postId) {
//     const options = {
//     method: 'PATCH',
//     body: JSON.stringify(update),
//     headers: {
//         'Content-Type': 'application/json',
//     },
// };

// return fetch(`${BASE_URL}/posts/${postId}`, options).then(r => r.json())
// }

// updatePostById({ "title": "new test"},2)

// function removePostBtId(postId) {
//      const options = {
//     method: 'DELETE',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// };

// return fetch(`${BASE_URL}/posts/${postId}`, options).then(r => r.json()) 
// }

// removePostBtId(2).then(console.log).catch(console.log)
