import Layout from '@/components/layouts/Layout'
import { FC } from 'react'
import GoogleMapReact from 'google-map-react'
import { IMapContainer } from '@/interfaces/map.interface'
import Image from 'next/image'

const Map: FC<IMapContainer> = ({map}) => {
	return <Layout>

		<div className='laptop:h-screen h-auto w-full text-center flex flex-col items-center'>
			<h1 className='text-xl text-red-600 font-bold mb-4 laptop:mb-4'>Дареги</h1>
			<h1 className='text-base font-bold laptop:mb-10 mb-2 text-cardColor'>{map.description}</h1>
			<div className='w-full flex justify-center'>
				<Image className='w-855 h-500' src={`https://api.toomoyun.kg${map.photo}`} alt='' width={800} height={500}/>
			</div>
    </div>
	</Layout>
}

export default Map