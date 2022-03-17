// 상단 Header menu 작동 jQuery

// 모바일
    mobile_menu.addEventListener('click',()=>{
        document.querySelector('#only_mobile_menu').style.right = "0";
        document.querySelector('#only_mobile_menu').style.visibility ="visible"
    });
    close_mobile_menu.addEventListener('click',()=>{
        document.querySelector('#only_mobile_menu').style.right = "-100vw";
        document.querySelector('#only_mobile_menu').style.visibility ="hidden"
    });
    $("#go_schedule_mobile").click(function() {
    document.querySelector('#only_mobile_menu').style.right = "-100vw";
    document.querySelector('#only_mobile_menu').style.visibility ="hidden"
    $('html, body').animate({
    scrollTop: $("#go_schedule").offset().top
    }, 1500);
    });
    $("#go_program_mobile").click(function() {
    document.querySelector('#only_mobile_menu').style.right = "-100vw";
    document.querySelector('#only_mobile_menu').style.visibility ="hidden"
    $('html, body').animate({
    scrollTop: $("#go_program").offset().top
    }, 1500);
    });
    $("#go_trainer_mobile").click(function() {
    document.querySelector('#only_mobile_menu').style.right = "-100vw";
    document.querySelector('#only_mobile_menu').style.visibility ="hidden"
    $('html, body').animate({
    scrollTop: $("#cut2").offset().top
    }, 1500);
    });
    $("#go_price_mobile").click(function() {
    document.querySelector('#only_mobile_menu').style.right = "-100vw";
    document.querySelector('#only_mobile_menu').style.visibility ="hidden"
    $('html, body').animate({
    scrollTop: $("#main5_message").offset().top
    }, 1500);
    });
    $("#go_story_mobile").click(function() {
    document.querySelector('#only_mobile_menu').style.right = "-100vw";
    document.querySelector('#only_mobile_menu').style.visibility ="hidden"
    $('html, body').animate({
    scrollTop: $("#review").offset().top-80
    }, 1500);
    });

// pc 
    $("#go_schedule_pc").click(function() {
    $('html, body').animate({
    scrollTop: $("#go_schedule").offset().top
    }, 1500);
    });
    $("#go_program_pc").click(function() {
    $('html, body').animate({
    scrollTop: $("#main3").offset().top
    }, 1500);
    });
    $("#go_trainer_pc").click(function() {
    $('html, body').animate({
    scrollTop: $("#cut2").offset().top
    }, 1500);
    });
    $("#go_price_pc").click(function() {
    $('html, body').animate({
    scrollTop: $("#main5_message").offset().top
    }, 1500);
    });
    $("#go_story_pc").click(function() {
    $('html, body').animate({
    scrollTop: $("#go_story").offset().top
    }, 1500);
    });