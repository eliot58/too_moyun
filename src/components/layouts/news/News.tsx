import Cards from '@/components/elementsPage/cards/Cards'
import { ICards } from '@/interfaces/news.interface'
import { FC } from 'react'

const News: FC<ICards> = ({cards}) => {

	return <div className='w-full flex flex-col items-center mt-16 mb-12 text-center'>
		<h1 className='text-xl font-bold laptop:mb-7 mb-4 mt-3 text-red-600'>Жанылыктар</h1>
		<Cards cards={cards}/>
	</div>
}

export default News