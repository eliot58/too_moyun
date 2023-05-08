import Layout from '@/components/layouts/Layout'
import NewPageId from '@/components/screens/news/NewPageId'
import { IResult } from '@/interfaces/cardNews.interface'
import { NewsService } from '@/services/newsData.service'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const NewsPageId: NextPage<IResult> = (props) => {
	const {query} = useRouter()

	const newId = query.id === undefined ? query.id : parseInt(query.id.toString())
	
	return <Layout>
		<NewPageId id={newId === undefined ? 1 : newId}/>
	</Layout>
}
export async function getStaticPaths() {
	const cardNews = await NewsService.getNewsOne(1,6)
	return{
		paths: cardNews.map(card=>({
			params: {
				id:card.id.toString(),
			}
		})),
		fallback: 'blocking'
	}
}

export async function getStaticProps() {
	const results = await NewsService.getSix(1, 1)
	return {
		props: { results },
		revalidate: 10,
	}
}


export default NewsPageId