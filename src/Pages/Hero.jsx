
const Hero = () => {
  const heroStyle = {
    backgroundImage: `url('https://scontent.fspd5-1.fna.fbcdn.net/v/t39.30808-6/383235277_1090155618644464_1450927792807426296_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeE8uIn3YSKkVZe68w3POLzOehdIi1uvyJp6F0iLW6_ImkhDR2isxZTOpyRLpdzOt9zdiduLBmWhLvKrDkIabVib&_nc_ohc=C6b6uh3WdQ8AX-F11Ew&_nc_ht=scontent.fspd5-1.fna&oh=00_AfD_UO3Y9G8sbkYiOUvXE9PXUf7l46r6MbpoJz3vQAhSSw&oe=651C41BF')`,
  };

  return (
    <div className="bg-cover bg-center h-96 relative" style={heroStyle}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-6xl font-semibold">Hi, I am Belal</h1>
          <p className="text-xl md:text-2xl mt-4">Welcome to my website</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
