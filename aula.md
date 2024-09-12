## Linguagem de Programação

Maneira de dar instrução ao computador.
Como um lego, você irá utilizar peças para criar algoritmos, ou seja, para resolver ptoblemas.

    **Algoritmo**: Sequência de passos lógica e finita para resolução de um problema.

## Passos de  uma linguagem

- [x] Comentários;
- [x] Declaração de variáveis (const, let);
- [x] Operadores (atribuição, matemáticos, lógicos);
- [x] Tipos de dados (string, number, boolean);
- [x] Estrutura de dados (functions, objects, array);
- Controle de fluxo (if/else);
- Estrutura de repetição (for, while).

## Fases da resolução de um problema

- Coletar os dados;
- Processar os dados (manipular, alterar...);
- Apresentar os dados;

## Tipos de dados

- Strings (textos) "" '' ``
- Number (números) 2, 1.5, -10
- Boolean (true or false)

## Escopo e Variáveis

Variável = armazena um dado ("caixinha")

- var: escopo global ou de função (podem ser acessadas de qualquer lugar no código, dentro da função em que são declaradas ou em todo o documento se declarada fora da função).
- let: escopo de bloco (podem ser acessadas no bloco de código em que são declaradas).
- const: escopo de bloco, não pode ser alterada em nenhum momento do programa.

global: fora das chaves
local: dentro das chaves

## Operadores 

Atribuição:
= "recebe" valores

Concatenação: 
+ junção de strings e variáveis

Matemáticos:
    == igual
    != diferente de
    + soma
    - subtração
    * multiplicação
    / divisão
    % resto da divisão (módulo)

Lógicos:
    && and
    || or
    ! not

## Estruturas de Dados

 ## Arrays ( [] )
 Conjunto de elementos, lista com qualquer tipo de dados
 Exemplo:
 
 let elementos = [livro, mesa, cadeira, bolsa]
  // inicia no elemento 0

 ## Objetos ( {} )
 Elemento em que atribuímos propriedades a ele
 Atributos e métodos
 Criação e manipulação de objetos
 Acesso a propriedades de objetos
 Exemplo:

 let meta = {
    value: ler 1 livro por semana,
    checked: false,
}
    meta.value
    //acessa a propriedade value

 ## Functions ( {} )
 Criação de funções
 Arrow function ( const criarmeta = () => {} )
 Exemplo:

 function() {

 }

 ## Estrutura de repetição

  ## While
  while(condição){
    código a ser executado
  }

  ## Condicionais
  switch (opcao) {
    case 1:
    código
    break // quebra
    case 2:
    código
    break
    default: // caso não for nenhum dos casos executa o default
  }