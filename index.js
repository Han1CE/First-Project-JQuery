let noClicks = 1;
const maxNoClicks = 6;
let noScale = 1;
let minNoScale = 0.4;

const happyCatGif = "images/cute_cat_really.gif";
const catGifs = [
    "images/cute_cat_asking.gif",
    "images/cute_cat_begging.gif",
    "images/cute_cat_please.gif",
    "images/cute_cat_areyousure.gif",
    "images/cute_cat_say_yes!!!.gif",
    "images/DiCarpio.gif"
];
const buttonMessages = [
    "Are you sure??",
    "Pookie please!",
    "Pookie PLEASE! PLEASE!",
    "Sure, sure sure???",
    "You can't do this to me!",
    "Hehehe"
];

function adjustYesButton() {
    // Use relative units for responsiveness
    $(".yes").css({
        "width": "80vw",
        "max-width": "300px",
        "font-size": "2.5em"
    });
}

$(".no").on("click", function () {
    if (noClicks < maxNoClicks) {
        $("img").attr("src", catGifs[noClicks]);
        $("h1").text(buttonMessages[noClicks % maxNoClicks]);
    } else {
        $(".no").remove();
        adjustYesButton();
    }

    if (noScale > minNoScale) {
        noScale -= 0.2;
        $(".no").css("transform", `scale(${noScale})`);
    }

    noClicks++;
});

$(".yes").on("click", function () {
    $("img").attr("src", happyCatGif);
    $("h1").text("Really?! Yayyy finally! ~~~ !").css("color", "red");
    $("button").remove();
    $("h1").before('<a href="https://www.facebook.com/FrancisFgo012">Now click me and message me!</a>');
});

// Optional: Adjust button size on window resize
$(window).on("resize", function () {
    if ($(".yes").length) {
        adjustYesButton();
    }
});