import Layout from '@/components/layouts/Layout'
import Search from '@/components/layouts/searchScreen/search'
import { NextPage } from 'next'

const SearchPage: NextPage = () => {
	return <Layout>
			<Search/>
	</Layout>
}

export default SearchPage