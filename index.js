const {select, input, checkbox} = require('@inquirer/prompts')
const fs = require("fs").promises

let mensagem = "Bem vindo ao App de Metas";

let metas

const carregarMetas = async () => {
    try{
        const dados = await fs.readFile("metas.json", "utf-8") // lê o arquivo metas.json
        metas = JSON.parse(dados) // converte os dados em JSON para um array de metas
    }
    catch(erro) {
        metas = []
    }
}

const salvarMetas = async () => {
    await fs.writeFile("metas.json", JSON.stringify(metas, null, 2)) // escrever no arquivo e transformar/configurar em JSON
}

const cadastrarMeta = async () => {
    const meta = await input ({message: "Digite a meta:"})
    if(meta.length == 0){
        mensagem = "A meta não pode ser vazia."
        return
    }
    metas.push({value: meta, checked: false})

    mensagem = "Meta cadastrada com sucesso!"
}

const listarMetas = async () => {
    if(metas.length == 0){
        mensagem = "Não existem metas!"
        return
    }
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, espaço para marcar ou desmarcar e enter para finalizar essa etapa.",
        choices: [...metas], // pega tudo o que tem em metas pro novo array
        instructions: false,
    })

    metas.forEach((m) => {
        m.checked = false
    })

    if(respostas.length == 0){
        mensagem = "Nenhuma meta selecionada"
        return
    }

    respostas.forEach((resposta) => { // forEach - para cada
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        meta.checked = true
    })
    mensagem = "Metas marcadas como concluídas"
}

const metasRealizadas = async () => {
    if(metas.length == 0){
        mensagem = "Não existem metas!"
        return
    }
    const realizadas = metas.filter((meta) => { // vai filtrar a meta, quando estiver com check vai colocar em uma nova lista (realizadas)
        return meta.checked
    })
    if(realizadas.length == 0) {
        mensagem = "Não existem metas realizadas! :/"
        return
    }
    await select({
        message: "Metas realizadas: " + realizadas.length,
        choices: [...realizadas]
    })
}

const metasAbertas = async () => {
    if(metas.length == 0){
        mensagem = "Não existem metas!"
        return
    }
    const abertas = metas.filter((meta) => {
        return meta.checked != true // filtra as metas não marcadas (false)
    })
    if(abertas.length == 0) {
        mensagem = "Não existe metas abertas! :)"
        return
    }
    await select({
        message: "Metas abertas: " + abertas.length,
        choices: [...abertas]
    })
}

const deletarMetas = async () => {
    if(metas.length == 0){
        mensagem = "Não existem metas!"
        return
    }
    const metasDesmarcadas = metas.map((meta) => {
        return {value: meta.value, checked: false}
    })

    const itensaDeletar= await checkbox({
        message: "Selecione os itens para deletar.",
        choices: [...metasDesmarcadas],
        instructions: false,
    })
    if(itensaDeletar.length == 0) {
        mensagem = "Nenhum item para deletar!"
    }
    itensaDeletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })
    })
    mensagem = "Meta(s) deletada(s) com sucesso!"
}

const mostrarMensagem = () => {
    console.clear();  // limpa o console
    if(mensagem != " ") {
        console.log(mensagem)
        console.log(" ")
        mensagem = " "
    }
}

const start = async () => {
    await carregarMetas()

    while(true) {
        mostrarMensagem()
        await salvarMetas()

        const opcao = await select({  // aguardar o usuário selecionar a opção ('await' requer o 'async' na função)
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
                },
                {
                    name: "Deletar metas",
                    value: "deletar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opcao){  // controle de fluxos
            case "cadastrar":
                await cadastrarMeta()
                break
            case "listar":
                await listarMetas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "deletar":
                await deletarMetas()
                break
            case "sair":
                console.log("Até a próxima")
                return // parar a função
        }
    }
}

start() // TEM QUE CHAMAR A FUNÇÃO!!!!!