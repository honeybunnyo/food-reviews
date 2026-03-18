'use client'

import { useState } from 'react';
import Cards from '../components/Cards/Cards';

const DynamicCards = ({ recipes, restaurants }) => {
	const [showRestaurants, setShowRestaurants] = useState(false);

	return (
		<div>
			<button
				className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
				onClick={ () => setShowRestaurants(!showRestaurants) }
			>
				{ showRestaurants ? 'Show Recipes' : 'Show Restaurants' }
			</button>

			<Cards posts={ showRestaurants ? restaurants : recipes } edit={ true } type={ showRestaurants ? 'restaurant' : 'recipe' } />
		</div>
	);
}

export default DynamicCards