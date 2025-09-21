import { Trophy, Award, Star, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AchievementsSection = () => {
  const achievements = [
    {
      category: "Academic Excellence",
      icon: <Trophy className="h-6 w-6" />,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      items: [
        {
          title: "GATE AIR-32 (2023)",
          description: "All India Rank 32 in Graduate Aptitude Test in Engineering",
          highlight: true
        },
        {
          title: "M.Tech CGPA: 9.05/10",
          description: "Excellent academic performance at IIT Kharagpur"
        },
        {
          title: "B.Tech CGPA: 8.68/10", 
          description: "First Class with Distinction in Agricultural Engineering"
        }
      ]
    },
    {
      category: "Certifications",
      icon: <Award className="h-6 w-6" />,
      color: "text-primary",
      bgColor: "bg-primary/10",
      items: [
        {
          title: "IBM Data Science Professional",
          description: "Comprehensive data science and machine learning certification"
        },
        {
          title: "Coursera ML Specialization",
          description: "Machine Learning specialization courses"
        },
        {
          title: "TensorFlow Developer Certificate",
          description: "Deep learning and neural networks certification"
        },
        {
          title: "Google Cloud ML Engineer",
          description: "Cloud-based machine learning solutions"
        }
      ]
    },
    {
      category: "Positions & Leadership",
      icon: <Users className="h-6 w-6" />,
      color: "text-secondary",
      bgColor: "bg-secondary/10", 
      items: [
        {
          title: "Teaching Assistant",
          description: "IIT Kharagpur - Mentoring undergraduate students"
        },
        {
          title: "Block Representative",
          description: "Student representative for hostel block management"
        },
        {
          title: "Research Coordinator",
          description: "Coordinating research activities in the department"
        }
      ]
    },
    {
      category: "Competitions & Activities",
      icon: <Star className="h-6 w-6" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      items: [
        {
          title: "Flipkart GRiD Challenge",
          description: "Participated in national-level tech competition"
        },
        {
          title: "Rebel Foods Analytics Challenge",
          description: "Data analytics and business intelligence challenge"
        },
        {
          title: "Yes+ Workshop Participant",
          description: "Art of Living leadership and wellness program"
        },
        {
          title: "Technical Paper Publications",
          description: "Research papers in food engineering and ML"
        }
      ]
    },
    {
      category: "Skills & Interests",
      icon: <BookOpen className="h-6 w-6" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      items: [
        {
          title: "Badminton Player",
          description: "Active sports participation and team coordination"
        },
        {
          title: "Classical Dance",
          description: "Cultural activities and performance arts"
        },
        {
          title: "Cooking Enthusiast", 
          description: "Practical application of food science knowledge"
        },
        {
          title: "Research Publications",
          description: "Contributing to academic literature in food engineering"
        }
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic excellence, certifications, leadership roles, and extracurricular activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-elegant transition-smooth animate-slide-up h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${achievement.bgColor} mb-3`}>
                  <div className={achievement.color}>
                    {achievement.icon}
                  </div>
                </div>
                
                <CardTitle className="text-xl font-display text-foreground">
                  {achievement.category}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {achievement.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-sm text-foreground">
                        {item.title}
                      </h4>
                      {item.highlight && (
                        <Badge variant="default" className="ml-2 text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    {itemIndex < achievement.items.length - 1 && (
                      <hr className="border-border/50" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special highlight for GATE achievement */}
        <div className="mt-12 text-center animate-fade-in">
          <Card className="inline-block shadow-elegant gradient-primary text-primary-foreground max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <Trophy className="h-8 w-8 text-yellow-300" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">
                GATE AIR-32
              </h3>
              <p className="text-primary-foreground/90">
                Among the top 50 performers nationwide in Graduate Aptitude Test in Engineering 2023
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;