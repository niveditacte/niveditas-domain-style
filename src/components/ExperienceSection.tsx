import { CalendarDays, MapPin, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "M.Tech Student",
      organization: "IIT Kharagpur", 
      location: "Kharagpur, WB",
      duration: "2023 - 2025",
      type: "Education",
      details: [
        "Specialization: Food Process Engineering",
        "Current CGPA: 9.05/10", 
        "Thesis: ML in Fruit Juice Adulteration Detection",
        "Courses: Advanced Food Engineering, Process Optimization"
      ],
      color: "border-l-primary"
    },
    {
      title: "Research Intern",
      organization: "Food Corporation of India (FCI) Project",
      location: "IIT Kharagpur",
      duration: "May'24 - Jul'24", 
      type: "Internship",
      details: [
        "Advanced Rice Grain Classification using Image Analysis",
        "Rice Yield Forecasting with SARIMA and LSTM models", 
        "Achieved 84.39% accuracy with Random Forest classifier",
        "SARIMA model: 0.03% MAPE, LSTM: 8.06% MAPE"
      ],
      color: "border-l-secondary"
    },
    {
      title: "B.Tech Student", 
      organization: "JNKVV Jabalpur",
      location: "Jabalpur, MP",
      duration: "2019 - 2023",
      type: "Education", 
      details: [
        "Agricultural Engineering", 
        "CGPA: 8.68/10",
        "Strong foundation in engineering principles",
        "Focus on sustainable agricultural practices"
      ],
      color: "border-l-accent"
    },
    {
      title: "Teaching Assistant",
      organization: "IIT Kharagpur",
      location: "Kharagpur, WB", 
      duration: "2024 - Present",
      type: "Position",
      details: [
        "Assisting in undergraduate courses",
        "Mentoring junior students", 
        "Laboratory supervision and guidance",
        "Academic support and curriculum development"
      ],
      color: "border-l-primary"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Education & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey and professional experience in engineering and research
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className={`shadow-card hover:shadow-elegant transition-smooth animate-slide-up border-l-4 ${exp.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <CardTitle className="text-xl font-display text-foreground">
                      {exp.title}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{exp.organization}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {exp.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-foreground">
                        <span className="text-primary mt-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;