$(document).ready(function () {
    // Função para gerar dados aleatórios para o kanban
    function gerarDadosAleatorios() {
        const dadosAleatorios = [];
        const quantidadeItens = Math.floor(Math.random() * 5) + 1; // Gera entre 1 e 5 itens

        for (let i = 0; i < quantidadeItens; i++) {
            dadosAleatorios.push({
                descricao: `Item ${i + 1}`,
                codigo: `COD-${Math.floor(Math.random() * 1000)}`,
                quantidade: Math.floor(Math.random() * 100) + 1 // Quantidade entre 1 e 100
            });
        }

        return dadosAleatorios;
    }

    // Função para salvar os dados no localStorage em tabelas separadas
    function salvarDadosNoLocalStorage(maquina) {
        const dadosExistentes = JSON.parse(localStorage.getItem(maquina)) || [];
        const novosDados = gerarDadosAleatorios();

        // Adiciona os novos dados aos existentes
        const dadosAtualizados = [...dadosExistentes, ...novosDados];

        // Salva no localStorage com a chave da máquina
        localStorage.setItem(maquina, JSON.stringify(dadosAtualizados));
    }

    salvarDadosNoLocalStorage('lam1');
    salvarDadosNoLocalStorage('lam2');
    salvarDadosNoLocalStorage('lam3');
});