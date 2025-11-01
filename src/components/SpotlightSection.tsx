const SpotlightSection = () => {
  const spotlights = [
    {
      title: "Student",
      content: (
        <>
          Rutgers University New Brunswick<br />
          Major: Computer Science<br />
          Minor: Data Science<br />
          Expected Graduation: May 2026<br />
          Clubs and Organisations: USACS, RUCP, Rutgers Chess Club, RUBJJ
        </>
      ),
      imageAlign: "right",
      image: "/swagatpati8/images/spotlight01.jpg"
    },
    {
      title: "Developer",
      content: "I possess a wide knowledge of various tech stacks and am currently expanding my expertise by learning machine learning and automation. I am incredibly versatile, quickly adapting to new technologies and effectively integrating them into my work.",
      imageAlign: "left",
      image: "/swagatpati8/images/spotlight02.jpg"
    },
    {
      title: "Analytical thinker",
      content: "I constantly seek opportunities to challenge myself and sharpen my skills. My passion for chess, a game that demands both strategic thinking and adaptability, fuels my ability to solve problems creatively and innovatively.",
      imageAlign: "right",
      image: "/swagatpati8/images/spotlight03.jpg"
    },
    {
      title: "Fitness enthusiast",
      content: "I believe the body is a temple—a perfect body supports a perfect mind. This conviction drives me to maintain physical discipline through regular, high-intensity workouts (at least thrice a week). I am also a dedicated practitioner of Brazilian Jiu-Jitsu, holding a blue belt in the sport. My training sharpens my focus, adaptability, and strategic thinking, complementing my work in tech.",
      imageAlign: "left",
      image: "/swagatpati8/images/spotlight01.jpg"
    }
  ];

  return (
    <div className="py-20">
      {spotlights.map((spotlight, index) => (
        <section key={index} className="py-16">
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${spotlight.imageAlign === 'left' ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={spotlight.imageAlign === 'left' ? 'lg:col-start-2' : ''}>
                <h2 className="text-3xl font-bold text-foreground mb-6 font-mono">{spotlight.title}</h2>
                <p className="text-lg text-foreground leading-relaxed font-mono">{spotlight.content}</p>
              </div>
              <div className={spotlight.imageAlign === 'left' ? 'lg:col-start-1' : ''}>
                <div className="w-full h-64 bg-background flex items-center justify-center">
                  <img src={spotlight.image} alt={spotlight.title} className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default SpotlightSection;