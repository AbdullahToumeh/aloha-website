$(document).ready(function(){
    // carousel flickity
    $('.product').flickity({
        cellAlign:'left',
        contain: true,
        autoPlay: true
    })

    // checking the validation of email   

    $('#button').on('click', function(event){
        event.preventDefault();

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test( $('#email').val() ) ){
            
            alert('Thank you for Subscribing!');
        } else {
            alert('Enter a valid value')
        }

    });

    // making the cart add items

    $('.cartUpdate').hide();
    var currentItems = 1;
    $('.addToCart').click(function(){
        $('.cartUpdate').show();
        $('.cartUpdate').html('<p>'+currentItems+'</p>');
        currentItems++;
    })

});






































// $(function() {

// $('a[href^="#"]').on('click', function (event) {
//     event.preventDefault();

//     var target = this.hash,       // takes '#' of 'a href'
//         $target = $(target);      // targets '#' of 'a href'

//     $('html, body').animate({                 // animate method on the body
//         scrollTop: $target.offset().top - 80   // scrolltop animate method smooth scroll to corresponding 'a href' #
//     }, 900)                                                               // .top 116 for fixed nav bar. 900 for scroll speed in millisec
// });
// })
// // auto sliding images 

// $(function() {
//         $('.product').flickity({
//             wraparound: false,
//             cellAlign: 'center',
//             contain: true,
//             percentPosition: true,
//             imagesLoaded: true,
//             autoPlay: true,
//             prevNextButtons: false
//         });
// })

// //prompt pop up sign on sign up section

// $('#button').on('click', function(event) {
//   event.preventDefault();
//   var userEmail = $('input:text').val();
//   if (userEmail != '') {
//       var valid = validateEmail(userEmail);
//       if (valid) {
//         alert("Thanks for subscribing!");
//       } else {
//       alert("Please include an '@' in email address. " + userEmail + " is missing an '@'.");
//       }
//       } else{
//     alert ("Please submit a valid email address.");
//   }
  
// })

// function validateEmail(email) {
//  var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//  return pattern.test(email);
// }




