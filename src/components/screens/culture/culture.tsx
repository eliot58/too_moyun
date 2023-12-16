import { ICulture, ICultureData } from '@/interfaces/culture.interface'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import { FC } from 'react'

const Culture: FC<ICultureData> = ({culture}) => {
	
	return (
		<>
			<div className='bg-gray-200'>
				<div className='flex laptop:flex-row flex-col justify-around'>
					<div className='h-500 laptop:w-555 w-full mb-16'>
						<Carousel slideInterval={5000}>
							{culture.images.map((el)=>{
								return(
									<Image src={`https://api.toomoyun.kg${el.file}`} width={555} height={500} alt='...' />
								)
							})}
						</Carousel>
					</div>
					<h2 className='text-4xl font-bold flex items-center laptop:w-1/4 w-full laptop:justify-start justify-center laptop:mb-0 mb-5'>
						Маданияты
					</h2>
				</div>
				<div className='laptop:mx-28 mx-4 pb-32 laptop:text-start text-center'>
					<p>
						{culture.description}
					</p>
				</div>
			</div>
		</>
	)
}

export default Culture
