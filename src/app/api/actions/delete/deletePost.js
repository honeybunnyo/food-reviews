'use server'

import { prisma } from '../../../lib/prisma'

export async function deletePost(id, type) {
	if (type === 'restaurant') {
		await prisma.restaurantUpload.delete({ where: { id } })
	} else {
		await prisma.recipeUpload.delete({ where: { id } })
	}
}