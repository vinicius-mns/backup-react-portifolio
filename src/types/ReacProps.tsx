export type contacts = {
	resolve: 'inIntro' | 'inApp',
}

export type itemOption = {
	text: string,
  click: () => void
}

export type oQueEuSei = {
	avatar: string
}

export type cardProject = {
	image: {image: string, desc: string},
	title: string,
	text: string[],
	repo?: string,
	site?: string,
	stacks: {image: string, desc: string}[],
}