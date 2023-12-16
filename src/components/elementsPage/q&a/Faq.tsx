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
					<div className='w-3/4 text-2xl font-bold'>
						<div className=' bg-gray-100 flex justify-between px-4 py-10'>
							<p>{el.question}</p>
							<button className='rounded-full bg-gray-300 w-6 h-6 flex justify-center items-center pb-1' onClick={() => handleClick(index)}>+</button>
						</div>
						{isAnswer.id === index && isAnswer.status ? (
							<div className='bg-gray-300 w-full py-10 px-4'>{el.answer}</div>
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
