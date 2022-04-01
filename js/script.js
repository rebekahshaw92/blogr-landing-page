const myFunction = (x) => {
    x.classList.toggle("fa-angle-up");
}

//const toggle = false;
// const changeImage = () => {

//    const hamburger = document.getElementById('hamburger');

//    hamburger.addClass("open");

//    if (hamburger.classList.contains("open")) {
//        hamburger.src ='images/icon-close.svg';
//    } else {
//        hamburger.removeClass("open");
//        hamburger.src = 'images/icon-hamburger.svg';
//    }

//     // if (toggle === true){
//     // document.getElementById('hamburger').src = 'images/icon-hamburger.svg';
//     // } else {
//     // document.getElementById('hamburger').src='images/icon-close.svg';
//     // }
// }

$(document).ready(() => {
    $("#toggler").click(() => {
        $('#hamburger').toggleClass('hidden');
        $('#hamburgerClose').toggleClass('hidden');
    });
    // $(".hamburger").click(() => {
    //         $(this).toggleClass("collapseClose");
    //     });
    //     $(this).html(' <img id="hamburger" src="images/icon-hamburger.svg">');
    // }, (() => {
    //     $(this).html(' <img id="hamburger" src="images/icon-close.svg">');
    // }));
});