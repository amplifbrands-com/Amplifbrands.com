export const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center px-6 gap-10"
      style={{ backgroundImage: "url('./src/assets/Rectangle_full.png')" }}
    >
      <div className="bg-white/10 backdrop-blur-md flex flex-col items-center justify-around p-4 text-white rounded-3xl h-64   grow">
        <h1 className="text-yellow-600 text-5xl font-bold ">
          Explore Our Expert Solution
        </h1>
        <div className="space-x-1 grid grid-cols-2 gap-10">
          <button className="text-yellow-600 bg-black p-3">
            Paid Advertising
          </button>
          <button className="text-white bg-black p-3">
            Website Advertising
          </button>
        </div>
      </div>

      <div className="flex items-center mt-32">
        <img
          src="./src/assets/comp_animation.png"
          className=""
          alt="Third Image"
        />
      </div>
    </section>
  );
};
