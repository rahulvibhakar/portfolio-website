
import { PageLayout } from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Event Management",
      description: "Event Management is a comprehensive web-based system designed to streamline the planning and execution of events. It allows organizers to create and manage events, handle attendee registrations, and maintain real-time records of participants.",
      tags: ["HTML", "XAMPP Server", "Tailwind CSS"],
      category: "web",

      links: {
    
        github: "https://github.com/rahulvibhakar/Event-management"
      },
      image:"/event_management.png"
    },
    
    {
      id: 2,
      title: "Employee Data Analysis",
      description: "Employee Data Analysis is a data-driven project focused on extracting meaningful insights from structured employee records. By applying data cleaning, visualization, and machine learning techniques, the system identifies key trends related to employee performance, attrition, departmental strengths, and workforce distribution.A user-friendly dashboard built using Streamlit allows interactive exploration of various metrics.",
      tags: ["Random Forest", "Streamlit", "Tailwind CSS"],
      category: "web",
      links: {
    
        github: "https://github.com/rahulvibhakar/Employee-Data-Analysis"
      },
      image:"/employee_analysis.png"
    },
    {
      id: 3,
      title: "Task Allocator",
      description: "Task Allocator is a smart task management system that automates the assignment of tasks based on team members skills, availability, and current workload. Designed to improve team efficiency and prevent burnout, the system uses intelligent algorithms and natural language processing models match tasks to the most suitable individuals.It includes features like skill tracking, workload visualization, and real-time updates.",
      tags: ["HuggingFace", "React", "MongoDB"],
      category: "design",
      links: {
    
        github:"https://github.com/rahulvibhakar/Task-Allocator"
      },
      image:"/task_allocator.jpg"
    },
    {
      id: 4,
      title: "Emotion Based Music Recommendation",
      description: "Emotion-Based Music Recommendation is an AI-powered system that detects human emotions and suggests personalized music tracks accordingly. Using facial emotion recognition techniques with OpenCV and machine learning, the system analyzes real-time expressions or uploaded images to classify emotions such as happiness, sadness, anger, or surprise.",
      tags: ["User data", "UI/UX"],
      category: "design",
      links: {

        github: "https://github.com/rahulvibhakar/Human-Emotion-Recognition"
      },
      image:"/emotion_detection.jpg"
    },
    {
      id: 5,
      title: "Cricket Fielding Analysis",
      description: "Built an interactive dashboard using Streamlit to visualize and analyze over 50 fielding events in sports. The tool displays key metrics such as player positions and runs saved/conceded, helping analysts derive actionable insights",
      tags: ["Streamlit", "Pandas", "Python"],
      category: "web",
      links: {
    
        github: "https://github.com/rahulvibhakar/Cricket_Fielding_Analysis"
      },
      image:"/cricket_analysis.png"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: " This site is designed to give you insight into my technical expertise, creativity, and the projects that have helped shape my skills. Built with modern technologies such as React, Tailwind CSS, and TypeScript, it reflects my commitment to clean, efficient, and responsive design principles.",
      tags: ["React", "CSS", "Python"],
      category: "design",
      links: {
    
        github: "https://github.com/rahulvibhakar/portfolio-website"
      },
      image:"/portfolio.png"
    },

  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work in web development and design. Each project represents a unique challenge and solution.
          </p>
        </div>

        <Tabs defaultValue="all" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.filter(p => p.category === "web").map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="design">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.filter(p => p.category === "design").map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  links: {
    live: string;
    github?: string;
  };
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      {/* Image container */}
      <div className="aspect-video bg-muted overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <div className="flex gap-3 mt-4">
          {project.links.github && (
            <Button asChild size="sm" variant="outline">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Github className="mr-1 h-4 w-4" /> Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
