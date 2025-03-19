$(document).ready(function() {
    $('#usuarios').change(function() {
        let selectedValue = $(this).val(); // Obtém o valor da opção selecionada
        
        // Verifica se o valor selecionado é true
        if (selectedValue === 'true') {
            $('#campo_password').removeAttr('hidden'); // Remove o atributo 'hidden'
        } else {
            $('#campo_password').attr('hidden', true); // Adiciona o atributo 'hidden'
        }
    });
});
