# AULÃO 003 | Javascript

## Tipos primitivos
Um primitivo (valor primitivo, tipo de dados primitivo) é um dado que não é representado através de um Objeto e, por consequência, não possui métodos.
- String
- Number
- Boolean
- Null
- Undefined

## Variáveis
São como uma caixa, onde etiquetamos com um nome e guardamos coisas dentro dela.
- var
- let
- const

## Entrada e saída de dados
São as formas de responder os códigos.
- console
- popup

## Manipulação de dados
- Fatiamento
- Tamanho
- Concatenação

> Exercício: Faça o navegador responder com um alerta dizendo seu nome

#

## Operadores lógicos
São simbolos condicionais:
```js
  ==  // igual
  !=  // diferente
  >   // maior
  <   // menor
  >=  // maior ou igual
  <=  // menor ou igual
  !   // não
  === // idêntico
  &&  // e
  ||  // ou
```

## If/else (se ou se não)
Uma estrutura condicional nos permite retornar uma resposta de acordo com um condição verdadeira.
```js
// Sintaxe:
if(condição) {
  //SE: 'true', executa bloco de código
} else {
  // SE NÃO: 'true', executa esse blco de código...
  // podendo adicionar mais 'IFs'
  if(condição) {
    // bloco de código
  }
}
```

## Switch Case
Uma estrutra condicional baseada em opções pré-determinadas
```js
switch(condicao) {
  case opc1:
    // caso a opção 1 for true, bloco de código
    break
  case opc2:
    // caso a opção 2 for true, bloco de código
    break
  default:
    // caso nenhuma das opções for true, bloco de código (opcional)
    break
}
```

> Exercício: Criar um menu com Switch que quebra ao digitar o '0'.

#

## For (para...)
A estrutura de repetição 'for' funciona até um limite determinado for alcançado através de uma condição.
Ele funciona através de ciclos de iteração, por isso é chamado de laço de repetição ou laço iterável.
> Ciclo de repetição do FOR:
- Variável: definida e da início a repetição
- Condição: se for igual a 'false', encerra a repetição
- Iteração: comportamento que a estrutura tomará após a verificação da condição
```js
for(let variavel; condição; iteração) {
  // bloco de código
}
```

## While (enquanto...)
Essa estrutura de repetição, só será encerrada quando uma condição for 'false',
ENQUANTO isso, executará um bloco de código.
```js
while(condição) {
  // bloco de codigo
}
```