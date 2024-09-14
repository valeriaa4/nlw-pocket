const {select, input, checkbox} = require('@inquirer/prompts')

let meta = {
    value: 'Tomar 3l de água por dia',
    checked: false,
}
let metas = [meta]

const cadastrarMeta = async () => {
    const meta = await input ({message: "Digite a meta:"})
    if(meta.length == 0){
        console.log("A meta não pode ser vazia.")
        return
    }
    metas.push({value: meta, checked: false})
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, espaço para marcar ou desmarcar e enter para finalizar essa etapa.",
        choices: [...metas], // pega tudo o que tem em metas pro novo array
        instructions: false,

    })

    metas.forEach((m) => {
        m.checked = false
    })

    if(respostas.length == 0){
        console.log("Nenhuma meta selecionada")
        return
    }

    respostas.forEach((resposta) => { // forEach - para cada
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        meta.checked = true
    })
    console.log("Metas marcadas como concluídas")
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => { // vai filtrar a meta, quando estiver com check vai colocar em uma nova lista (realizadas)
        return meta.checked
    })
    if(realizadas.length == 0) {
        console.log("Não existem metas realizadas! :/")
        return
    }
    await select({
        message: "Metas realizadas",
        choices: [...realizadas]
    })
}

const start = async () => {
    while(true) {
        
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
                    name: "Sair",
                    value: "sair"
                }
            ]

        })
        switch(opcao){  // controle de fluxos
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                await listarMetas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "sair":
                console.log("Até a próxima")
                return // parar a função
        }
    }
}

start() // TEM QUE CHAMAR A FUNÇÃO!!!!!