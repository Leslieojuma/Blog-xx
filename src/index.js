const BASE_URL = 'https://json-server-2-cu0m.onrender.com';

// Show post details
function showPost(post) {
  const detail = document.getElementById('post-detail');
  detail.innerHTML = `
    <h2>${post.title}</h2>
    <h4>By ${post.author} on ${post.date}</h4>
    <img src="${post.image}" alt="${post.title}" style="max-width: 100%; height: auto;" />
    <p>${post.content}</p>
  `;
}

// Fetch and show one post
function handlePostClick(id) {
  fetch(`${BASE_URL}/posts/${id}`)
    .then(res => res.json())
    .then(showPost);
}

// Fetch and display all post titles
function displayPosts() {
  fetch(`${BASE_URL}/posts`)
    .then(res => res.json())
    .then(posts => {
      const list = document.getElementById('post-list');
      list.innerHTML = ''; // clear list

      posts.forEach(post => {
        const item = document.createElement('div');
        item.textContent = post.title;
        item.style.cursor = 'pointer';
        item.onclick = () => handlePostClick(post.id);
        list.appendChild(item);
      });

      // Auto-load first post
      if (posts.length > 0) {
        showPost(posts[0]);
      }
    });
}

document.addEventListener('DOMContentLoaded', displayPosts);
