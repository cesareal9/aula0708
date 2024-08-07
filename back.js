const prompt = require("prompt-sync")({ sigint: true });

let Livros = [];
let ultimoID = 1;

const modelo = (ID) => {
    let Livro = prompt("Nome do Livro: ");
    let autor = prompt("Nome do autor: ");
    let pagina = parseInt(prompt("Número de paginas: "));
    let ano = parseInt(prompt("Ano de criação: "));
    let genero = prompt("qual é o genero do livro: ");

    if (Livro != "" && autor  != "" && !isNaN(pagina) && genero != "" && !isNaN(ano)) { 
        let livro  
        if (ID == undefined) {
                livro = {
                ID: ultimoID,
                Livro,
                autor,
                pagina,
                genero,
            };
            ultimoID++
        } else {
            livro = {
                Livro,
                autor,
                pagina,
                genero,
            };
        }
        return livro;
    }else {
        console.log("dados invalidos");
    }
};

const adicionarLivro = () => {
    let livro = modelo();
    if (livro === undefined) {
        return;
    } else {
        Livros.push(livro);
        console.log("Livro adicionado");
    } 
};

const listarLivro = () => {
    if (Livros.length === 0) {
        console.log("Não possui nenhum livro registrado!");
        return false;
    } else {
        Livros.forEach((livro) => {
            console.log(
                `ID: ${livro.ID}
        Nome do Livro: ${livro.Livro} 
        Autor do Livro ${livro.aut} 
        Número de paginas: ${livro.pagina}
        Genero do livro: ${livro.genero}`
            );
        });
    }
    return true;
};

const atualizarLivro = () => {
    if (listarLivro()) {
        const ID = prompt("Qual ID da livro que deseja editar: ");

        if (ID > 0 && ID != undefined) {
            let livroEditado = modelo(ID);

            if (livroEditado === undefined) {
                return;
            } else {
                Livros[ID] = livroEditado;
                console.log("Livro Atualizada!");
            }
        } else {
            console.log("ID inexistente");
        }
    } else {
        return;
    }
};

const deletarLivro = () => {
    if (!listarLivro()) {
        return;
    }

    const ID = prompt("Qual ID deseja remover: ");

    Livros.forEach((livro, indice) => {
        if (livro.ID == ID) {
            Livros.splice(indice, 1);
            console.log("Livro removido!");
        }
    });
};

const results =livros.filter((livro) => livro[key] == value); 
    
    if (results.length > 0) {
        results.forEach((livro) => {
            console.log(
                ÌD:${livro.id},
                Titulo: $l{livro.title},
                Autor: ${livro.author},
                lançamento: ${livro.year},
                Genero:
            )
        })
    }

    switch (livro) {
        case 1:
            
            break;
    
        default:
            break;
    }

funcoes = {
    adicionarLivro
,
    listarLivro,
    atualizarLivro,
    deletarLivro,
};

module.exports = funcoes;