/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum COR {
  COR1 = 'laranja',
  COR2 = 'azul',
  COR3 = 'amarelo',
  COR4 = 'vermelho',
  COR5 = 'verde',
  COR6 = 'anil',
  COR7 = 'violeta'
}
type Tperson ={
  nome: string,
  idade: number,
  corFavorita: COR
}
const pessoa1:Tperson = {
  nome: 'Ana',
  idade: 30,
  corFavorita: COR.COR4
}
const pessoa2:Tperson = {
  nome: 'Emily',
  idade: 10,
  corFavorita: COR.COR2
}
const pessoa3:Tperson = {
  nome: 'Maria',
  idade: 60,
  corFavorita: COR.COR7
}
console.log(pessoa1,pessoa2,pessoa3)