$(document).ready(function() {
    // Load the includes
    $.get("./Includes/meta.html", function (data){ //Gets data from meta html
        $("#head").append(data); //Adds it to the end of head (did it this way cause my title a description were getting overwritten with load)
    });
    $("#footer").load("./Includes/footer.html"); //load footer
    $("#header").load("./Includes/header.html", function (){ //loads header
       $(".hamburger").click(function (){ //Once header is loaded listen for click on hamburger
           $("header nav").toggleClass('active'); //If clicked toggle class of header to active
           console.log($(".navi").length); //Show the menu
       }) ;

        $(".buynow, .shop a, .navi").hover(function (){ //Wait for hover
            $(this).css("color", "#eaeeeb") //Set color
            $(this).css("filter", "brightness(80%)"); //Set brightness to lower when hovered over
        }, function (){
            $(this).css("color", "#eaeeeb") //Set color
            $(this).css("filter", "brightness(100%)"); //Set brightness to normal when no hover
        });
    });
    $(".buy, .contactw").hover(function (){
        $(this).css("color", "#e2062c") //Set color
        $(this).css("filter", "brightness(60%)"); //Set brightness to lower when hovered over
    }, function (){
        $(this).css("color", "#e2062c") //Set color
        $(this).css("filter", "brightness(100%)"); //Set brightness to normal when no hover
    });
    $("html, body").on("wheel",function (event){ //Wait for mouse scroll
        event.preventDefault(); //Prevent default event
        let scrollDirection = event.originalEvent.deltaY; //Set variable for scroll
        $("html, body").stop().animate({ //Set animation for scroll
       scrollTop: $(window).scrollTop() + scrollDirection //Set scroll speed
        }, 600);
    });
    function rotate(){
        let Child =$('.rotate div:last-child').clone(); //Variable for rotating class
        $('.rotate div').removeClass('Slide') //Remove class slide from div
        $('.rotate div:last-child').remove(); //Removes the last child
        $('.rotate').prepend(Child) //Adds last child
        $(Child).addClass('Slide') //Adds class to five
    }
    window.setInterval(function (){
        rotate() //Rotate every 7 seconds
    }, 7000);
    });


