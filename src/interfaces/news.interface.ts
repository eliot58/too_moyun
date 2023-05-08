export interface IResult{
	id: number
	img: string
	title: String
	text: String
}


export interface ICardSize{
	page: number
	pageSize:number
}

export interface INews{
	count: Number
	next: Number
	pervious: Number
	results: IResult[]
}


export interface ICards{
	cards: INews
}