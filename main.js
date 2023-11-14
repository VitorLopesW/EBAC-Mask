

$('#telefone').mask('00000-0000')

$('#cpf').mask('000.000.000-00')

$('#cep').mask('00000-000')

jQuery.validator.addMethod("fullname", function(value, element) {
    if (/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(value)) {
        return true;
    } else {
        return false;
    };
}, 'Please enter your full name.');



$('form').validate({
    rules: {
        nome: {
            required: true,
            fullname: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true
        },
        endereço: {
            required: true
        }, 
        cep: {
            required: true
        }
    },
    messages: {
        nome: 'Informe seu nome completo.',
        email: 'Informe um e-mail válido.',
        telefone: 'Informe seu número de telefone.',
        cpf: 'Informe seu CPF.',
        endereço: 'Informe seu endereço completo.',
        cep: 'Informe seu CEP.'
    },
})