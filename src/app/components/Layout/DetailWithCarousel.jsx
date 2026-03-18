import DetailSection from './DetailSection'
import { Carousel } from '../Carousel/Carousel'

const DetailWithCarousel = ({ label, content, images }) => (
	<>
		<DetailSection label={ label } content={ content } />
		<Carousel images={ images || [] } />
	</>
)

export default DetailWithCarousel