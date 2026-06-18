const SkillsSection = () => {
  const skills = [
    "Python", "PostgreSQL", "Flask", "AWS", "MongoDB", "JAVA", "ReactJS", "Spring Boot", "Angular", "Swagger UI"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-mono">Skills</h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto font-mono">
            A showcase of my technical skills developed through academic coursework, professional experiences, and personal projects. I am eager to apply these skills in a professional environment to contribute to impactful work.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 w-max justify-center">
            {skills.map((skill, index) => (
              <div key={index} className="flex-shrink-0 w-64 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                <div className="w-16 h-16 bg-white rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-black font-bold text-xs font-mono">{skill.substring(0, 3)}</span>
                </div>
                <h3 className="text-white font-semibold font-mono">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;