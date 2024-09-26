const fs = require("fs")

function getTodosLivros(){
    return JSON.parse( fs.readFileSync("livros.json"))
}

function getLivroId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json")) 
    const livrosFiltrado = livros.filter( livro => (livro.id) === (id))
    return livrosFiltrado
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json")) 
    
    const novaListaLivros = [ ...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}   

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json")) 
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    
    const conteudoDado = {...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado] = conteudoDado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivroId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json")) 

    const livrosFiltrado = livros.filter( livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrado))
}

module.exports = {
    getTodosLivros,
    getLivroId,
    insereLivro,
    modificaLivro,
    deletaLivroId
}