import { FC, useEffect, useState } from 'react'
import { ICards } from '@/interfaces/news.interface'
import Cards from '@/components/elementsPage/cards/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/GlobalRedux/store'
import { getCards, setNotErrorNews } from '@/GlobalRedux/Features/pagination/paginationSlice'

const NewsScreen: FC<ICards> = ({ cards }) => {


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
		dispatch(getCards({ page: 1, pageSize: 6 }))
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
		if (cardNews.errorNews) {
			setPageCur({ ...page, page: 1 })
			dispatch(setNotErrorNews(false))
		}
	}, [cardNews])

	useEffect(() => {
		dispatch(getCards(pageCur))
	}, [pageCur.page])



	return (
		<>
			<div className='w-full flex flex-col items-center mt-20 mb-16 text-center'>
				<h1 className='text-2xl font-bold laptop:mb-10 mb-2'>Жанылыктар</h1>
				<Cards cards={cardNews.newsCards} />
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
						disabled={cardNews.errorNews}
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
		</>
	)
}

export default NewsScreen