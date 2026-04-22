const PortfolioSection = () => {
  const projects = [
    {
      title: "MMA Fight Predictor",
      description: "React, Python (Flask), Machine Learning, Supabase",
      image: "/images/pic03.jpg",
      link: "https://mma-fight-predictor-mauve.vercel.app"
    },
    {
      title: "Swagat's RAG Chatbot",
      description: "Python (Flask), React, Pinecone Vector DB, Gemini API, Render, Vercel",
      image: "/images/pic01.jpg"
    },
    {
      title: "AI Travel Agent", 
      description: "Python, AWS Bedrock",
      image: "/images/pic02.jpg"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-mono">Portfolio</h2>
          <p className="text-lg text-foreground font-mono">
            Some of the projects I have worked on.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover cursor-pointer" />
                  </a>
                ) : (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 font-mono">{project.title}</h3>
                <p className="text-foreground font-mono">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;