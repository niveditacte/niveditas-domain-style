import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      
      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6">
            Hi, I'm{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Nivedita
            </span>
          </h1>
          
          <h2 className="font-display font-semibold text-2xl md:text-3xl lg:text-4xl text-primary-foreground/90 mb-4">
            Data Science & Food Process Engineering
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            M.Tech @ IIT Kharagpur | GATE AIR-32 | ML & Food Engineering Enthusiast
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              onClick={scrollToProjects}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-3 text-lg shadow-elegant"
            >
              Explore Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              onClick={scrollToContact}
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-3 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-primary-foreground/60 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;