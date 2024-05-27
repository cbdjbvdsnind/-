// script.js
document.getElementById('postButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput');
    const postInput = document.getElementById('postInput');
    const name = nameInput.value.trim();
    const postContent = postInput.value.trim();

    if (name && postContent) {
        const timeline = document.getElementById('timeline');
        const post = document.createElement('div');
        post.className = 'post';

        const now = new Date();
        const dateTimeString = now.toLocaleDateString('ja-JP') + ' ' + now.toLocaleTimeString('ja-JP');

        const postHeader = document.createElement('div');
        postHeader.className = 'post-header';
        postHeader.textContent = name;

        const postTime = document.createElement('div');
        postTime.className = 'post-time';
        postTime.textContent = dateTimeString;

        const postContentDiv = document.createElement('div');
        postContentDiv.className = 'post-content';
        postContentDiv.textContent = postContent;

        post.appendChild(postHeader);
        post.appendChild(postTime);
        post.appendChild(postContentDiv);

        timeline.prepend(post); // 新しい投稿をタイムラインの最上部に追加
        nameInput.value = ''; // 名前フィールドをクリア
        postInput.value = ''; // 入力フィールドをクリア
    }
});
