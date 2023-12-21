import DropdownFooter from '@/components/elementsPage/downdrop/DropdownFooter'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Footer: FC = () => {
	const linkStyle = 'laptop:text-lg text-sm laptop:w-1/2 laptop:h-1/3 w-1/3 h-5'

	const firstLinkStyle = 'laptop:text-lg text-sm laptop:w-1/2 laptop:h-10 w-1/3 h-5'
	return (
		<footer className='bg-footerBg flex laptop:flex-row flex-col w-full laptop:pt-16 pt-2 text-white laptop:pl-44 font-light laptop:pb-14 pl-5 pb-10 laptop:justify-start justify-center '>
			<div className='flex flex-col items-center laptop:w-72 w-full text-lg text-center laptop:mr-20 mr-0 laptop:mb-0 mb-6'>
				<Image className='laptop:mb-0 mb-6' src='/logo.png' alt='' width={67} height={67} />
				<p className='laptop:px-0 px-16'>“Төө-Моюн” айылдык аймагынын расмий баракчасы</p>
			</div>
			<div className='flex laptop:flex-col flex-row flex-wrap laptop:h-36 h-20 laptop:justify-between justify-start laptop:w-96 w-full laptop:mt-6 mt-0 laptop:text-start text-center'>
				<Link href='/' className={firstLinkStyle}>
					Башкы бет
				</Link>
				<DropdownFooter/>
				<Link href='/news' className={linkStyle}>
					Жарыялар
				</Link>
				<Link href='/malymattar' className={linkStyle}>
					Маалыматтар
				</Link>
				<Link href='/download' className={linkStyle}>
					Токтомдор
				</Link>
				<Link href='/gallery' className={linkStyle}>
					Сүрөттөр
				</Link>
			</div>
			<div className='laptop:mt-6 mt-0 laptop:ml-20 ml-0 laptop:self-start self-center laptop:text-start text-center laptop:w-64'>
				<p className='text-lg'>Дареги</p>
				<p className='text-lg font-bold'>Төө-Моюн өрөөнү Араван району (Кызыл-Кыя) 30 км</p>
			</div>
		</footer>
	)
}

export default Footer
