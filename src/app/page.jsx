import Layout from "./components/Layout/Layout";
import { abrilFatface } from "./lib/fonts";

export default function Home() {
  return (
    <Layout imageSrc="/pancakes.jpg" title='Welcome'>
      <div className="justify-center content-center h-full w-full p-4">
      <h1 className={`text-4xl text-center font-bold mb-8 ${abrilFatface.className}`}>It’s me, Jacqueline. </h1>
        <p className={`text-xl m-4`}> — Student, developer, and lover of food. Here you’ll be able to find reviews of recipes and restaurants.</p>
      </div>
    </Layout>
  );
}
