const {select} = require('@inquirer/prompts') // objeto select
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
                    name: "Sair",
                    value: "sair"
                }
            ]

        })
        switch(opcao){  // controle de fluxos
            case "cadastrar":
                console.log("Vamos cadastrar")
                break
            case "listar":
                console.log("Vamos listar")
                break
            case "sair":
                console.log("Até a próxima")
                return // parar a função
        }
    }
}

start() // TEM QUE CHAMAR A FUNÇÃO!!!!!