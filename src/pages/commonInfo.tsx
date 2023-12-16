import Layout from '@/components/layouts/Layout'
import CommonInfo from '@/components/screens/commonInfo/CommonInfo'
import MalymattarPages from '@/components/screens/mallymattarPages/MalymattarPages'
import { CommonInfoContainer } from '@/interfaces/common-info.interface'
import { CommonInfoService } from '@/services/commonInfo.service'
import { NextPage } from 'next'

// const CommonInfoPage: NextPage = () => {
// 	return <Layout>
// 			<MalymattarPages/>
// 	</Layout>
// }

const CommonInfoPage: NextPage<CommonInfoContainer> = (props) => {
	return <div>
			<CommonInfo commonInfo={props.commonInfo}/>
	</div>
}

export async function getStaticProps() {
  const commonInfo = await CommonInfoService.getCommonInfo();
  return {
    props: {commonInfo},
    revalidate: 10,
  }
}

export default CommonInfoPage