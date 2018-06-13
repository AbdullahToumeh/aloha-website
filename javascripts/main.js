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
