import { cardProject } from '../../../../types/ReacProps'
import img from './calorias.png'

export const AppCalorias: cardProject = {
	image: {image: img, desc: 'Print montrando a pagina'},
	title: 'Aplicativo de calorias',
	text: [ 'Um aplicativo que fiz para minha namorada' ],
	site: 'https://calories-tracker-olive.vercel.app/',
	repo: 'https://github.com/vinicius-mns/Calories-Tracker',
	stacks: [
		{
			image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png',
			desc: 'React Native'
		},
		{
			image: 'https://iconape.com/wp-content/files/nb/369262/png/369262.png',
			desc: 'CSS'
		}
	]
}