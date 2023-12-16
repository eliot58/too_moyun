import Layout from '@/components/layouts/Layout'
import Culture from '@/components/screens/culture/culture'
import { ICultureData } from '@/interfaces/culture.interface'
import { CultureService } from '@/services/culture.service'
import { NextPage } from 'next'

const СulturePage: NextPage<ICultureData> = ({culture}) => {
	return (
		<Layout>
			<Culture culture={culture} />
		</Layout>
	)
}


export async function getStaticProps() {
  const culture = await CultureService.getCulture();
  return {
    props: {culture},
    revalidate: 10,
  }
}

export default СulturePage
