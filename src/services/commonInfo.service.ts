import { CommonInfoI } from './../interfaces/common-info.interface';

import axios from 'axios';


export const CommonInfoService={
	async getCommonInfo(){
		const { data } = await axios.get<CommonInfoI>(`https://api.toomoyun.kg/common-info/`)	
		
		return data;
	}
}