import Image from "next/image";

export default function Home() {
  return (
    <div className="home  text-gray-900 min-h-screen">
      <header className="flex justify-end items-center py-6 px-10">
        <nav className="flex space-x-8">
          <a href="#" className="hover:text-gray-600">
            Works
          </a>
          <a href="#" className="hover:text-gray-600">
            Blog
          </a>
          <a href="#" className="hover:text-gray-600">
            Contact
          </a>
        </nav>
      </header>
      <div className="flex items justify-around mt-12">
        <section className="text-start">
          <h1 className="text-4xl font-bold">
            Hi, I am Hammad, <br /> Web Developer
          </h1>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            Hello! I'm a passionate web developer with a knack for creating
            dynamic and responsive websites. With a strong foundation in HTML,
            CSS, and JavaScript, I thrive on turning ideas into functional and
            visually appealing web applications. My goal is to enhance user
            experience through clean code and innovative design, ensuring every
            project I work on is both user-friendly and aesthetically pleasing.
            Let's build something amazing together!
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 mt-6 rounded-md hover:bg-pink-600">
            <a href="/hammadhussaincv.pdf" target="_blank">
              Download CV
            </a>
          </button>
        </section>
        <Image
          src="/HammadLinkedin.jpg"
          width={300}
          height={200}
          alt="image"
          className="rounded-full h-64 w-64  ml-6"
        />
      </div>

      <section className="mt-16 bg-rose-200 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Post</h2>
            <a href="#" className="text-pink-500 hover:underline">
              View all
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold">
                Making a design system from scratch
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                12 Feb 2020 | Design, Pattern
              </p>
              <p className="text-gray-600 mt-3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold">
                Making a design system from scratch
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                12 Feb 2020 | Design, Pattern
              </p>
              <p className="text-gray-600 mt-3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold">Featured works</h2>
          <div className="mt-6 space-y-6">
            <div className="flex items-start space-x-4">
              <div className=" bg-gray-300">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.ADiCgZ3-DI-WwT-PgZ6MtwHaE2&pid=Api&P=0&h=180"
                  alt="image"
                  className="  w-32 h-24 "
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Designing Dashboards</h3>
                <span className="text-sm  mx-2 bg-pink-500 text-white py-1 px-2 rounded-xl">
                  2020{" "}
                </span>{" "}
                Dashboard
                <p className="text-gray-600 mt-2">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              {" "}
              <div className=" bg-gray-300">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.Wzisv_wLEWhzhrCpD1tS2gHaET&pid=Api&P=0&h=180"
                  alt="image"
                  className="  w-32 h-24 "
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Designing Dashboards</h3>
                <span className="text-sm  mx-2 bg-pink-500 text-white py-1 px-2 rounded-xl">
                  2020{" "}
                </span>{" "}
                Dashboard
                <p className="text-gray-600 mt-2">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              {" "}
              <div className=" bg-gray-300">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.HKoeOhH9B5icx7VBiQSHDQHaEx&pid=Api&P=0&h=180"
                  alt="image"
                  className="  w-32 h-24 "
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Designing Dashboards</h3>
                <span className="text-sm  mx-2 bg-pink-500 text-white py-1 px-2 rounded-xl">
                  2020{" "}
                </span>{" "}
                Dashboard
                <p className="text-gray-600 mt-2">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-16 bg-white py-6 text-center border-t border-gray-200">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-gray-600">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-600">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-600">
            Instagram
          </a>
          <a href="#" className="hover:text-gray-600">
            LinkedIn
          </a>
        </div>
        <p className="text-gray-400">Copyright ©2020 All rights reserved</p>
      </footer>
    </div>
  );
}
