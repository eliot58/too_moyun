import axios from 'axios'
import { IMap } from './../interfaces/map.interface';
export const MapService={
	async getMap(){
		const { data } = await axios.get<IMap>(`https://api.toomoyun.kg/address/`)	
		return data;
	},
}