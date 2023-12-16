import Cards from '@/components/elementsPage/cards/Cards'
import { ICards } from '@/interfaces/news.interface'
import { FC } from 'react'

const News: FC<ICards> = ({cards}) => {

	return <div className='w-full flex flex-col items-center mt-20 mb-16 text-center'>
		<h1 className='text-2xl font-bold laptop:mb-10 mb-2'>Жанылыктар</h1>
		<Cards cards={cards}/>
	</div>
}

export default News