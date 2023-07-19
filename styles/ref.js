burger=document.querySelector('.burger')
nav1=document.querySelector('.nav1')
navbar=document.querySelector('.navbar')
aaaresp=document.querySelector('.aaa-resp')


burger.addEventListener('click', (e)=>{
    navbar.classList.toggle('v-nav');
    nav1.classList.toggle('h-nav-resp');
   burger.classList.toggle('active');
 aaaresp.classList.toggle('active');
})
