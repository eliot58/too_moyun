import Layout from '@/components/layouts/Layout'
import Malymattar from '@/components/screens/malymattar/Malymattar'
import { ICardNews, ICardsData } from '@/interfaces/cardNews.interface'
import { IFaqs } from '@/interfaces/faq.interface'
import { CardNewsService } from '@/services/cardNewsData.service'
import { FaqService } from '@/services/faq.service'
import { NextPage } from 'next'
const MalymattarPage: NextPage<IFaqs> = ({faqs}) => {
	return <Layout>
		<Malymattar faqs={faqs}/>
	</Layout>
}

export async function getStaticProps() {
	const faqs = await FaqService.getFaq()
	return {
		props: { faqs },
		revalidate: 10,
	}
}



export default MalymattarPage