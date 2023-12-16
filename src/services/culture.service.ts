import { ICulture } from './../interfaces/culture.interface';
import { CommonInfoI } from './../interfaces/common-info.interface';

import axios from 'axios';


export const CultureService={
	async getCulture(){
		const { data } = await axios.get<ICulture>(`https://api.toomoyun.kg/culture/`)	
		
		return data;
	}
}