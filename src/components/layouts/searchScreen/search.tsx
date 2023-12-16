import {
	getAllSearch,
	setNotErrorSearch,
} from '@/GlobalRedux/Features/search/searchSlice'
import { AppDispatch, RootState } from '@/GlobalRedux/store'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Search: FC = () => {
	const adsArr: any[] = []
	const newsArr: any[] = []
	const infoArr: any[] = []
	const galleryArr: any[] = []
	const [ads, setAds] = useState(adsArr)

	const [news, setNews] = useState(newsArr)

	const [info, setInfo] = useState(infoArr)

	const [gallery, setGallery] = useState(galleryArr)

	const dispatch = useDispatch<AppDispatch>()

	const findContent = useSelector((state: RootState) => state.search)

	const [page, setPage] = useState({
		q: findContent.searchWord,
		page: 1,
		pageSize: 6,
	})

	const [pageCur, setPageCur] = useState({
		q: findContent.searchWord,
		page: 1,
		pageSize: 6,
	})

	const pages = [
		{ num: page.page },
		{ num: page.page + 1 },
		{ num: page.page + 2 },
		{ num: page.page + 3 },
	]

	function Next() {
		setPage({ ...page, page: ++page.page })
	}
	function back() {
		page.page > 1 && setPage({ ...page, page: --page.page })
	}

	const f = () => {
		setNews(
			findContent.searchAll.result.filter((el: any) => el.type === 'news')
		)
		setAds(findContent.searchAll.result.filter((el: any) => el.type === 'ads'))
		setInfo(
			findContent.searchAll.result.filter((el: any) => el.type === 'info')
		)
		setGallery(
			findContent.searchAll.result.filter((el: any) => el.type === 'gallery')
		)
	}

	useEffect(() => {
		if (findContent.errorSearch) {
			setPageCur({ ...page, page: 1 })
			dispatch(setNotErrorSearch(false))
		}
		f()
		
	}, [findContent])

	useEffect(() => {
		console.log(pageCur.q);
		
		dispatch(getAllSearch(pageCur))
	}, [pageCur.page])

	// console.log(findContent.searchAll);

	return (
		<div className='flex flex-col items-center'>
			<div
				className={
					findContent.searchAll.result.length === 0
						? 'h-screen'
						: 'h-auto flex justify-center mb-20'
				}
			>
				<div className='flex laptop:flex-row flex-col laptop:w-1220 w-full flex-wrap laptop:justify-between text-center text-2xl font-bold text-cardColor'>
					{news.map(el => {
						return (
							<div className='flex flex-col laptop:w-388 w-full laptop:mt-6 laptop:mb-0 mb-6 px-3'>
								<Image
									src={`http://92.255.111.47${el.img}`}
									width={388}
									height={388}
									alt=''
								/>
								<Link href={`/newsPage/${el.id}`}>{el.title}</Link>
							</div>
						)
					})}
					{ads.map(el => {
						return (
							<div className='flex flex-col laptop:w-388 w-full laptop:mt-6 laptop:mb-0 mb-6 px-3'>
								<Image
									src={`http://92.255.111.47${el.img}`}
									width={388}
									height={388}
									alt=''
								/>
								<Link href={`/newsPage/${el.id}`}>{el.title}</Link>
							</div>
						)
					})}

					{info.map(el => {
						return (
							<div className='flex flex-col px-10 text-white laptop:w-388 w-full h-364 rounded-lg justify-center relative pt-32 mb-10 laptop:mt-6'>
								<div className='absolute inset-0'>
									<Image
										className='h-364 rounded-xl'
										src={`http://92.255.111.47${el.img}`}
										alt=''
										width={388}
										height={388}
									/>
								</div>
								<div className='laptop:w-388 w-full h-364 bg-black opacity-50 z-9 absolute inset-0 rounded-2xl'></div>
								<div className='flex flex-col justify-center mb-24 h-1/4 z-10 relative'>
									<h1 className='text-3xl font-bold'>{el.title}</h1>
									<p>{el.sub_title}</p>
								</div>
								<Link className='z-10' href={`/malymattar/${el.id}`}>Кенен билүү</Link>
							</div>
						)
					})}
					{gallery.map(el => {
						return (
							<div className='laptop:w-364 w-full flex justify-center laptop:mb-0 mb-10 mt-5'>
								<Image
									className='w-364 h-364'
									src={`http://92.255.111.47${el.photo}`}
									alt=''
									width={388}
									height={388}
								/>
							</div>
						)
					})}
				</div>
			</div>
			<div className='flex w-full justify-center mb-20'>
				<div className='flex rounded-lg'></div>
				<button
					onClick={back}
					className='h-10 border border-r-0 border-gray-400
               px-4 rounded-l-lg hover:border-gray-400 hover:bg-gray-400 hover:text-white'
				>
					<svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
						<path
							d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
							clip-rule='evenodd'
							fill-rule='evenodd'
						></path>
					</svg>
				</button>
				{pages.map((pg, i) => (
					<button
						className={`h-10 border border-r-0 border-gray-400 w-12 ${
							pageCur.page === pg.num && 'bg-gray-400 text-white'
						}`}
						key={i}
						disabled={findContent.errorSearch}
						onClick={() => setPageCur({ ...page, page: pg.num, q:findContent.searchWord})}
					>
						{pg.num}
					</button>
				))}
				<button
					onClick={Next}
					className='h-10 border border-l-1 border-gray-400
					px-4 rounded-r-lg hover:border-gray-400 hover:bg-gray-400 hover:text-white'
				>
					<svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
						<path
							d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
							clip-rule='evenodd'
							fill-rule='evenodd'
						></path>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default Search
