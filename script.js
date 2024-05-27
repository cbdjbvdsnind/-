// script.js
document.getElementById('postButton').addEventListener('click', function() {
    const postInput = document.getElementById('postInput');
    const postContent = postInput.value.trim();

    if (postContent) {
        const timeline = document.getElementById('timeline');
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = postContent;

        timeline.prepend(post); // 新しい投稿をタイムラインの最上部に追加
        postInput.value = ''; // 入力フィールドをクリア
    }
});
