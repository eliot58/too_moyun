import { IGallery } from './../../../interfaces/gallery.interface'
;('use client')

import { ICardSize, INews } from '@/interfaces/news.interface'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICardNews } from '@/interfaces/cardNews.interface'
import { IGar } from '@/interfaces/gar.interface'

export const getCards = createAsyncThunk(
	'pagination/getCards',
	async (cardSize: ICardSize, thunkApi) => {
		try {
			const { data } = await axios.get<INews>(
				`https://api.toomoyun.kg/news/?page=${cardSize.page}&page_size=${cardSize.pageSize}`
			)
			return data
		} catch (err: any) {
			return thunkApi.rejectWithValue(err.message)
		}
	}
)

export const getGallery = createAsyncThunk(
	'pagination/getGallery',
	async (gallerySize: ICardSize, thunkApi) => {
		try {
			const { data } = await axios.get<IGallery>(
				`https://api.toomoyun.kg/gallery/?page=${gallerySize.page}&page_size=${gallerySize.pageSize}`
			)
			return data
		} catch (err: any) {
			return thunkApi.rejectWithValue(err.message)
		}
	}
)

export const getMalymattar = createAsyncThunk(
	'pagination/getMalymattar',
	async (malymattarSize: ICardSize, thunkApi) => {
		try {
			const { data } = await axios.get<ICardNews>(
				`https://api.toomoyun.kg/information/?page=${malymattarSize.page}&page_size=${malymattarSize.pageSize}`
			)
			return data
		} catch (err: any) {
			return thunkApi.rejectWithValue(err.message)
		}
	}
)

export const getGarPagination = createAsyncThunk(
	'firstData/getGar',
	async (cardSize: ICardSize, thunkApi) => {
		try {
			const { data } = await axios.get<IGar>(
				`https://api.toomoyun.kg/ads/?page=${cardSize.page}&page_size=${cardSize.pageSize}`
			)
			return data
		} catch (err: any) {
			return thunkApi.rejectWithValue(err.message)
		}
	}
)

export interface PaginationState {
	currentValue: number
	count: number
	newsCards: INews
	gallery: IGallery
	malymattar: ICardNews
	garNews: IGar
	errorGar: boolean
	errorMalymattar: boolean
	errorNews: boolean
	errorGallery: boolean
}

const initialState: PaginationState = {
	currentValue: 1,
	count: 1,
	newsCards: { count: 4, next: 1, pervious: 0, results: [] },
	gallery: { count: 4, next: 1, pervious: 0, results: [] },
	malymattar: { count: 4, next: 1, pervious: 0, results: [] },
	garNews: { count: 4, next: 1, pervious: 0, results: [] },
	errorGar: false,
	errorMalymattar: false,
	errorNews: false,
	errorGallery: false,
}

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setValue: (state, action) => {
			state.currentValue = action.payload
		},
		setCount: (state, action) => {
			state.count = action.payload
		},
		setNotError: (state, action) => {
			state.errorGar = action.payload
		},
		setNotErrorMalymattar: (state, action) => {
			state.errorMalymattar = action.payload
		},
		setNotErrorNews: (state, action) => {
			state.errorNews = action.payload
		},
		setNotErrorGallery: (state, action) => {
			state.errorGallery = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getCards.fulfilled, (state, action) => {
				state.newsCards = action.payload
			})
			.addCase(getCards.rejected, (state, action) => {
				if (action.payload === 'Network Error') {
					state.errorNews = true
				}
			})

		builder
			.addCase(getGallery.fulfilled, (state, action) => {
				state.gallery = action.payload
			})
			.addCase(getGallery.rejected, (state, action) => {
				if (action.payload === 'Network Error') {
					state.errorGallery = true
				}
			})

		builder
			.addCase(getMalymattar.fulfilled, (state, action) => {
				state.malymattar = action.payload
			})
			.addCase(getMalymattar.rejected, (state, action) => {
				if (action.payload === 'Network Error') {
					state.errorMalymattar = true
				}
			})

		builder
			.addCase(getGarPagination.fulfilled, (state, action) => {
				state.garNews = action.payload
			})
			.addCase(getGarPagination.rejected, (state, action) => {
				if (action.payload === 'Network Error') {
					state.errorGar = true
				}
			})
	},
})

export const {
	setValue,
	setCount,
	setNotError,
	setNotErrorMalymattar,
	setNotErrorNews,
	setNotErrorGallery,
} = paginationSlice.actions

export default paginationSlice.reducer
