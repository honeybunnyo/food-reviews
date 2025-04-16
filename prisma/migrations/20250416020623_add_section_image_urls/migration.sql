/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `RecipeUpload` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `RestaurantUpload` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RecipeUpload" DROP COLUMN "imageUrl",
ADD COLUMN     "backgroundImageUrl" TEXT,
ADD COLUMN     "descriptionImageUrls" TEXT,
ADD COLUMN     "methodImageUrls" TEXT,
ADD COLUMN     "recipeImageUrls" TEXT;

-- AlterTable
ALTER TABLE "RestaurantUpload" DROP COLUMN "imageUrl",
ADD COLUMN     "backgroundImageUrl" TEXT,
ADD COLUMN     "descriptionImageUrls" TEXT,
ADD COLUMN     "dessertImageUrls" TEXT,
ADD COLUMN     "entreeImageUrls" TEXT,
ADD COLUMN     "mainImageUrls" TEXT;
