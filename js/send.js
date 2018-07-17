// "use strict";
// $(document).on( 'ready', function() {
//     $("#ajaxform").submit(function(){
//         var form = $(this);
//         var error = false;
//         form.find('input, textarea').each( function(){
//             if ($(this).val() == '') {
//                 alert('Fill in the field "'+$(this).attr('placeholder')+'"!');
//                 error = true;
//             }
//         });
//         if (!error) {
//             var data = form.serialize();
//             $.ajax({
//                type: 'POST',
//                url: 'scripts/send.php',
//                dataType: 'json',
//                data: data,
//                beforeSend: function(data) {
//                     form.find('input[type="submit"]').attr('disabled', 'disabled');
//                   },
//                success: function(data){
//                     if (data['error']) {
//                         alert(data['error']);
//                     } else {
//                         $('#ajaxform')[0].reset();
//                         alert('The message was successfully sent');
//                     }
//                  },
//                error: function (xhr, ajaxOptions, thrownError) {
//                     alert(xhr.status);
//                     alert(thrownError);
//                  },
//                complete: function(data) {
//                     form.find('input[type="submit"]').prop('disabled', false);
//                  }
//
//                  });
//         }
//         return false;
//     });
// });

// function callMe() {
// var myin = prompt ("What is you phone number?")
// var myin1 = prompt ("What time should we call you?")
// alert ("Someone will be calling" + " " + myin + " " + "at" + " " +myin1+"." + " "+ "Thank you")
// return;
// }


function callMe() {
    var Numb = document.getElementById("Numb");
    if(Numb.value == "") {
    alert ("Please enter your phone number");
  } else if (Numb.value !== "") {
    prompt ("Enter a good time to talk");
    return;
  }
}

document.getElementById("CallMe").addEventListener("click", callMe);

// function checkNumber(){
//   if (isN) {
//    prompt ("It is not a phone number. Please enter your phone number", "");
// } else {
//   alert ("Someone will be calling" + " " + myin + " " + "at" + " " +myin1+"." + " "+ "Thank you")
//  }
// }
