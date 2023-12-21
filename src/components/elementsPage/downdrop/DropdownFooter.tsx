import { useRouter } from 'next/router'
import { FC } from 'react'

const DropdownFooter: FC = () => {
	const router = useRouter()
	const handleChange = (value: string)=>{
		router.push(value);
	}
	
	return (
		<div>
			<div className='relative laptop:w-40 w-28 laptop:text-lg text-sm text-start'>
				<select className='laptop:w-40 w-28 pl-0 pt-0 text-white bg-navColor  border-none outline-none appearance-none focus:border-white text-lg' onChange={event =>handleChange(event.target.value)}>
					<option className='laptop:w-20 w-16' selected disabled>Биз жөнүндө</option>
					<option className='laptop:w-20  w-16' value='/culture'>Маднияты</option>
					<option className='laptop:w-20  w-16' value='/malymattar/4'>Айыл чарбасы</option>
					<option className='laptop:w-20  w-16' value='/map'>Дареги</option>
				</select>
			</div>
		</div>
	)
}

export default DropdownFooter
