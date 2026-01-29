import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="About" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-foreground font-mono">Swagat Pati</h1>
            <p className="text-xl text-foreground leading-relaxed font-mono">
              Welcome to my personal website! I'm a Computer Science major at Rutgers University, aspiring to be a Software Engineer. I thrive on solving problems, developing innovative projects, and pushing the boundaries of technology.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <a href="https://www.linkedin.com/in/swagatpati8/" className="hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-nav-accent rounded flex items-center justify-center">
                  <span className="text-white font-bold">Li</span>
                </div>
              </a>
              <a href="https://github.com/swagatpati8?tab=repositories" className="hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-nav-accent rounded flex items-center justify-center">
                  <span className="text-white font-bold">Gh</span>
                </div>
              </a>
              <a href="mailto:swagat.pati@rutgers.edu" className="hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-nav-accent rounded flex items-center justify-center">
                  <span className="text-white font-bold">@</span>
                </div>
              </a>
              <a href="https://leetcode.com/u/bongcloud8/" className="hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-nav-accent rounded flex items-center justify-center">
                  <span className="text-white font-bold">LC</span>
                </div>
                
              </a>
            </div>
            <div className="pt-6">
              <Link
                to="/chatbot"
                className="inline-block font-mono text-foreground border border-white/10 px-3 py-3 rounded hover:bg-white/5 transition-colors"
              >
                Ask About Swagat →
              </Link>
            </div>

          </div>
          
          <div className="flex justify-center">
            <div className="w-96 h-96 bg-background rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/images/banner.jpg" alt="Profile Image" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;