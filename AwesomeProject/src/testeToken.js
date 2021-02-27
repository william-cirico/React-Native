PagSeguroDirectPayment = require('./tokenGenerator');

PagSeguroDirectPayment.createCardToken({
    cardNumber: '4111111111111111', // Número do cartão de crédito
    brand: 'visa', // Bandeira do cartão
    cvv: '123', // CVV do cartão
    expirationMonth: '12', // Mês da expiração do cartão
    expirationYear: '2030', // Ano da expiração do cartão, é necessário os 4 dígitos.
    success: function(response) {
         // Retorna o cartão tokenizado.
    },
    error: function(response) {
             // Callback para chamadas que falharam.
    },
    complete: function(response) {
         // Callback para todas chamadas.
    }
 });