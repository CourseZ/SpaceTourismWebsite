// get sidebar
const sidebar = document.querySelector('.sidebar');

const closeBtn = document.querySelector('.close-btn');

const toggleBtn = document.querySelector('.btn-toggle');

console.log(sidebar);
console.log(closeBtn);
console.log(toggleBtn);

closeBtn.addEventListener('click',() => {
    sidebar.classList.remove('show-sidebar');
});

toggleBtn.addEventListener('click',() => {
    sidebar.classList.add('show-sidebar');
});