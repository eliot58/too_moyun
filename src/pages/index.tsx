import Layout from '@/components/layouts/Layout'
import Home from '@/components/screens/home/Home'
import { NextPage } from 'next'
const HomePage: NextPage = ()=> {
	return (
		<Layout>
			<Home />
		</Layout>
	)
}

export default HomePage
