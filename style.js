


$('.dropdown').hide();
$('.down-icon').click(function() {
    $('.dropdown').toggle();
});




$('.browse-dropdown').hide();
$('.browse').click(function() {
    $('.browse-dropdown').toggle();
});

$('.solutions-dropdown').hide();
$('.solutions').click(function() {
    $('.solutions-dropdown').toggle();
});


$('.sidebar').hide();
$('.toggler').click(function() {
    $('.sidebar').show();
});
$('.times').click(function() {
    $('.sidebar').hide();
});



$('input[type="search"]').click(function() {
    $('.search-bar').css({
        'box-shadow': 'inset 0 0 5px #37A000',
        'background': 'green'

    });

});

// pricing card
$('.hide-pricing1').hide();
$('.mobile-footer-pricing1').click(function() {
    $('.hide-pricing1').toggle();
});

$('.hide-pricing2').hide();
$('.mobile-footer-pricing2').click(function() {
    $('.hide-pricing2').toggle();
});
$('.hide-pricing3').hide();
$('.mobile-footer-pricing3').click(function() {
    $('.hide-pricing3').toggle();
});
$('.hide-pricing4').hide();
$('.mobile-footer-pricing4').click(function() {
    $('.hide-pricing4').toggle();
});




// footer for mobile devices
$('.com-list').hide();
$('.com').click(function() {
    $('.com-list').toggle();
});

$('.resource-list').hide();
$('.resource').click(function() {
    $('.resource-list').toggle();
});

$('.browse-footer-list').hide();
$('.browse-footer').click(function() {
    $('.browse-footer-list').toggle();
});