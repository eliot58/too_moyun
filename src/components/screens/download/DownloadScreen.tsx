import Layout from '@/components/layouts/Layout'
import { IDownloads } from '@/interfaces/download.interface'
import { FC } from 'react'

const DownloadScreen: FC<IDownloads> = ({ files }) => {


	const styleSpace = files[0] === undefined ? `laptop:px-32 px-5 mb-500` : `laptop:px-32 px-5 mb-10`

	console.log(files[0] === undefined);
	

	return (
		<Layout>
			<div className={styleSpace}>
				<h1 className='text-3xl font-bold laptop:mb-10 mb-2 text-red-600 text-center'>Токтомдор</h1>
				{files.map(el => {
				return <div className='flex w-full justify-between bg-gray-100 py-3 px-16 font-bold items-center rounded-2xl mb-4'>
					<a href={el.file}><p className='text-xl text-cardColor hover:underline'>{el.title}</p></a>
					<div className='bg-green-500 flex justify-center items-center rounded-2xl hover:bg-green-700'>
						<a className='text-white text-base py-1 px-3' href={el.file}>Көчүрүү <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-download inline-block" viewBox="0 0 16 16">
							<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
							<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
						</svg></a>
					</div>
				</div>
			})}
			</div>
			
		</Layout>
	)
}

export default DownloadScreen
