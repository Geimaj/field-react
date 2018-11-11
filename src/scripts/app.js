var $ = require('jquery')

$(document).ready(function() {
    
    // $(".portfolioAnimation").click(() => {
    //     // displayMenu(false)
    //     $("#menu").removeClass('active')
    //     $("#content").addClass('active')

    // })

    // $(".icon.menu").click(() => {
    //     // displayMenu(true)            
    //     $("#menu").addClass('active')
    //     $("#content").removeClass('active')
    // })





//     titlesWidth = $titles.outerWidth(true),
//     titlesScrollWidth = $titles[0].scrollWidth,
//     wDiff = titlesScrollWidth / titlesWidth - 1, // widths difference ratio
//     mPadd = 60, // Mousemove Padding
//     damp = 20, // Mousemove response softness
//     mX = 0, // Real mouse position
//     mX2 = 0, // Modified mouse position
//     posX = 0,
//     mmAA = titlesWidth - mPadd * 2, // The mousemove available area
//     mmAAr = titlesWidth / mmAA; // get available mousemove fidderence ratio

//   $titles.mousemove(function(e) {
//     mX = e.pageX - $(this).offset().left;
//     mX2 = Math.min(Math.max(0, mX - mPadd), mmAA) * mmAAr;
//   });

//   let scrollInterval;
//   $titles.hover(
//     () => {
//       scrollInterval = setInterval(function() {
//         posX += (mX2 - posX) / damp; // zeno's paradox equation "catching delay"
//         $titles.scrollLeft(posX * wDiff);
//       }, 10);
//     },
//     () => {
//       clearInterval(scrollInterval);
//     }
//   );

})