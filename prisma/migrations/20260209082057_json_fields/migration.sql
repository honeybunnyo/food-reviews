/*
  Warnings:

  - The `recipe` column on the `RecipeUpload` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `method` column on the `RecipeUpload` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `backgroundImageUrl` column on the `RecipeUpload` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `descriptionImageUrls` column on the `RecipeUpload` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `methodImageUrls` column on the `RecipeUpload` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `recipeImageUrls` column on the `RecipeUpload` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `entree` column on the `RestaurantUpload` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `main` column on the `RestaurantUpload` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dessert` column on the `RestaurantUpload` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `backgroundImageUrl` column on the `RestaurantUpload` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `descriptionImageUrls` column on the `RestaurantUpload` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dessertImageUrls` column on the `RestaurantUpload` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `entreeImageUrls` column on the `RestaurantUpload` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `mainImageUrls` column on the `RestaurantUpload` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "RecipeUpload" DROP COLUMN "recipe",
ADD COLUMN     "recipe" JSONB,
DROP COLUMN "method",
ADD COLUMN     "method" JSONB,
DROP COLUMN "backgroundImageUrl",
ADD COLUMN     "backgroundImageUrl" JSONB,
DROP COLUMN "descriptionImageUrls",
ADD COLUMN     "descriptionImageUrls" JSONB,
DROP COLUMN "methodImageUrls",
ADD COLUMN     "methodImageUrls" JSONB,
DROP COLUMN "recipeImageUrls",
ADD COLUMN     "recipeImageUrls" JSONB;

-- AlterTable
ALTER TABLE "RestaurantUpload" DROP COLUMN "entree",
ADD COLUMN     "entree" JSONB,
DROP COLUMN "main",
ADD COLUMN     "main" JSONB,
DROP COLUMN "dessert",
ADD COLUMN     "dessert" JSONB,
DROP COLUMN "backgroundImageUrl",
ADD COLUMN     "backgroundImageUrl" JSONB,
DROP COLUMN "descriptionImageUrls",
ADD COLUMN     "descriptionImageUrls" JSONB,
DROP COLUMN "dessertImageUrls",
ADD COLUMN     "dessertImageUrls" JSONB,
DROP COLUMN "entreeImageUrls",
ADD COLUMN     "entreeImageUrls" JSONB,
DROP COLUMN "mainImageUrls",
ADD COLUMN     "mainImageUrls" JSONB;
