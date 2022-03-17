// fitness logo 눌러서 최상단으로 부드럽게 이동
document.querySelector('#home').addEventListener('click',(e) =>{
    scrollTo({
        top:0,
        behavior:'smooth'
    });
});