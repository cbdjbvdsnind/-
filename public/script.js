// script.js
document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
    const nameInput = document.getElementById('nameInput');
    const postInput = document.getElementById('postInput');
    const postButton = document.getElementById('postButton');
    const timeline = document.getElementById('timeline');

    postButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const content = postInput.value.trim();

        if (name && content) {
            fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, content })
            })
            .then(response => response.json())
            .then(post => {
                addPostToTimeline(post);
                nameInput.value = '';
                postInput.value = '';
            });
        }
    });

    socket.on('new_post', post => {
        addPostToTimeline(post);
    });

    function addPostToTimeline(post) {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';

        const postHeader = document.createElement('div');
        postHeader.className = 'post-header';
        postHeader.textContent = post.name;

        const postTime = document.createElement('div');
        postTime.className = 'post-time';
        postTime.textContent = new Date(post.timestamp).toLocaleString();

        const postContent = document.createElement('div');
        postContent.className = 'post-content';
        postContent.textContent = post.content;

        postDiv.appendChild(postHeader);
        postDiv.appendChild(postTime);
        postDiv.appendChild(postContent);

        timeline.prepend(postDiv);
    }

    // 初期投稿の読み込み
    fetch('/api/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                addPostToTimeline(post);
            });
        });
});
