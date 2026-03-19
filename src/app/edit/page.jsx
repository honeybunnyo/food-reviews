export const revalidate = 60;

import React, { cache } from 'react'
import { prisma } from '../lib/prisma'
import DynamicCards from './DynamicCards';
import Layout from '../components/Layout/Layout';

export default async function Posts({ searchParams }) {
	const resolvedSearchParams = await searchParams;
	const { sort } = resolvedSearchParams || {};
	const sortField = sort === 'rating' ? 'rating' : 'createdAt';
	const restaurants = await getRestaurants(sortField);
	const recipes = await getRecipes(sortField);

	return (
		<Layout imageSrc="/pancakes.jpg" title='Editing'>
			<div className="h-full w-full p-4">
				<div className="h-full w-full p-4 flex flex-col">
					<DynamicCards recipes={ recipes } restaurants={ restaurants } />
				</div>
			</div>
		</Layout>
	)
}

const getRestaurants = cache(async (sortField) => {
	return await prisma.restaurantUpload.findMany({
		orderBy: { [sortField]: 'desc' },
	});
});


const getRecipes = cache(async (sortField) => {
	return await prisma.recipeUpload.findMany({
		orderBy: { [sortField]: 'desc' },
	});
});