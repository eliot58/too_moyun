import DownloadScreen from '@/components/screens/download/DownloadScreen'
import { IDownloads } from '@/interfaces/download.interface'
import { DownloadService } from '@/services/download.service'
import { NextPage } from 'next'

const Download: NextPage<IDownloads> = (files) => {
	return <div>
		<DownloadScreen files={files.files}/>
	</div>
}


export async function getStaticProps() {
  const files = await DownloadService.getFile()
  return {
    props: {files},
    revalidate: 10,
  }
}

export default Download