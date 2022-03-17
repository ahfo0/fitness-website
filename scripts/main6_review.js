// main6 review 버튼
review_button1.addEventListener('click',()=>{
    document.querySelector('#review').style.transform = "translateX(0%)"; 
    document.querySelector('#review_button1').style.backgroundColor = "#fff";
    document.querySelector('#review_button2').style.backgroundColor = "transparent";
    document.querySelector('#review_button3').style.backgroundColor = "transparent";
    document.querySelector('#review1').style.visibility ="visible";
    document.querySelector('#review2').style.visibility ="hidden";
    document.querySelector('#review3').style.visibility ="hidden";
});
review_button2.addEventListener('click',()=>{
    document.querySelector('#review').style.transform = "translateX(-100%)";
    document.querySelector('#review_button1').style.backgroundColor = "transparent";
    document.querySelector('#review_button2').style.backgroundColor = "#fff";
    document.querySelector('#review_button3').style.backgroundColor = "transparent";
    document.querySelector('#review1').style.visibility ="hidden";
    document.querySelector('#review2').style.visibility ="visible";
    document.querySelector('#review3').style.visibility ="hidden";
});   
review_button3.addEventListener('click',()=>{
    document.querySelector('#review').style.transform = "translateX(-200%)";
    document.querySelector('#review_button1').style.backgroundColor = "transparent";
    document.querySelector('#review_button2').style.backgroundColor = "transparent";
    document.querySelector('#review_button3').style.backgroundColor = "#fff";
    document.querySelector('#review1').style.visibility ="hidden";
    document.querySelector('#review2').style.visibility ="hidden";
    document.querySelector('#review3').style.visibility ="visible";
});   