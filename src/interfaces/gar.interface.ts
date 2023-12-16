export interface IResult{
	id: number
	img: string
	title: String
	text: String
}


export interface IGar{
	count: Number
	next: Number
	pervious: Number
	results: IResult[]
}


export interface ICardGar{
	cards: IGar
}