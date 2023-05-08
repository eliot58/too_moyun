import { FC } from 'react'

const Statistic: FC = () => {
	return (
		<div className='bg-statisticBg w-full text-white text-center laptop:px-28 laptop:pt-20 pt-10'>
			<h2 className='text-2xl mb-8 font-bold'>Биздин айылда</h2>
			<div className='flex laptop:flex-row flex-col laptop:justify-between laptop:items-start items-center'>
				<div className='laptop:w-1/5 w-4/5 mb-20'>
					<p className='text-2xl font-bold'>
						18800
					</p>
					<p className='text-xl'>Туруктуу калктын саны</p>
				</div>
				<div className='laptop:w-1/5 w-4/5 mb-20'>
					<p className='text-2xl font-bold'>7</p>
					<p className='text-xl'>Айылдардын саны</p>
				</div>
				<div className='laptop:w-1/5 w-4/5 mb-20'>
					<p className='text-2xl font-bold'>
						4191200км2
					</p>
					<p className='text-xl '>Жалпы территориясы</p>
				</div>
				<div className='laptop:w-1/5 w-4/5 mb-20'>
					<p className='text-2xl font-bold'>
						11
					</p>
					<p className='text-1xl'>Атайын орто билим берүү</p>
				</div>
			</div>
		</div>
	)
}

export default Statistic
