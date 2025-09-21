import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & ML",
      icon: "💻",
      skills: [
        "Python", "TensorFlow", "Keras", "Scikit-learn", 
        "PyTorch", "Pandas", "NumPy", "Jupyter Notebook"
      ],
      color: "bg-primary text-primary-foreground"
    },
    {
      title: "Data Analysis & Visualization", 
      icon: "📊",
      skills: [
        "Power BI", "Matplotlib", "Seaborn", "Excel", 
        "SQL Server", "DAX", "Tableau", "Statistical Analysis"
      ],
      color: "bg-secondary text-secondary-foreground"
    },
    {
      title: "Machine Learning & AI",
      icon: "🧠", 
      skills: [
        "Deep Learning", "CNN", "LSTM", "Random Forest",
        "SVM", "KNN", "SARIMA", "Time Series Analysis"
      ],
      color: "bg-accent text-accent-foreground"
    },
    {
      title: "Domain Expertise",
      icon: "🌾",
      skills: [
        "Food Process Engineering", "Agricultural Engineering",
        "Quality Control", "Spectral Analysis", "Image Processing", "Research"
      ],
      color: "bg-muted text-muted-foreground"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise spanning machine learning, data science, and food process engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-elegant transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-3">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-lg font-display">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs transition-smooth hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;