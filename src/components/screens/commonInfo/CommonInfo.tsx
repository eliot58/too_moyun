import Layout from '@/components/layouts/Layout'
import { CommonInfoContainer } from '@/interfaces/common-info.interface'
import Image from 'next/image'
import { FC, useState } from 'react'

const CommonInfo: FC<CommonInfoContainer> = ({ commonInfo }) => {
	return (
		<Layout>
			<div className='text-center w-full mb-16 pt-14'>
				<h1 className='laptop:text-4xl text-base text-red-600 font-bold laptop:mb-12 mb-3'>
					Жалпы маалымат
				</h1>
				<p className='text-cardColor laptop:text-2xl text-base font-bold'>
					Айыл өкмөтү боюнча жалпы маалымат
				</p>
			</div>
			<div className='flex laptop:flex-row flex-col w-full laptop:px-24 px-14 justify-between laptop:mb-32 mb-10 laptop:h-auto h-450'>
				<div className='flex flex-col rounded-2xl laptop:w-28p w-full laptop:text-start text-center laptop:pt-9 pt-6 border laptop:pl-10 pl-0'>
					<p className='text-cardColor laptop:text-5xl text-base font-bold laptop:mb-6 mb-0'>
						{commonInfo.territory}
						<span className='text-commonInfo'> км</span>
					</p>
					<h4 className='laptop:text-2xl text-base text-cardColor font-bold mb-2'>
						Жалпы территориясы
					</h4>
					<p className='text-newsColor laptop:text-lg text-sm laptop:mb-10 mb-6 laptop:w-80 w-full'>
						Айыл өкмөтү боюнча жалпы маалымат
					</p>
				</div>
				<div className='flex flex-col rounded-2xl laptop:w-28p w-full laptop:text-start text-center laptop:pt-9 pt-6 border laptop:pl-10 pl-0'>
					<p className='text-cardColor laptop:text-5xl text-base font-bold laptop:mb-6 mb-0'>
						{commonInfo.number_of_villages}
						<span className='text-commonInfo'> бирдик</span>
					</p>
					<h4 className='laptop:text-2xl text-base text-cardColor font-bold mb-2'>
						Айылдардын саны
					</h4>
					<p className='text-newsColor laptop:text-lg text-sm laptop:mb-10 mb-6 laptop:w-80 w-full'>
						Айыл өкмөтү боюнча жалпы маалымат
					</p>
				</div>
				<div className='flex flex-col rounded-2xl laptop:w-28p w-full laptop:text-start text-center laptop:pt-9 pt-6 border laptop:pl-10 pl-0'>
					<p className='text-cardColor laptop:text-5xl text-base font-bold laptop:mb-6 mb-0'>
						{commonInfo.number_of_smokes}
						<span className='text-commonInfo'> бирдик</span>
					</p>
					<h4 className='laptop:text-2xl text-base text-cardColor font-bold mb-2'>
						Түтүндөрдүн саны
					</h4>
					<p className='text-newsColor laptop:text-lg text-sm laptop:mb-10 mb-6 laptop:w-80 w-full'>
						Айыл өкмөтү боюнча жалпы маалымат
					</p>
				</div>
			</div>
			
			<div className='w-full mb-36 laptop:px-24 px-10 flex justify-between laptop:flex-row flex-col laptop:h-600'>
				<div className='flex flex-col justify-center laptop:w-334 w-full laptop:text-start text-center laptop:mb-0 mb-20'>
					<h4 className='laptop:text-2xl text-base font-bold text-cardColor'>
						Жогорку жана атайын орто билим берүү мекемелери
					</h4>
				</div>
				<div className='flex flex-wrap flex-row laptop:w-1/2 w-full laptop:text-start text-center'>
					<div className='flex flex-col justify-center items-center laptop:h-300 h-48 w-45% border-r-2 border-b-2'>
						<p className='laptop:text-4xl text-base text-cardColor font-bold mb-2'>
							{commonInfo.avg_learn}
						</p>
						<p className='laptop:text-xl text-sm text-cardColor'>Атайын орто билим берүү</p>
					</div>
					<div className='flex flex-col justify-center items-center laptop:h-300 h-48 w-45% border-b-2'>
						<p className='laptop:text-4xl text-base text-cardColor font-bold mb-2'>
							{commonInfo.licey}
						</p>
						<p className='laptop:text-xl text-sm  text-cardColor'>Лицей </p>
					</div>
					<div className='flex flex-col justify-center items-center laptop:h-300 h-48 w-45% border-r-2'>
						<p className='laptop:text-4xl text-base text-cardColor font-bold mb-2'>
							{commonInfo.teacher_number}
						</p>
						<p className='laptop:text-xl text-sm text-cardColor'>Мугалимдердин саны</p>
					</div>
					<div className='flex flex-col justify-center items-center laptop:h-300 h-48 w-45%'>
						<p className='laptop:text-4xl text-base text-cardColor font-bold mb-2'>
							{commonInfo.students_number}
						</p>
						<p className='laptop:text-xl text-sm  text-cardColor'>
							Тарбиялануучу балдардын саны
						</p>
					</div>
				</div>
			</div>

			<div className='mb-40'>
				<div className='flex flex-col justify-center items-center mb-2'>
					<h2 className='laptop:text-2xl text-base text-cardColor font-bold mb-6'>
						Жеңилдиктерге укугу бар жарандар
					</h2>
					<Image className='laptop:w-20 laptop:h-20 w-12 h-12' src='/people.png' alt='' width={89} height={89} />
				</div>
				<div className='w-full flex laptop:flex-row flex-col laptop:justify-around laptop:items-start items-center laptop:px-0 px-10'>
					<div className='flex flex-col rounded-2xl laptop:w-388 w-full pt-9 border laptop:pl-10 px-3 laptop:mb-0 mb-10 laptop:text-start text-center laptop:pb-0 pb-10'>
						<p className='text-cardColor laptop:text-5xl text-base font-bold mb-6'>
							{commonInfo.ogan} адам
						</p>
						<h4 className='laptop:text-2xl text-sm text-cardColor font-bold mb-2'>
							Ооган согушунун ардагерлери
						</h4>
					</div>
					<div className='flex flex-col rounded-2xl laptop:w-388 w-full pt-9 border laptop:pl-10 px-3 laptop:mb-0 mb-10 laptop:text-start text-center laptop:pb-0 pb-10'>
						<p className='text-cardColor laptop:text-5xl text-base font-bold mb-6'>
							{commonInfo.chernobyl} адам
						</p>
						<h4 className='laptop:text-2xl text-sm text-cardColor font-bold laptop:mb-16 mb-0'>
							Чернобыль кырсыгына катышкандар
						</h4>
					</div>
				</div>
			</div>



			<div className='text-center laptop:px-24 px-10 mb-64'>
				<div className='flex flex-col justify-center items-center'>
					<Image
						src='/health.png'
						alt=''
						width={62}
						height={62}
						className='mb-2'
					/>
					<h2 className='text-2xl text-cardColor font-bold mb-20'>
						Саламаттыкты сактоо
					</h2>
				</div>




				<div className='flex w-full laptop:flex-row flex-col justify-between mb-32'>
					<div className='flex flex-col rounded-2xl laptop:w-23p w-full border justify-center h-48 px-8 laptop:mb-0 mb-20'>
						<p className='text-cardColor text-4xl font-bold mb-2'>
							{commonInfo.hospital}
						</p>
						<h4 className='text-lg text-newsColor mb-2'>Ооруканалар</h4>
					</div>
					<div className='flex flex-col rounded-2xl laptop:w-23p w-full border justify-center h-48 px-8 laptop:mb-0 mb-20'>
						<p className='text-cardColor text-4xl font-bold mb-2'>
							{commonInfo.family_medicine}
						</p>
						<h4 className='text-lg text-newsColor mb-2'>
							Үй-бүлөлүк дарыгерлер тобу
						</h4>
					</div>
					<div className='flex flex-col rounded-2xl laptop:w-23p w-full border justify-center h-48 px-8 laptop:mb-0 mb-20'>
						<p className='text-cardColor text-4xl font-bold mb-2'>
							{commonInfo.fap}
						</p>
						<h4 className='text-lg text-newsColor mb-2'>ФАП</h4>
					</div>
					<div className='flex flex-col rounded-2xl laptop:w-23p w-full border justify-center h-48 px-8 laptop:mb-0 mb-20'>
						<p className='text-cardColor text-4xl font-bold mb-2'>
							{commonInfo.apteka}
						</p>
						<h4 className='text-lg text-newsColor mb-2'>Аптекалар</h4>
					</div>
				</div>
			</div>




			<div className='laptop:px-24 px-5 mb-32'>
				<h2 className='text-3xl text-statisticBg text-center font-bold mb-32 '>
					Негизги көрсөткүчтөр
				</h2>

				<div className='flex laptop:flex-row flex-col-reverse justify-between'>
					<div className='laptop:w-1/2 w-full bg-cardColor px-12 flex flex-col justify-center laptop:h-600 h-64 font-bold text-white rounded-xl mr-7 laptop:text-start text-center laptop:mt-0 mt-10'>
						<h3 className='laptop:text-4xl text-base mb-6'>
							Жакынкы темир жол станциясына чейинки аралык, км менен:
						</h3>
						<p className='laptop:text-7xl text-lg'>{commonInfo.railroad} км</p>
					</div>

					<div className='text-cardColor flex flex-wrap justify-between font-bold laptop:h-600 h-300 laptop:w-1/2 w-full '>
						<div className='flex flex-col w-45% laptop:justify-end laptop:h-284 h-36 border px-3 rounded-xl justify-center'>
							<p className='laptop:text-xl text-base text-center'>
								Райондун борборуна чейинки аралыгы, км менен
							</p>
							<p className='laptop:text-4xl text-base laptop:ml-6 laptop:mb-4 laptop:text-start text-center justify-center'>{commonInfo.district} км</p>
						</div>
						<div className='flex flex-col w-45% laptop:justify-end laptop:h-284 h-36 border px-3 rounded-xl justify-center'>
							<p className='laptop:text-xl text-base text-center'>
								Облустун борборуна чейинки аралыгы, км менен:
							</p>
							<p className='laptop:text-4xl text-base laptop:ml-6 laptop:mb-4 laptop:text-start text-center'>{commonInfo.region} км</p>
						</div>
						<div className='flex flex-col w-45% laptop:justify-end laptop:h-284 h-36 border px-3 rounded-xl laptop:self-end self-start justify-center'>
							<p className='laptop:text-xl text-base  text-center'>
								Дениз деңгээлинен бийиктиги, метр менен:
							</p>
							<p className='laptop:text-4xl text-base laptop:ml-6 laptop:mb-4 laptop:text-start text-center'>{commonInfo.sea} м </p>
						</div>
						<div className='flex flex-col w-45% laptop:justify-end laptop:h-284 h-36 border px-3 rounded-xl laptop:self-end self-start justify-center'>
							<p className='laptop:text-xl text-base  text-center'>
								Жакынкы аэропортко чейинки аралык, км менен:
							</p>
							<p className='laptop:text-4xl text-base laptop:ml-6 laptop:mb-4 laptop:text-start text-center'>{commonInfo.airport} км</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default CommonInfo
