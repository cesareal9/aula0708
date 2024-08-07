const prompt = require("prompt-sync")({ sigint: true });

const { adicionarLivro, listarLivro, atualizarLivro, deletarLivro } = require("./back.js");

while (true) {
    console.log(`
    ---Cadastro de Livros---
    1.Adicionar um Livro
    2.Listar os Livros
    3.Atualizar um Livro
    4.Deletar um Livro
    0.Sair
    `);

    let opcao = Number(prompt("Digite uma opção: "));

    switch (opcao) {
        case 1:
            adicionarLivro();
            break;
        case 2:
            listarLivro();
            break;
        case 3:
            atualizarLivro();
            break;
        case 4:
            deletarLivro();
            break;
        case 0:
            console.log("Saindo do menu!");
            return;
        default:
            console.log("Vocẽ deve digitar uma opção válida!");
            break;
    }
}