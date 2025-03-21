$(document).ready(function () {
    // Função para atualizar a tabela com base no valor selecionado
    function atualizarTabelaKanban(value) {
        // Recupera os dados do localStorage
        const kanbanData = JSON.parse(localStorage.getItem(value)) || [];
        console.log(kanbanData);
        // Seleciona o tbody da tabela
        const $kanbanTableBody = $('#kanban_maquinas');

        // Limpa o tbody antes de preencher
        $kanbanTableBody.empty();

        // Itera sobre os dados filtrados e cria as linhas da tabela
        kanbanData.forEach(item => {
            const row = `
                <tr>
                    <td>${item.descricao}</td>
                    <td>${item.codigo}</td>
                    <td>${item.quantidade}</td>
                </tr>
            `;
            $kanbanTableBody.append(row);
        });
    }

    // Monitora mudanças no select
    $('#selecionar_kanban_maquinas').on('change', function () {
        const selectedValue = $(this).val(); // Obtém o valor selecionado

        if (selectedValue) {

            atualizarTabelaKanban(selectedValue); // Atualiza a tabela
        }
    });
});