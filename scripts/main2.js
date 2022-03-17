// main2 Schedule 버튼
    schedule_button1.addEventListener('click',()=>{
        document.querySelector('#schedule_detail').style.transform = "translateX(0%)"; 
        document.querySelector('#schedule_button1').style.backgroundColor = "#fff";
        document.querySelector('#schedule_button2').style.backgroundColor = "transparent";
        document.querySelector('#schedule_button3').style.backgroundColor = "transparent";
        document.querySelector('#schedule_1').style.visibility ="visible";
        document.querySelector('#schedule_2').style.visibility ="hidden";
        document.querySelector('#schedule_3').style.visibility ="hidden";
    });
    schedule_button2.addEventListener('click',()=>{
        document.querySelector('#schedule_detail').style.transform = "translateX(-100%)";
        document.querySelector('#schedule_button1').style.backgroundColor = "transparent";
        document.querySelector('#schedule_button2').style.backgroundColor = "#fff";
        document.querySelector('#schedule_button3').style.backgroundColor = "transparent";
        document.querySelector('#schedule_1').style.visibility ="hidden";
        document.querySelector('#schedule_2').style.visibility ="visible";
        document.querySelector('#schedule_3').style.visibility ="hidden";
    });   
    schedule_button3.addEventListener('click',()=>{
        document.querySelector('#schedule_detail').style.transform = "translateX(-200%)";
        document.querySelector('#schedule_button1').style.backgroundColor = "transparent";
        document.querySelector('#schedule_button2').style.backgroundColor = "transparent";
        document.querySelector('#schedule_button3').style.backgroundColor = "#fff";
        document.querySelector('#schedule_1').style.visibility ="hidden";
        document.querySelector('#schedule_2').style.visibility ="hidden";
        document.querySelector('#schedule_3').style.visibility ="visible";
    });   
    
// </script>main2 customer 버튼
    customer_button1.addEventListener('click',()=>{
        document.querySelector('#customer_detail').style.transform = "translateX(0%)"; 
        document.querySelector('#customer_button1').style.backgroundColor = "#fff";
        document.querySelector('#customer_button2').style.backgroundColor = "transparent";
        document.querySelector('#customer_button3').style.backgroundColor = "transparent";
        document.querySelector('#customer_1').style.visibility ="visible";
        document.querySelector('#customer_2').style.visibility ="hidden";
        document.querySelector('#customer_3').style.visibility ="hidden";
    });
    customer_button2.addEventListener('click',()=>{
        document.querySelector('#customer_detail').style.transform = "translateX(-100%)";
        document.querySelector('#customer_button1').style.backgroundColor = "transparent";
        document.querySelector('#customer_button2').style.backgroundColor = "#fff";
        document.querySelector('#customer_button3').style.backgroundColor = "transparent";
        document.querySelector('#customer_1').style.visibility ="hidden";
        document.querySelector('#customer_2').style.visibility ="visible";
        document.querySelector('#customer_3').style.visibility ="hidden";
    });   
    customer_button3.addEventListener('click',()=>{
        document.querySelector('#customer_detail').style.transform = "translateX(-200%)";
        document.querySelector('#customer_button1').style.backgroundColor = "transparent";
        document.querySelector('#customer_button2').style.backgroundColor = "transparent";
        document.querySelector('#customer_button3').style.backgroundColor = "#fff";
        document.querySelector('#customer_1').style.visibility ="hidden";
        document.querySelector('#customer_2').style.visibility ="hidden";
        document.querySelector('#customer_3').style.visibility ="visible";
    }); 