$(document).ready(function() {
    console.log(`${location.href}json/usuarios.json`);
    $.ajax({
        url: `./json/usuarios.json`, // Caminho para o arquivo JSON
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            console.log(response);
            // Verifica se o JSON contém um array de usuários
            if (Array.isArray(response)) {
                let usuariosSelect = $('#usuarios');
                usuariosSelect.empty(); // Limpa as opções anteriores
                
                response.forEach(usuario => {
                    usuariosSelect.append(
                        $('<option>', {
                            value: usuario.is_staff,
                            text: usuario.usuario
                        })
                    );
                });
            } else {
                console.error('Erro ao buscar usuários: JSON inválido');
            }
        },
        error: function(xhr, status, error) {
            console.error(error);
            console.error(status);
            console.error(xhr);
        }
    });
});
