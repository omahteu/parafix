$(document).ready(function () {
    $('#imprimir_kanban').on('click', function () {
        var tabela = document.getElementById('kanban_maquinas').parentNode.innerHTML;

        var janela = window.open('', '', 'width=800,height=600');
        janela.document.write(`
            <html>
            <head>
                <title>Impressão Kanban</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
            </head>
            <body>
                <h2 class="text-center">Kanban</h2>
                <table class="table">${tabela}</table>
            </body>
            </html>`);
        janela.document.close();
        janela.print();
    });
});