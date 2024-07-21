const Skills = ({ imageUrl, title, skills }) => {
  return (
    <section className=" bg-gradient-to-r from-teal-400 to-cyan-500 m-2 p-6 text-white rounded-lg shadow-md flex flex-row lg:m-0">
      <div className="flex-grow flex flex-row above-mid-screen:flex-col above-mid-screen:justify-start lg-mid-screen:flex-row lg-mid-screen:justify-between justify-between">
        <img
          src={imageUrl}
          alt="Skill related"
          className="hidden above-mid-screen:flex lg-mid-screen:hidden w-[200px] h-[160px] mx-auto object-contain"
        />
        <div>
          <h4 className="text-[26px] md:text-3xl font-bold mb-4">{title}</h4>
          <div className="flex-grow">
            {skills.map((text) => (
              <h6 className="text-base md:text-lg mb-2">- {text}</h6>
            ))}
          </div>
        </div>
        <img
          src={imageUrl}
          alt="Skill related"
          className="w-full max-w-[150px] h-fit above-mid-screen:hidden lg-mid-screen:flex  mid-screen:w-[200px] mid-screen:object-scale-down mid-screen:h-[180px] object-cover block rounded-lg"
        />
      </div>
    </section>
  );
};

export default Skills;
