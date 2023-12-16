import Layout from '@/components/layouts/Layout'
import GarScreen from '@/components/screens/news/GarScreen'
import NewsScreen from '@/components/screens/news/NewsScreen'
import { ICardNews } from '@/interfaces/cardNews.interface'
import { ICardGar } from '@/interfaces/gar.interface'
import { ICards } from '@/interfaces/news.interface'
import { GarService } from '@/services/gar.service'
import { NewsService } from '@/services/newsData.service'
import { NextPage } from 'next'

const NewsPage: NextPage<ICards> =(props) =>{
	return <Layout>
		<NewsScreen cards={props.cards}/>
	</Layout>
}


export async function getStaticProps() {
  const cards = await NewsService.getSix(1,6)
  return {
    props: {cards},
    revalidate: 10,
  }
}
export default NewsPage