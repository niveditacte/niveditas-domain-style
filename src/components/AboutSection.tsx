import { GraduationCap, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "GATE AIR-32",
      description: "Achieved All India Rank 32 in GATE 2023"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-secondary" />,
      title: "IIT Kharagpur",
      description: "M.Tech in Food Process Engineering (CGPA: 9.05/10)"
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Research Focus",
      description: "ML applications in food quality and agricultural systems"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about leveraging machine learning and data science to solve real-world problems in food engineering and agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-80 h-80 mx-auto mb-8 shadow-elegant flex items-center justify-center">
              <div className="text-8xl text-primary-foreground font-display font-bold">
                NV
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-foreground leading-relaxed">
              I'm Nivedita Vishwakarma, currently pursuing M.Tech in Food Process Engineering at IIT Kharagpur. 
              With a strong foundation in Agricultural Engineering and exceptional academic performance (GATE AIR-32), 
              I specialize in applying machine learning and data science techniques to solve complex problems in 
              food quality assessment, agricultural forecasting, and process optimization.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              My research focuses on developing innovative ML solutions for fruit juice adulteration detection, 
              rice yield forecasting, and plant disease classification. I'm passionate about bridging the gap 
              between technology and agriculture to create sustainable and efficient solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      {highlight.icon}
                    </div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;