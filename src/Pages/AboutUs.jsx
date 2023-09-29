
const AboutUs = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="lg:flex lg:items-center lg:justify-between p-4 gap-10">
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-semibold mb-2">About Us</h1>
            <p className="text-gray-700">
              Welcome to my portfolio website!
            </p>
            <p className="text-gray-700">
              My name is Belal, and I am a passionate web developer currently
              exploring the world of React.js. This website serves as a showcase
              of my journey in learning and mastering this powerful JavaScript
              library.
            </p>
            <p className="text-gray-700">
              I have always had a keen interest in creating web applications and
              interactive user interfaces. React.js has opened up a whole new
              world of possibilities for me, allowing me to build dynamic and
              responsive websites with ease.
            </p>
            <p className="text-gray-700">
              Through this portfolio, I aim to demonstrate my skills and projects
              developed using React.js. Whether it is building user-friendly
              interfaces, integrating APIs, or crafting interactive components, I
              am dedicated to honing my skills and delivering high-quality web
              experiences.
            </p>
            <p className="text-gray-700">
              Feel free to explore my portfolio and check out some of the projects
              I have worked on. If you have any questions, feedback, or potential
              collaboration opportunities, do not hesitate to reach out via the
              contact page. Thank you for visiting, and I look forward to connecting
              with you!
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://scontent.fspd5-1.fna.fbcdn.net/v/t39.30808-6/383235277_1090155618644464_1450927792807426296_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeE8uIn3YSKkVZe68w3POLzOehdIi1uvyJp6F0iLW6_ImkhDR2isxZTOpyRLpdzOt9zdiduLBmWhLvKrDkIabVib&_nc_ohc=C6b6uh3WdQ8AX-F11Ew&_nc_ht=scontent.fspd5-1.fna&oh=00_AfD_UO3Y9G8sbkYiOUvXE9PXUf7l46r6MbpoJz3vQAhSSw&oe=651C41BF" // Replace with your image source
              alt="About Us"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
