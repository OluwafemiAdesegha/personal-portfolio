const menu = document.querySelector('nav .container ul');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

// Show Menu
menuBtn.addEventListener('click', ()=>{
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
    menu.style.display = "block";
})

// Hide Menu
closeBtn.addEventListener('click', ()=>{
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
    menu.style.display = "none";
})


// Menu List
const menuLists = menu.querySelectorAll('li');

// Remove Link Active Class 
const changeActiveClass = () =>{
    menuLists.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

// Add Link Active Class
menuLists.forEach(item =>{
    const link = item.querySelector('a');
    link.addEventListener('click', ()=>{
        changeActiveClass();
        link.classList.add('active');
    })
})

// Show More Content Toggle
const showMoreInfo = document.querySelector('.show-more-info');
const showMoreToggle = document.querySelector('.show-more-toggle');

showMoreToggle.addEventListener('click', ()=>{
    showMoreInfo.classList.toggle('read-more');
    if (showMoreInfo.classList.contains('read-more')){
        showMoreToggle.textContent = 'Show less';
    }
    else{
        showMoreToggle.textContent = 'Show More';
    }
})


// Scrollbar Nav Background Change
window.addEventListener('scroll', ()=>{
    const nav = document.querySelector('nav');
    nav.classList.toggle("changeNavBackground", window.scrollY > 0);
})




