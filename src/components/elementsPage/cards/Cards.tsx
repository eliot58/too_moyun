import { ICards } from '@/interfaces/news.interface'
import Image from 'next/image'
import { FC, useState } from 'react'

import { useDispatch } from 'react-redux'

import { setValue, setCount } from '@/GlobalRedux/Features/pagination/paginationSlice'
import Link from 'next/link'

const Cards: FC<ICards> = ({cards}) => {
	return (
		<div className='flex laptop:flex-row flex-col laptop:w-1220 w-full flex-wrap laptop:justify-between text-center text-2xl font-bold text-cardColor'>
			{cards.results.map(el => {
				return (
					<div className='flex flex-col laptop:w-388 w-full laptop:mt-6 laptop:mb-0 mb-6 px-3'>
						<Image
							src={el.img}
							width={388}
							height={388}
							alt=''
						/>
						<Link className='text-lg' href={`/newsPage/${el.id}`}>
							{el.title}
						</Link>
					</div>
				)
			})}
			{/* <button onClick={handleChange}>Click</button> */}
		</div>
	)
}

export default Cards
