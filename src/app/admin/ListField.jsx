import React from 'react'
import { useState, useEffect } from 'react';
import ImageField from '../components/InputField/ImageField';
import RatingField from '../components/InputField/RatingField';

const ListField = ({ label, items, setItems, imagesByCategory, setImagesByCategory }) => {
	const safeItems = Array.isArray(items) ? items : [];

	const [name, setName] = useState("");
	const [nameInput, setNameInput] = useState("");
	const [review, setReview] = useState("");
	const [rating, setRating] = useState(0);

	const isRestaurant = ["entree", "main", "dessert"].includes(label);

	useEffect(() => {
		const timer = setTimeout(() => {
			setName(nameInput);
		}, 300);

		return () => clearTimeout(timer);
	}, [nameInput]);


	const addItem = () => {
		if (!name.trim()) return;

		const newItem =
			isRestaurant
				? { name: name.trim(), review: review.trim(), rating: rating || 0, }
				: name.trim();

		setItems([...safeItems, newItem]);

		setName("");
		setNameInput("");

		setReview("");
		setRating(0);
	};

	const removeItem = (index) => {
		setItems(safeItems.filter((_, i) => i !== index));
	};

	return (
		<div className="mb-6">
			<label className="block text-sm font-medium mb-2">{ label }</label>

			<div className="flex flex-col gap-2 mb-2">
				<input
					value={ nameInput }
					onChange={ (e) => setNameInput(e.target.value) }
					className="border p-2 rounded"
					placeholder={ isRestaurant ? `Name` : `Add ${label} item` }
				/>

				{ isRestaurant && (
					<>
						<textarea
							value={ review }
							onChange={ (e) => setReview(e.target.value) }
							className="border p-2 rounded"
							placeholder="Review"
						/>
						<RatingField rating={ rating } setRating={ setRating } isSmall={ true } />
					</>
				) }

				<button
					type="button"
					onClick={ addItem }
					className="bg-gray-700 text-white px-3 py-1 rounded self-start"
				>
					Add
				</button>
			</div>

			<ul className="list-disc pl-5 space-y-1">
				{ safeItems.map((item, i) => (
					<div key={ i } className="flex justify-between items-start gap-4">
						<li>
							{ typeof item === "string" ? (
								item
							) : (
								<>
									<p className="font-semibold">{ item.name }</p>
									<p className="text-sm opacity-80">{ item.review }</p>
									<p className="text-sm opacity-80">{ item.rating }/5</p>
								</>
							) }
						</li>

						<button
							type="button"
							onClick={ () => removeItem(i) }
							className="text-red-500 text-sm"
						>
							remove
						</button>
					</div>
				)) }
			</ul>

			<ImageField
				imageFiles={ imagesByCategory[label] }
				setImagesByCategory={ setImagesByCategory }
				multiple
				category={ label }
			/>
		</div>
	);
};

export default ListField