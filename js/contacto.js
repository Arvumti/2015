$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");

    // validar formulario
    $(function() {
        $('#formularioContacto').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                     minlength: 15
                }
            },
            messages: {
                name: {
                    required: "escribe tu nombre por favor!",
                    minlength: "tu nomre debe contener por lo menos 2 letras"
                },
                email: {
                    required: "escribe tu mail"
                },
                message: {
                    required: "Debes escribir un mensaje.",
                    minlength: "Escribe un poco más!"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contacto.php",
                    success: function() {
                        $('#formularioContacto :input').attr('disabled', 'disabled');
                        $('#formularioContacto').fadeTo( "slow", 0.15, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function() {
                        $('#formularioContacto').fadeTo( "slow", 0.15, function() {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });
    });
        
 })(jQuery)
});