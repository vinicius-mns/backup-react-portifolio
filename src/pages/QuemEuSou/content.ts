const year = new Date().getMonth() < 11
  ? new Date().getFullYear() - 1998 - 1
  : new Date().getFullYear() - 1998

const img_description = 'um modelo humanoide 3d respresentando o autor do portifolio'

const im1 = `Sou de uma cidade do interior de São Paulo chamada Miguelopolis, hoje aos ${year} anos moro com a minha família em São Joaquim da barra.`

const im2 = `Quando criança eu amava quebrar os meus brinquedos para intender como eles funcionavam, aprendia que os motores do meu carrinho de controle remoto eram responsáveis por fazê-lo andar, como os ímãs interagiam com o metal, como era complexa aquela plaquinha verde cheia de fios.`

const im3 = `Na minha pré-adolescência procurei novos desafios, um dos meus passatempos favoritos eram jogos de quebra cabeça, recordo-me muito bem de um chamado Strata (que consistia em usar fitas na ordem correta para passar de fase), desafiava-me fazer testes de QI gratuitos na internet regularmente, eu acreditava que se eu fosse inteligente as pessoas gostariam de mim.`

const im4 = `Atualmente Me formando como desenvolvedor web Full Stack pela @Trybe. Onde desenvolvi as minhas hards skills e aprimorei as minhas habilidades de soft skils.`

const im5 = `Sempre fui uma pessoa muito calma, cooperativa, curiosa e introvertida. A minha filosofia de vida sempre foi deixar em aberto a hipótese de eu estar errado. Estou sempre de mente aberta para conhecer pessoas e culturas novas.`

const im6 = `Também sou uma pessoa muito caprichosa, sempre foi difícil entregar algo que eu não considerasse excelente.`

const i_am = [im1, im2, im3, im4, im5, im6, ]

export {
  img_description,
  i_am,
}

console.log(year)