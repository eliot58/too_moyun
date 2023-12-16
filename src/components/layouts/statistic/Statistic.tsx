import { FC } from 'react'

const Statistic: FC = () => {
	return (
		<div className='bg-statisticBg w-full text-white text-center laptop:px-28 laptop:pt-24 laptop:pb-12 pt-20'>
			<h2 className='laptop:text-4xl text-lg mb-16'>Биздин айылда</h2>
			<div className='flex laptop:flex-row flex-col laptop:justify-between laptop:items-start items-center'>
				<div className='laptop:w-1/5 w-4/5 mb-20'>
					<p className='laptop:text-4xl text-lg font-bold'>
					18800
					</p>
					<p className='laptop:text-2xl text-sm'>Туруктуу калктын саны</p>
				</div>
				<div className='laptop:w-1/5 w-4/5 mb-20'>
					<p className='laptop:text-4xl text-lg font-bold'>7</p>
					<p className='laptop:text-2xl text-sm'>Айылдардын саны</p>
				</div>
				<div className='laptop:w-1/5 w-4/5 mb-20'>
					<p className='laptop:text-4xl text-lg font-bold'>
					4191200км2
					</p>
					<p className='laptop:text-2xl text-sm '>Жалпы территориясы</p>
				</div>
				<div className='laptop:w-1/5 w-4/5 mb-20'>
					<p className='laptop:text-4xl text-lg font-bold'>
					11
					</p>
					<p className='laptop:text-2xl text-sm'>Атайын орто билим берүү</p>
				</div>
			</div>
		</div>
	)
}

export default Statistic
