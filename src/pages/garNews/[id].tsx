import Layout from '@/components/layouts/Layout'
import GarPageId from '@/components/screens/news/GarPageId'
import { IResult } from '@/interfaces/cardNews.interface'
import { GarService } from '@/services/gar.service'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const GarNewsId: NextPage<IResult> = (props) => {
	const {query} = useRouter()

	const newId = query.id === undefined ? query.id : parseInt(query.id.toString())
	
	return <Layout>
		<GarPageId id={newId === undefined ? 1 : newId}/>
	</Layout>
}
export async function getStaticPaths() {
	const cardNews = await GarService.getGarOne(1,6)
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
	const results = await GarService.getGarCards(1, 1)
	return {
		props: { results },
		revalidate: 10,
	}
}


export default GarNewsId