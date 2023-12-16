import Layout from '@/components/layouts/Layout'
import MalymattarPages from '@/components/screens/mallymattarPages/MalymattarPages'
import { IResult } from '@/interfaces/cardNews.interface'
import { CardNewsService } from '@/services/cardNewsData.service'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const MalymattarPage: NextPage<IResult> = (props) => {
	const {query} = useRouter()

	const newId = query.id === undefined ? query.id : parseInt(query.id.toString())
	
	return <Layout>
		<MalymattarPages id={newId === undefined ? 1 : newId}/>
		<h1>{}</h1>
	</Layout>
}

export async function getStaticPaths() {
	const cardNews = await CardNewsService.getCardNews(1,2)
	return{
		paths: cardNews.results.map(card=>({
			params: {
				id:card.id.toString(),
			}
		})),
		fallback: 'blocking'
	}
}

export async function getStaticProps() {
	const results = await CardNewsService.getCardNewsOne(1, 1)
	return {
		props: { results },
		revalidate: 10,
	}
}


export default MalymattarPage