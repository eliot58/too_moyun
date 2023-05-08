import Faq from '@/components/elementsPage/q&a/Faq'
import { getMalymattar, setNotErrorMalymattar } from '@/GlobalRedux/Features/pagination/paginationSlice'
import { AppDispatch, RootState } from '@/GlobalRedux/store'
import { IFaqs } from '@/interfaces/faq.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Malymattar: FC<IFaqs>= ({faqs}) => {

	const dispatch = useDispatch<AppDispatch>()

	const cardNews = useSelector((state: RootState) => state.pagination)

	const [page, setPage] = useState({
		page: 1,
		pageSize: 3,
	})

	const [pageCur, setPageCur] = useState({
		page: 1,
		pageSize: 3,
	})

	useEffect(() => {
		dispatch(getMalymattar({ page: 1, pageSize: 3 }))
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
		if (cardNews.errorMalymattar) {
			setPageCur({ ...page, page: 1 })
			dispatch(setNotErrorMalymattar(false))
		}
	}, [cardNews])

	useEffect(() => {
		dispatch(getMalymattar(pageCur))
	}, [pageCur.page])


	

	return (
		<>
			<div className='flex flex-col items-center mb-16 laptop:px-0 px-4'>
				<h1 className='laptop:text-3xl text-center text-2xl font-bold text-red-600 mb-4'>
					Төө-Моюн айыл өкмөтү боюнча маалымат
				</h1>
				<p className='text-center laptop:text-lg text-base laptop:w-600 w-full'>
					Бул баракчада ар кандай маалыматтар жайгашкан. Суротторду басып, ал
					жонундо кененирээк билип алсанар болот.
				</p>
			</div>
			<div className='laptop:mx-0 mx-0 flex laptop:flex-row flex-col flex-wrap justify-center laptop:pl-10 pl-0'>
				{cardNews.malymattar.results.map(el => {
					return (
						<div>
							<div className='flex flex-col px-10 text-white laptop:w-555 w-full h-450 rounded-lg justify-center relative pt-32 mb-10'>
								<div className='absolute inset-0'>
									<Image className='h-450 rounded-xl' src={el.img} alt='' width={500} height={450} />
								</div>
								<div className='laptop:w-500 w-full h-450 bg-black opacity-50 z-9 absolute inset-0 rounded-2xl'></div>
								<div className='flex flex-col justify-center mb-24 h-1/4 z-10 relative'>
									<h1 className='text-3xl font-bold'>{el.title}</h1>
									<p>{el.sub_title}</p>
								</div>
								<Link className='z-10 text-lg hover:underline' href={`/malymattar/${el.id}`}>Кенен билүү <svg
									xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
									className="bi bi-link-45deg inline-block" viewBox="0 0 16 16">
									<path
										d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
									<path
										d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
								</svg></Link>
							</div>
						</div>
					)
				})}
				<div className='flex flex-col px-10 text-white laptop:w-555 w-full h-500 rounded-lg justify-center relative pt-32 laptop:mt-0 mt-10'>
							<div className='absolute inset-0'>
								<Image className='h-450 rounded-xl' src='/cardNews3.png' alt='' width={500} height={500} />
							</div>
							<div className='laptop:w-500 w-full h-450 bg-black opacity-50 z-9 absolute inset-0 rounded-2xl'></div>
							<div className='flex flex-col justify-center mb-24 h-1/4 z-10 relative'>
								<h1 className='text-3xl font-bold'>Жалпы маалымат</h1>
								<p className='text-lg'>Билим берүү, Административдик-географиялык жайгашуусу жана башка</p>
							</div>
					<Link className='z-10 text-lg hover:underline' href={`/commonInfo`}>Кенен билүү <svg
						xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
						className="bi bi-link-45deg inline-block" viewBox="0 0 16 16">
						<path
							d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
						<path
							d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
					</svg></Link>
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
						disabled={cardNews.errorMalymattar}
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
			<Faq faqs={faqs}/>
		</>
	)
}

export default Malymattar
