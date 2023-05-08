export interface IResultG{
	id: number
	photo: string
	description: string
}


export interface IGallery{
	count: Number
	next: Number
	pervious: Number
	results: IResultG[]
}


export interface IGalleryData{
	gallery: IGallery
}