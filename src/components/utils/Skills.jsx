const Skills = ({ imageUrl, title, skills }) => {
  return (
    <section className="relative bg-gradient-to-r from-teal-400 to-cyan-500 m-2 p-6 text-white rounded-lg shadow-md flex flex-row lg:m-0">
      <div className="flex-grow flex flex-col items-start">
        <h3 className="text-3xl font-bold font-sans mb-4">{title}</h3>
        <div className="flex-grow">
          {skills.map((text) => (
            <p className="text-lg mb-2">- {text}</p>
          ))}
        </div>
      </div>
      <img
        src={imageUrl}
        alt="Skill related"
        className="w-36 h-28 object-cover block rounded-lg"
      />
    </section>
  );
};

export default Skills;
