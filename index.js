const start = () => {
    while(true) {
        let opcao = "cadastrar"
        switch(opcao){  // controle de fluxos
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                return
        }
    }
}

start() // TEM QUE CHAMAR A FUNÇÃO!!!!!