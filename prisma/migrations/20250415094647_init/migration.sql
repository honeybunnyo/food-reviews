-- CreateTable
CREATE TABLE "RecipeUpload" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "description" TEXT,
    "recipe" TEXT,
    "method" TEXT,
    "rating" SMALLINT,
    "imageUrl" TEXT,

    CONSTRAINT "RecipeUpload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestaurantUpload" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "rating" SMALLINT,
    "review" TEXT,
    "location" TEXT,
    "priceRange" TEXT,
    "description" TEXT,
    "entree" TEXT,
    "main" TEXT,
    "dessert" TEXT,
    "imageUrl" TEXT,

    CONSTRAINT "RestaurantUpload_pkey" PRIMARY KEY ("id")
);
