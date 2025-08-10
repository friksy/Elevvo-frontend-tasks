const postsData = [
  { title: 'Intro to JavaScript', category: 'Tech', date: '2025-06-01', desc: 'Learn JS basics.', img: 'https://via.placeholder.com/300x150?text=JS' },
  { title: 'Travel to Japan', category: 'Travel', date: '2025-05-12', desc: 'Tips for Japan trip.', img: 'https://via.placeholder.com/300x150?text=Japan' },
  { title: 'Delicious Pasta Recipe', category: 'Food', date: '2025-04-05', desc: 'Easy pasta recipe.', img: 'https://via.placeholder.com/300x150?text=Pasta' },
  { title: 'React Advanced Patterns', category: 'Tech', date: '2025-03-20', desc: 'Hooks and more.', img: 'https://via.placeholder.com/300x150?text=React' },
  { title: 'Paris Travel Guide', category: 'Travel', date: '2025-02-14', desc: 'Top places in Paris.', img: 'https://via.placeholder.com/300x150?text=Paris' },
  { title: 'Baking Bread at Home', category: 'Food', date: '2025-01-10', desc: 'Fresh bread tips.', img: 'https://via.placeholder.com/300x150?text=Bread' },
];

const postsPerPage = 3;
let currentPage = 1;
let filteredPosts = postsData;

const postsContainer = document.getElementById('posts');
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');
const pageInfo = document.getElementById('page-info');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function displayPosts() {
  postsContainer.innerHTML = '';
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const postsToShow = filteredPosts.slice(start, end);

  postsToShow.forEach(post => {
    postsContainer.innerHTML += `
      <div class="card">
        <img src="${post.img}" alt="${post.title}">
        <div class="content">
          <h3>${post.title}</h3>
          <small>${post.category} • ${post.date}</small>
          <p>${post.desc}</p>
        </div>
      </div>
    `;
  });

  pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(filteredPosts.length / postsPerPage)}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === Math.ceil(filteredPosts.length / postsPerPage);
}

function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categorySelect.value;
  filteredPosts = postsData.filter(post => {
    const matchCategory = category === 'All' || post.category === category;
    const matchSearch = post.title.toLowerCase().includes(searchTerm);
    return matchCategory && matchSearch;
  });
  currentPage = 1;
  displayPosts();
}

searchInput.addEventListener('input', applyFilters);
categorySelect.addEventListener('change', applyFilters);
prevBtn.addEventListener('click', () => { currentPage--; displayPosts(); });
nextBtn.addEventListener('click', () => { currentPage++; displayPosts(); });

applyFilters();
