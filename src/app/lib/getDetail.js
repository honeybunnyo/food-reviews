import { prisma } from './prisma'

export async function getRecipe(id) {
	return prisma.recipeUpload.findUnique({ where: { id } })
}

export async function getRestaurant(id) {
	return prisma.restaurantUpload.findUnique({ where: { id } })
}