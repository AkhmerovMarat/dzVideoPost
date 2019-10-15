console.log('worked');
const rootEl = document.getElementById('root');
console.log(rootEl); 
console.dir(rootEl);

const post = {
    id: 1,
    content: 'Первое видео в моей социальной сети',
    iframeUrl: 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0',
    likes: 5,
    dislikes: 1,
};

const postEl = document.createElement('div');
postEl.className = 'card'

const iframeEl = document.createElement('video')
iframeEl.src = post.iframeUrl;
iframeEl.controls = true;
iframeEl.className = 'embed-responsive embed-responsive-16by9'
postEl.appendChild(iframeEl);

const postBodyEl = document.createElement('div');
postBodyEl.className = 'card-body';
postEl.appendChild(postBodyEl);

const postContentEl = document.createElement('p');
postContentEl.textContent = post.content;
postBodyEl.appendChild(postContentEl);

const likesEl = document.createElement('button');
likesEl.className = 'btn btn-primary';
likesEl.textContent = '👍' + post.likes;
likesEl.onclick = function () {
    post.likes = post.likes + 1;
    likesEl.textContent = '👍 ' + post.likes;  
};
postBodyEl.appendChild(likesEl);


const dislikesEl = document.createElement('button');
dislikesEl.className = 'btn btn-primary';
dislikesEl.textContent = '👎' + post.dislikes;
dislikesEl.onclick = function () {
    post.dislikes = post.dislikes + 1;
    dislikesEl.textContent = '👎' + post.dislikes
};

postBodyEl.appendChild(dislikesEl);
rootEl.appendChild(postEl);