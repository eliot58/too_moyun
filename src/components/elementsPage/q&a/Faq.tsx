import { IFaqs } from '@/interfaces/faq.interface'
import { FC, useState } from 'react'

const Faq: FC<IFaqs> = ({ faqs }) => {
	const [isAnswer, setIsAnswer] = useState({ id: -1, status: false })

	const handleClick = (index: number) => {
		if (index === isAnswer.id) {
			setIsAnswer({ id: -1, status: false })
		} else if (index !== isAnswer.id) {
			setIsAnswer({ id: index, status: true })
		}
	}

	return (
		<div className='w-full flex flex-col items-center mb-32'>
			{faqs.map((el, index) => {
				return (
					<div className='w-3/4 mb-4 text-[#4E477A]'>
						<div className='bg-[#f7f5f5] text-2xl font-bold flex justify-between px-4 py-10'>
							<p>{el.question}</p>
							<button className='rounded-full bg-gray-300 w-6 h-6 flex justify-center items-center pb-1' onClick={() => handleClick(index)}>+</button>
						</div>
						{isAnswer.id === index && isAnswer.status ? (
							<div className='text-lg text-red-700 font-bold bg-[#f7f5f5] w-full pb-10 pl-10 pr-4'>{el.answer}</div>
						) : (
							<></>
						)}
					</div>
				)
			})}
		</div>
	)
}

export default Faq
