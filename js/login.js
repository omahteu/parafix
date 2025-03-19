$(document).ready(function() {
    $('#entrar').click(function() {
        let selectedValue = $('#usuarios').val(); // Obtém o valor da opção selecionada
        let password = $('#password').val(); // Obtém o valor do campo de senha
        let isStaff = selectedValue === 'true'; // Verifica se o usuário tem is_staff como true

        // Se o usuário selecionado tem is_staff true, verifica a senha
        if (isStaff) {
            if (password !== '') { // Verifica se o campo de senha não está vazio
                $.ajax({
                    url: `./json/usuarios.json`, // Caminho para o arquivo JSON
                    type: 'GET',
                    dataType: 'json',
                    success: function(response) {
                        // Filtra o usuário no JSON
                        let usuario = response.find(u => u.usuario === $('#usuarios option:selected').text());

                        if (usuario && usuario.password === password) {
                            // Se o usuário e a senha forem correspondentes, seta o is_staff no localStorage
                            localStorage.setItem('is_staff', 'true');
                            window.location.href = 'html/home.html'; // Redireciona para home.html
                        } else {
                            alert('Senha incorreta!'); // Se a senha for incorreta
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error('Erro ao buscar usuários:', error);
                    }
                });
            } else {
                alert('Por favor, insira a senha.'); // Caso o campo de senha esteja vazio
            }
        } else {
            // Se o usuário selecionado tem is_staff false, redireciona para home.html
            localStorage.setItem('is_staff', 'false');
            window.location.href = 'html/home2.html'; // Redireciona para home.html
        }
    });
});
