export const revalidate = 60;

import React, { cache, Suspense } from 'react'
import { prisma } from '../lib/prisma'
import SortDropdown from '../components/Dropdowns/SortDropdown';
import DynamicCards from './DynamicCards';

export default async function Posts({ searchParams }) {
	const resolvedSearchParams = await searchParams;
	const { sort } = resolvedSearchParams || {};
	const sortField = sort === 'rating' ? 'rating' : 'createdAt';
	const restaurants = await getRestaurants(sortField);
	const recipes = await getRecipes(sortField);

	return (
		<div className="h-full w-full p-4 flex justify-center flex-col">
			{/* <div className="flex">
				<Suspense fallback={ <div>Loading...</div> }>
					<SortDropdown currentSort={ sortField } />
				</Suspense>			</div> */}
			<DynamicCards recipes={ recipes } restaurants={ restaurants } />
		</div>
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