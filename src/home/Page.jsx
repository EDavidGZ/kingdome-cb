import MySwiper from "../assets/swiper/Swiper";

const Page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Our Awesome Product
          </h1>
          <p className="text-lg mb-8">Solving your problems with ease!</p>
          <a
            href="#"
            className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-100"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          {/* Feature 1 */}
          <div className="mb-8">
            <i className="text-4xl text-blue-500 fas fa-check-circle mb-4"></i>
            <h2 className="text-xl font-semibold">Trending topics</h2>
            <p>Supercharge your productivity!</p>

            <MySwiper />
          </div>
          {/* Add more features here */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          {/* Testimonial 1 */}
          <div className="mb-8">
            <p className="text-lg italic">"This product changed my life!"</p>
            <p className="text-gray-600">- John Doe</p>
          </div>
          {/* Add more testimonials here */}
        </div>
      </section>

      {/* Contact or Signup Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
          <p className="mb-8">Sign up now and experience the magic!</p>
          <a
            href="#"
            className="bg-white text-blue-800 px-6 py-3 rounded-full hover:bg-blue-100"
          >
            Sign Up
          </a>
        </div>
      </section>
    </div>
  );
};

export default Page;
