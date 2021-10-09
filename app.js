const h1 = document.querySelector('h1');

h1.addEventListener('click', ()=>{
    
    document.body.style.backgroundColor = 'green';
    
})


const btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    btn.style.backgroundColor = 'purple'
})


h1.style.color = 'yellow'