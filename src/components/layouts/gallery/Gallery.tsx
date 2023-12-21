import { IGallery, IGalleryData, IResultG } from '@/interfaces/gallery.interface'
import { Button } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Gallery: FC<IGalleryData> = ({gallery}) => {
	console.log(gallery.results);
	
	return <div className='text-center laptop:my-24 my-5 flex flex-col items-center'>
		<h2 className='text-2xl font-bold mb-16'>Сүрөттөр</h2>
		<div className='flex laptop:flex-wrap laptop:flex-row flex-col laptop:w-1140 w-full laptop:justify-between justify-start laptop:items-start items-center laptop:h-670 h-auto laptop:mb-16 mb-5'>
			<Image className='laptop:w-750 w-360 h-320' src={gallery.results[0] === null ? '' : gallery.results[0].photo} alt='' width={360} height={320} />
			<Image src={gallery.results[1] === null ? '' : gallery.results[1].photo} alt='' width={360} height={320} />
			<Image className='mt-8' src={gallery.results[1] === null ? '' : gallery.results[1].photo} alt='' width={360} height={320} />
			<Image className='laptop:w-750 w-360 h-320 mt-8' src={gallery.results[0] === null ? '' : gallery.results[0].photo} alt='' width={360} height={320} />
		</div>
		<Link href='/photoGallery' className='w-64 text-xl bg-blue-600 px-2 py-3 rounded-md'>Сүрөттөргө өтүү</Link>
	</div>
}

export default Gallery