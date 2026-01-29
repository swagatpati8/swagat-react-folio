import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <footer id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/swagatpati8/" className="hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-nav-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold font-mono">Li</span>
              </div>
            </a>
            <a href="https://github.com/swagatpati8?tab=repositories" className="hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-nav-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold font-mono">Gh</span>
              </div>
            </a>
            <a href="mailto:swagat.pati@rutgers.edu" className="hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-nav-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold font-mono">@</span>
              </div>
            </a>
            <a href="https://leetcode.com/u/SwagatPati/" className="hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-nav-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold font-mono">LC</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;