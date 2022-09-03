const paginationEl = document.querySelector('.pagination');

let currentPage = 1;
let lastPage = 200;

renderPagination(createArr(currentPage, lastPage), currentPage);
paginationEl.addEventListener('click', onPaginationClick);

function createArr(start, end) {
  const res = [];

  for (let i = start - 2; i <= start + 2; i += 1) {
    if (i >= 1 && i <= end) {
      res.push(i);
    }
  }

  if (res[0] === 3) res.unshift(2);
  if (res[0] === 2) res.unshift(1);
  if (res[0] > 3) res.unshift(1, 0);

  if (res[res.length - 1] < end) res.push(0, end);
  if (res[res.length - 1] === end - 2) res.push(end - 1);
  if (res[res.length - 1] === end - 3) res.push(end - 2);

  res.unshift('<');
  res.push('>');
  return res;
}

function renderPagination(elems, current) {
  const markup = elems
    .map(index => {
      if (index === 0) {
        return `<li ><div class = "empryBox">...</div></li>`;
      }

      return `<li ><button type="button" class = "${
        index === current ? 'current' : ''
      }" data-btn="${index}">${index}</button></li>`;
    })
    .join('');

  paginationEl.innerHTML = markup;
}

function onPaginationClick(e) {
  // console.log(e.target.nodeName);
  if (e.target.nodeName === 'DIV' || e.target.nodeName !== 'BUTTON') return;

  if (e.target.classList.contains('current')) return;

  let nextPage;

  if (e.target.dataset.btn !== '<' && e.target.dataset.btn !== '<')
    nextPage = +e.target.dataset.btn;

  if (e.target.dataset.btn === '<' && currentPage === 1) return;
  if (e.target.dataset.btn === '>' && currentPage === lastPage) return;

  if (e.target.dataset.btn === '<' && currentPage > 1) {
    nextPage = currentPage -= 1;
  }

  if (e.target.dataset.btn === '>' && currentPage < lastPage) {
    nextPage = currentPage += 1;
  }

  currentPage = nextPage;
  // console.log('currentPage', currentPage);
  console.log('nextPage', nextPage);
  renderPagination(createArr(nextPage, lastPage), nextPage);
}

// console.log(createArr(5,20));

// console.log(pagination.showRefs());

// import './js/merge-interval.js'
// const BASE_URL = 'http://localhost:3000';

// function fetchPosts (){
//  return   fetch(`${BASE_URL}/posts/`).then(r => r.json())
// }

// function fetchPostById(postId){
//     return   fetch(`${BASE_URL}/posts/${postId}`).then(r => r.json())

// }

//

// fetchPostById(1)

// const newPost = {
//     "title": "test 22",
//     "author": "Serhii dev",
// }

// function addPost (post){
// const options = {
//     method: 'POST',
//     body: JSON.stringify(post),
//     headers: {
//         'Content-Type': 'application/json',
//     },
// };

// return fetch(`${BASE_URL}/posts/`, options).then(r => r.json())

// }

// addPost(newPost).then(console.log).catch(console.log)

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
