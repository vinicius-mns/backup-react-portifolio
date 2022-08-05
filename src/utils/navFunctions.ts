/* 
  Essa funcao eh responsavel pro chamar os hooks do use isContext para fazer
  a navegacacao atualizando o estado global

  Recebe como primeiro parametro o rota que quer ir -> setando ela como true
  E como segundo parametro secebe um array com as toras que devem sumir => setando elas como false
*/

export default function navigateTo (
    to: (x: boolean) => null,
    xx : {(x: boolean): null}[],
  ) {
  to(true)
  
  for ( let x of xx ) {
    x(false)
  }
}
