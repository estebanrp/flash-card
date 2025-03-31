let ans = document.getElementById('answer');
let hiddens = document.querySelectorAll('p'); // Solo los párrafos con la clase 'hidden'
ans.addEventListener('click', () => {
    hiddens.forEach(p => {
        p.classList.toggle('hidden'); 
    });
});

let next = document.getElementsByClassName('next')
next.addEventListener('click', () => {
    
})