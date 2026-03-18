import React from 'react'
import Layout from '../../components/Layout/Layout'
import { prisma } from '../../lib/prisma'
import DetailSection from '../../components/Layout/DetailSection';
import { Carousel } from '../../components/Carousel/Carousel';
import StaticRating from '../../components/Rating/StaticRating';
// Prerender paths at build time
export async function generateStaticParams() {
	const recipes = await prisma.recipeUpload.findMany({
		select: { id: true },
	});

	return recipes.map((r) => ({
		id: r.id,
	}));
}

export const revalidate = 60;

export default async function Page({ params }) {
	const { id } = await params
	const data = await prisma.recipeUpload.findUnique({
		where: { id },
	});

	console.log(data)
	if (!data) {
		return <div className="p-10 text-red-600">data not found.</div>;
	}

	const recipeImages = Array.isArray(data.recipeImageUrls)
		? data.recipeImageUrls
		: [];

	const methodImages = Array.isArray(data.methodImageUrls)
		? data.methodImageUrls
		: [];

	const descriptionImages = Array.isArray(data.descriptionImageUrls)
		? data.descriptionImageUrls
		: [];

	const backgroundImage =
		Array.isArray(data.backgroundImageUrl) && data.backgroundImageUrl.length > 0
			? data.backgroundImageUrl[0]
			: '/pancakes.jpg';


	return (
		<Layout imageSrc={ backgroundImage } title={ data.title }>
			<div className="justify-center h-full w-full p-4">
				<div className="p-4">
					<div className='flex flex-row items-center justify-between'>
						<h2 className="text-2xl font-bold">{ data.title }</h2>
						<StaticRating rating={ data.rating } size="md" />
					</div>
					<p className='text-gray-400 text-sm'> Jacqueline Ta — { new Date(data.createdAt).toDateString() } </p>

					<p className="mt-2">{ data.description }</p>
					<Carousel images={ descriptionImages } />
					<DetailSection label="recipe" content={ data.recipe } />
					<Carousel images={ recipeImages } />
					<DetailSection label="method" content={ data.method } />
					<Carousel images={ methodImages } />
					<DetailSection label="notes" content={ data.notes } />
				</div>
			</div>
		</Layout>
	)
}
