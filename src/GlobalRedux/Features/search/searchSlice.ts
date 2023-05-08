import { ISearchGet } from './../../../interfaces/search.interface'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllSearch = createAsyncThunk(
	'searchSlice/getAllSearch',
	async (searchGet: ISearchGet, thunkApi) => {
		try {
			const { data } = await axios.get<any>(
				`https://api.toomoyun.kg/search/?q=${searchGet.q}&page=${searchGet.page}&page_size=${searchGet.pageSize}`
			)			
			return data
		} catch (err: any) {
			return thunkApi.rejectWithValue(err.message)
		}
	}
)

export interface SearchState {
	searchAll: any
	searchWord:string
	errorSearch: boolean
}

const initialState: SearchState = {
	searchAll:{
		count: 0,
		result: []
	},
	searchWord: '',
	errorSearch:false
}



export const searchSlice = createSlice({
	name: 'searchSlice',
	initialState,
	reducers: {
		setNotErrorSearch: (state, action) => {
			state.errorSearch = action.payload
		},
		setSearchWordP:(state, action)=>{
			console.log(action.payload);
			
			state.searchWord = action.payload
		}
	},
	extraReducers: builder=>{
		builder.addCase(getAllSearch.fulfilled,(state,action)=>{
			console.log(action.payload);
			
			state.searchAll = action.payload
		}).addCase(getAllSearch.rejected, (state, action)=>{
			if (action.payload === 'Network Error') {
				state.errorSearch = true
			}
		})
	}
})


export const { setNotErrorSearch,setSearchWordP} = searchSlice.actions

export default searchSlice.reducer