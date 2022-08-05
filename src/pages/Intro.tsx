import image from '../midia/saudacao.gif'

export default function Intro() {
  return(
    <div className='intro blur'>
      <div className='circle blur'>
          <img className='avatar' src={image} alt='boneco modelo 3d' />
      </div>
      <div>
        <h2>Olá, me chamo <strong>Vinicius</strong>. Seja bem vindo ao meu portifolio</h2>
        <p>Ali ao lado tem uma barra de navegação, use ela para me conhecer melhor</p>
        <p>{'<<<<<<<<<<<<'}</p>
      </div>
    </div>
  )
}