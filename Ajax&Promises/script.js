const loadPostsBtn = document.getElementById('load-posts-btn');
const list = document.getElementById('list');

const loadPosts = () => fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((posts) => {
    loadPostsBtn.classList.add('d-none');
    list.classList.remove('d-none');
    posts.forEach(post => {
        const tr = document.createElement('tr');
        const id = document.createElement('td');
        id.innerText = post.id;
        const title = document.createElement('td');
        title.innerText = post.title;
        const body = document.createElement('td');
        body.innerText = post.body;
        const actions = document.createElement('td');
        actions.innerText = 'Delete'
        tr.appendChild(id);
        tr.appendChild(title);
        tr.appendChild(body);
        tr.appendChild(actions);
        actions.addEventListener('click', () => deletePost(post.id));
        list.getElementsByTagName('tbody')[0].appendChild(tr);
    });
});

const deletePost = (id) => {
    console.log(id);
}