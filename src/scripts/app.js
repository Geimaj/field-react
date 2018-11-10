var $ = require('jquery')

$(document).ready(function() {

    
    //hide menu on click
    $(".portfolioAnimation").click(() => {
        $("#menu").css('opacity', 0)
        $("#content").css('opacity', 1)    
    })
    
    // show menu on click
    $(".icon.menu").click(() => {
        console.log('click')
        $("#menu").css('opacity', 1)
        $("#content").css('opacity', 0)   
    })
    
    console.log($(".icon"))
})