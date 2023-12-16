
export interface IImageCulture{
	id: number
	file:string
	culture: number
}


export interface ICulture{
	description:string
	images: IImageCulture[]
}

export interface ICultureData{
	culture: ICulture
}