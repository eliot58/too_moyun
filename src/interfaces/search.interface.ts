
export interface ISearchGet{
	q:string
	page:number
	pageSize:number
}


export interface ISearchNews{
	id: number
	img: string
	title: string
	text: string
}


export interface ISearchResolve{
	title:string
	file:string
}


export interface ISearchInfo{
	id:number
	title:string
	sub_title:string
	img:string
	text:string
	bottom_title:string
	bottom_text:string
	img_1:string
	img_2:string
	img_3:string
}


export interface ISearchAds{
	id: number
	img: string
	title: string
	text: string
}

export interface ISearchGallery{
	photo: string
	description: string
}

export interface ISearchAll{
	news: ISearchNews[]
	ads: ISearchAds[]
	info:ISearchInfo[]
	resolve:ISearchResolve[]
	gallery:ISearchGallery[]
}


export interface ISearchAllData{
	all: ISearchAll
}

export interface ISearchAdsData{
	adsAll: ISearchAds[]
}


export interface ISearchNewsData{
	newsAll: ISearchNews[]
}


export interface ISearchResolveData{
	resolveAll: ISearchResolve[]
}


export interface ISearchInfoData{
	infoAll:ISearchInfo[]
}


export interface ISearchGalleryData{
	galleryAll:ISearchGallery[]
}