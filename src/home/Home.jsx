import Bar from "../header/Bar";
import Page from "./Page";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="min-h-screen bg-gray-100 p-4">
        <Page />
      </div>
    </section>
  );
};

export default Home;
