import Layout from '@/components/layouts/Layout'
import PhotoGallery from '@/components/screens/photoGallery/PhotoGallery'
import { NextPage } from 'next'

const PhotoGalleryPage: NextPage = () => {
	return (
		<Layout>
			<PhotoGallery />
		</Layout>
	)
}

export default PhotoGalleryPage
