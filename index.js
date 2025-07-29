let noClicks = 1;
const maxNoClicks = 6;
let noScale = 1;
let minNoScale = 0.4;

const happyCatGif = "images/cute_cat_really.gif"
const catGifs = ["images/cute_cat_asking.gif", "images/cute_cat_begging.gif", "images/cute_cat_please.gif", "images/cute_cat_areyousure.gif", "images/cute_cat_say_yes!!!.gif", "images/DiCarpio.gif" ]

let dateName;
dateName = prompt("What is your name?")

const buttonMessages = ["Are you sure??" + dateName, dateName + " please!", dateName + " PLEASE! PLEASE!","Sure, sure sure??? " + dateName, "You can't do this to me!" + dateName, "Hehehe"];


// $(".no").on("click", function(){
//     $("img").attr("src", catGifs[1]);
//     $("h1").text("Please be my date")
//     $(".no").css("width", "100px")
// })

// $("button").addClass("btn");

// $(".yes").on("click", function(){
//     $("h1").text("Yayy finally!! ~~~")
//     $("img").attr("src", catGifs[4])
//     $("button").remove()
// })

$(".no").on("click", function(){
    if (noClicks < maxNoClicks){
        $("img").attr("src", catGifs[noClicks])
        $("h1").text(buttonMessages[noClicks % maxNoClicks]);
    } else {
        $(".no").remove();
        $(".yes").css("width", "300px")
    }
    
    

    if (noScale > minNoScale) {
        noScale -= 0.2;
        $(".no").css("transform", `scale(${noScale})`);
    }

    noClicks++
});


$(".yes").on("click", function(){
    $("h2").text("Thank you so much! Let's go!")
    $("img").attr("src", happyCatGif)
    $("h1").text("OMFG?! Yayyy finally! ~~~ !").css("color", "red")
    $("<div class='message-me'>Message me hihi</div>").insertAfter("h1");
    $("button").remove()
});

$(".before-btn").on("click", function(){
    $("img").remove();
    $("h1").remove();
    $("button").remove();
})