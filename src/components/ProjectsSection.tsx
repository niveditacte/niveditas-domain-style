import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ML in Fruit Juice Adulteration Detection",
      type: "M.Tech Thesis",
      duration: "Aug'24 - May'25",
      organization: "IIT Kharagpur",
      description: "Developing machine learning models to classify and quantify adulteration levels in fruit juices using UV-Vis spectral data. Building a scalable application for real-time detection.",
      technologies: ["Python", "Scikit-learn", "Random Forest", "SVM", "KNN", "Pandas", "Matplotlib"],
      highlights: [
        "UV-Vis spectral data processing and analysis",
        "Cross-validation for model robustness",
        "Real-time detection application development",
        "Classification and regression tasks"
      ],
      status: "Ongoing",
      featured: true
    },
    {
      title: "Advanced Rice Grain Classification", 
      type: "FCI Project",
      duration: "May'24 - Jul'24",
      organization: "IIT Kharagpur",
      description: "Image analysis and feature engineering for rice grain classification using machine learning algorithms with comprehensive preprocessing and model validation.",
      technologies: ["Python", "TensorFlow", "Keras", "Random Forest", "KNN", "Image Processing"],
      highlights: [
        "84.39% accuracy with Random Forest classifier",
        "Binary segmentation and feature extraction",
        "Correlation analysis with Boruta feature selection",
        "Comprehensive model evaluation metrics"
      ],
      status: "Completed",
      featured: true
    },
    {
      title: "Rice Yield Forecasting",
      type: "Research Project", 
      duration: "May'24 - Jul'24",
      organization: "IIT Kharagpur",
      description: "Time series analysis and forecasting of rice yields using SARIMA and LSTM models based on 72 years of historical Indian agricultural data.",
      technologies: ["Python", "LSTM", "SARIMA", "Time Series", "Forecasting", "Jupyter Notebook"],
      highlights: [
        "SARIMA model: 0.03% MAPE accuracy",
        "LSTM model: 8.06% MAPE accuracy", 
        "72 years of historical data analysis",
        "Next decade yield predictions"
      ],
      status: "Completed", 
      featured: true
    },
    {
      title: "Horticulture Plant Disease Classification",
      type: "Course Project",
      duration: "Apr'24 - May'24", 
      organization: "IIT Kharagpur",
      description: "Deep learning CNN model for tomato plant disease classification using image preprocessing and augmentation techniques.",
      technologies: ["Python", "TensorFlow", "Keras", "CNN", "Image Augmentation", "NumPy"],
      highlights: [
        "8,000 labeled images across 10 disease classes",
        "84.06% validation accuracy",
        "81.87% test accuracy",
        "Advanced image preprocessing pipeline"
      ],
      status: "Completed",
      featured: false
    },
    {
      title: "NLP Text Extraction & Sentiment Analysis",
      type: "Self Project",
      duration: "Feb'24 - Mar'24",
      organization: "Personal",
      description: "Automated web scraping and NLP pipeline for sentiment analysis and readability insights with comprehensive reporting.",
      technologies: ["Python", "NLTK", "BeautifulSoup", "Pandas", "Web Scraping", "Excel"],
      highlights: [
        "Automated web scraping pipeline",
        "Sentiment and readability metrics",
        "Excel report generation",
        "Missing data handling strategies"
      ],
      status: "Completed",
      featured: false
    },
    {
      title: "Advanced Retail Analytics Dashboard",
      type: "Self Project", 
      duration: "Dec'23 - Jan'24",
      organization: "Personal",
      description: "Interactive Power BI dashboard for Blinkit grocery data analysis with dynamic visualizations and KPI tracking.",
      technologies: ["Power BI", "SQL Server", "DAX", "Data Visualization", "Analytics"],
      highlights: [
        "8K+ records from SQL Server integration",
        "Calendar heat maps and sparklines",
        "Dynamic KPI visualizations",
        "Interactive sales analysis"
      ],
      status: "Completed",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of machine learning, data science, and food engineering projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-elegant transition-smooth animate-scale-in h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={project.status === 'Ongoing' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {project.type}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl font-display text-foreground mb-2">
                  {project.title}
                </CardTitle>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{project.organization}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>
                
                <p className="text-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIdx) => (
                        <Badge key={techIdx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="font-display font-semibold text-2xl text-foreground mb-8 text-center">
            Other Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-elegant transition-smooth animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg font-display text-foreground">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-sm text-muted-foreground">
                    {project.organization} • {project.duration}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <p className="text-sm text-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIdx) => (
                      <Badge key={techIdx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
