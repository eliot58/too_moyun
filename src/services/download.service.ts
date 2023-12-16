import { IDownload } from './../interfaces/download.interface';
import axios from 'axios';



export const DownloadService = {
	async getFile(){
		const { data } = await axios.get<IDownload[]>(`https://api.toomoyun.kg/resolve/`)	
		return data;
	}
}