console.log('worked');
const rootEl = document.getElementById('root');
console.log(rootEl);
console.dir(rootEl);

const post = {
    id: 1,
    content: 'Первое видео в моей социальной сети',
    videoUrl: 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0',
    likes: 5,
    dislikes: 1,
};

const postEl = document.createElement('div');
postEl.className = 'card'

const videoEl = document.createElement('video')
videoEl.src = post.videoUrl;
videoEl.controls = true;
videoEl.className = 'embed-responsive embed-responsive-16by9'
postEl.appendChild(videoEl);

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

const rootImgEl = document.getElementById('root');
console.log(rootImgEl);
console.dir(rootImgEl);
const postImg = {
    id: 2,
    content: 'Второй пост в моей социальной сети',
    imageUrl: 'https://placekitten.com/300/300',
    likes: 6,
    dislikes: 3,
};
  
const postImgEl = document.createElement('div');
postImgEl.className = 'card'

const imgEl = document.createElement('img');
imgEl.src = postImg.imageUrl;
imgEl.className = 'card-img-top';
postImgEl.appendChild(imgEl);

const postImgBodyEl = document.createElement('div');
postImgBodyEl.className = 'card-body';
postImgEl.appendChild(postImgBodyEl);

const postImgContentEl = document.createElement('p');
postImgContentEl.textContent = postImg.content;
postImgBodyEl.appendChild(postImgContentEl);

const likesImgEl = document.createElement('button');
likesImgEl.className = 'btn btn-primary';
likesImgEl.textContent = '👍' + postImg.likes;
likesImgEl.onclick = function () {
    postImg.likes = postImg.likes + 1;
    likesImgEl.textContent = '👍 ' + postImg.likes;
};
postImgBodyEl.appendChild(likesImgEl);

const dislikesImgEl = document.createElement('button');
dislikesImgEl.className = 'btn btn-primary';
dislikesImgEl.textContent = '👎' + postImg.dislikes;
dislikesImgEl.onclick = function () {
    postImg.dislikes = postImg.dislikes + 1;
    dislikesImgEl.textContent = '👎' + postImg.dislikes
};

postImgBodyEl.appendChild(dislikesImgEl);
rootImgEl.appendChild(postImgEl);


const rootAudioEl = document.getElementById('root');
console.log(rootAudioEl);
console.dir(rootAudioEl);

const postAudio = {
    id: 1,
    content: 'Первый трек в моей социальной сети',
    audioUrl: 'https://music.yandex.ru/iframe/#track/39479/3267',
    likes: 10,
    dislikes: 1,
};

const postAudioEl = document.createElement('div');
postAudioEl.className = 'card'

const audioEl = document.createElement('audio')
audioEl.src = post.audioUrl;
audioEl.controls = true;
audioEl.className = 'embed-responsive embed-responsive-21by9 card-img-top'
postAudioEl.appendChild(audioEl);

const postAudioBodyEl = document.createElement('div');
postAudioBodyEl.className = 'card-body';
postAudioEl.appendChild(postAudioBodyEl);

const postAudioContentEl = document.createElement('p');
postAudioContentEl.textContent = postAudio.content;
postAudioBodyEl.appendChild(postAudioContentEl);

const likesAudioEl = document.createElement('button');
likesAudioEl.className = 'btn btn-primary';
likesAudioEl.textContent = '👍' + postAudio.likes;
likesAudioEl.onclick = function () {
    postAudio.likes = postAudio.likes + 1;
    likesAudioEl.textContent = '👍 ' + postAudio.likes;
};
postAudioBodyEl.appendChild(likesAudioEl);

const dislikesAudioEl = document.createElement('button');
dislikesAudioEl.className = 'btn btn-primary';
dislikesAudioEl.textContent = '👎' + postAudio.dislikes;
dislikesAudioEl.onclick = function () {
    postAudio.dislikes = postAudio.dislikes + 1;
    dislikesAudioEl.textContent = '👎' + postAudio.dislikes
};

postAudioBodyEl.appendChild(dislikesAudioEl);
rootAudioEl.appendChild(postAudioEl);