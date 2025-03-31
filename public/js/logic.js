let ans = document.getElementById('answer');
let hiddens = document.querySelectorAll('p'); // Solo los párrafos con la clase 'hidden'
ans.addEventListener('click', () => {
    hiddens.forEach(p => {
        p.classList.toggle('hidden'); 
    });
});

document.querySelectorAll('button[data-url]').forEach(button => {
    button.addEventListener('click', () => {
      window.location.href = button.dataset.url;
    });
  });