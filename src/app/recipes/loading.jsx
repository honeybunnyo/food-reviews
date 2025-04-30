import Layout from "../layout";

// /app/recipes/loading.tsx
export default function Loading() {
  return (
    <Layout imageSrc="black" title='Recipes'>
      <div className="relative w-full h-full overflow-hidden bg-gray-200">
        <div className="absolute inset-0 animate-pulse bg-gray-300" />
      </div>
    </Layout>
  );
}
