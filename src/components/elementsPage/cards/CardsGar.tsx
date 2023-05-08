
import { ICardGar } from '@/interfaces/gar.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const CardsGar: FC<ICardGar> = ({cards}) => {
	return (
		<div className='flex laptop:w-1220 w-full laptop:flex-row flex-col flex-wrap justify-between text-center text-2xl font-bold text-cardColor laptop:px-0 px-3'>
			{cards.results.map(el => {
				return (
					<div className='flex flex-col laptop:w-388 w-full laptop:mt-6 laptop:mb-0 mb-6 px-8'>
						<Link className='text-lg hover:underline' href={`/garNews/${el.id}`}>
						<Image
							className={'rounded-xl'}
							src={el.img}
							width={388}
							height={388}
							alt=''
						/>
							{el.title}
						</Link>
					</div>
				)
			})}
		</div>
	)
}

export default CardsGar
