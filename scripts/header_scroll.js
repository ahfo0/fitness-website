// 마우스 스크롤시 상단 header 변환
document.querySelector('#logo').style.background = "url(images/logo_Fitness.png) no-repeat";
document.querySelector('#logo').style.backgroundSize ="cover";
window.addEventListener('scroll',()=>{
if(document.querySelector('html').scrollTop > 0) {
    document.querySelector('#header').style.backgroundColor = "#fff";
    document.querySelector('#header_menu').style.margin = "15px auto";
    document.querySelector('#logo').style.width = "140px";
    document.querySelector('#logo').style.height = "30px";
    document.querySelector('#logo').style.background = "url(images/logo_Fitness.png) no-repeat";
    document.querySelector('#logo').style.backgroundSize ="cover";

    const pcMenuColor = document.querySelectorAll(".pc_menu_color");
    for (let i = 0; i < pcMenuColor.length; i++) {
    pcMenuColor[i].style.color = "#989da0";}
    } else{
    document.querySelector('#header').style.backgroundColor = "transparent";
    document.querySelector('#header_menu').style.margin = "50px auto";
    document.querySelector('#logo').style.width = "212px";
    document.querySelector('#logo').style.height = "46px";
    document.querySelector('#logo').style.background = "url(images/logo_Fitness.png) no-repeat";
    document.querySelector('#logo').style.backgroundSize ="cover";
    const pcMenuColor = document.querySelectorAll(".pc_menu_color");
    for (let i = 0; i < pcMenuColor.length; i++) {
    pcMenuColor[i].style.color = "#fff";}  
    }
        });