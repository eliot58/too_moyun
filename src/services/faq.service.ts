import { IFaq } from './../interfaces/faq.interface';
import axios from 'axios';



export const FaqService = {
	async getFaq(){
		const { data } = await axios.get<IFaq[]>(`https://api.toomoyun.kg/faq/`)	
		return data;
	}
}