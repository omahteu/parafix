$(document).ready(function() {
    $('#entrar').click(function() {
        let selectedValue = $('#usuarios').val(); // Obtém o valor da opção selecionada
        let password = $('#password').val(); // Obtém o valor do campo de senha
        let isStaff = selectedValue === 'true'; // Verifica se o usuário tem is_staff como true

        // Salva o usuário selecionado no localStorage
        let usuarioSelecionado = $('#usuarios option:selected').text();
        localStorage.setItem('usuario', JSON.stringify({ usuario: usuarioSelecionado }));



        // Se o usuário selecionado tem is_staff true, verifica a senha
        if (isStaff) {
            if (password !== '') { // Verifica se o campo de senha não está vazio
                $.ajax({
                    url: `./json/usuarios.json`, // Caminho para o arquivo JSON
                    type: 'GET',
                    dataType: 'json',
                    success: function(response) {
                        // Filtra o usuário no JSON
                        let usuario = response.find(u => u.usuario === usuarioSelecionado);

                        if (usuario && usuario.password === password) {


                            // Verifica o nome do usuário para redirecionar para páginas específicas
                            if (usuarioSelecionado === 'Logística') {
                                window.location.href = 'html/logistica.html'; // Redireciona para logistica.html
                                return;
                            } else if (usuarioSelecionado === 'Reboque') {
                                window.location.href = 'html/rebocador.html'; // Redireciona para reboque.html
                                return;
                            }



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
            // Se o usuário selecionado tem is_staff false, redireciona para home2.html
            localStorage.setItem('is_staff', 'false');
            window.location.href = 'html/home2.html'; // Redireciona para home2.html
        }
    });
});
