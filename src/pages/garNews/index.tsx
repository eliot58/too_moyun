
import Layout from '@/components/layouts/Layout'
import GarScreen from '@/components/screens/news/GarScreen'
import { ICardGar, IGar } from '@/interfaces/gar.interface'
import { GarService } from '@/services/gar.service'
import { NextPage } from 'next'

const GarPage: NextPage<ICardGar> =(props) =>{
	return <Layout>
		<GarScreen cards={props.cards}/>
	</Layout>
}

export async function getStaticProps() {
  const cards = await GarService.getGarCards(1,6)
  return {
    props: {cards},
    revalidate: 10,
  }
}

export default GarPage