import Layout from '@/components/layouts/Layout'
import { getFirstGallery } from '@/GlobalRedux/Features/firstGetData/firstGetDataSlice'
import {
	getGallery,
	setNotErrorGallery,
} from '@/GlobalRedux/Features/pagination/paginationSlice'
import { AppDispatch, RootState } from '@/GlobalRedux/store'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PhotoGallery: FC = () => {
	const dispatch = useDispatch<AppDispatch>()

	const cardNews = useSelector((state: RootState) => state.pagination)

	const [page, setPage] = useState({
		page: 1,
		pageSize: 6,
	})

	const [pageCur, setPageCur] = useState({
		page: 1,
		pageSize: 6,
	})

	useEffect(() => {
		dispatch(getGallery({ page: 1, pageSize: 4 }))
	}, [])

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
	useEffect(() => {
		if (cardNews.errorGallery) {
			setPageCur({ ...page, page: 1 })
			dispatch(setNotErrorGallery(false))
		}
	}, [cardNews])

	useEffect(() => {
		dispatch(getGallery(pageCur))
	}, [pageCur.page])

	return (
		<>
			<div className='laptop:px-36 px-5'>
				<div className='flex laptop:flex-row flex-col flex-wrap mb-32'>
					{cardNews.gallery.results.map(el => {
						return (
							<div className='laptop:w-1/3 w-full flex justify-center mb-10'>
								<Image
									className='w-284 h-284 rounded-xl'
									src={el.photo}
									alt=''
									width={284}
									height={284}
								/>
							</div>
						)
					})}
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
							disabled={cardNews.errorGar}
							onClick={() => setPageCur({ ...page, page: pg.num })}
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
		</>
	)
}

export default PhotoGallery
