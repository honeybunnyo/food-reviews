import Layout from '../Layout/Layout'
import StaticRating from '../Rating/StaticRating'

const DetailPage = ({ imageSrc, title, rating, description, children, date, edit }) => (
	<Layout imageSrc={ imageSrc } title={ title }>
		<div className="justify-center h-full w-full p-4">
			<div className="p-4">
				<div className="flex flex-row items-center justify-between">
					<h2 className="text-2xl font-bold">{ title }</h2>
					<StaticRating rating={ rating } size="md" />
				</div>
				<p className='text-gray-400 text-xs'> { date } </p>
				<p className="mt-2">{ description }</p>
				{ children }
			</div>
		</div>
	</Layout>
)

export default DetailPage