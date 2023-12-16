import Map from '@/components/screens/map/Map'
import { IMapContainer } from '@/interfaces/map.interface'
import { MapService } from '@/services/map.service'
import { NextPage } from 'next'

const MapPage: NextPage<IMapContainer> = ({map}) => {
	return <div>
		<Map map={map}/>
	</div>
}



export async function getStaticProps() {
	const map = await MapService.getMap()
	return {
	  props: {map},
	  revalidate: 10,
	}
 }
 
export default MapPage