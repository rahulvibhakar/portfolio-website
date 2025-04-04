
import { PageLayout } from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS. Features a responsive design, dark mode, and smooth transitions.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      category: "web",
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "An admin dashboard for managing products, orders, and customers for an e-commerce platform.",
      tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      category: "web",
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "A mobile banking application designed to provide a seamless user experience for basic banking operations.",
      tags: ["Figma", "Prototyping", "UI/UX"],
      category: "design",
      links: {
        live: "https://example.com"
      }
    },
    {
      id: 4,
      title: "Travel Booking Platform",
      description: "A web application for booking flights, hotels, and experiences. Features a clean, intuitive interface.",
      tags: ["Figma", "UI/UX", "User Research"],
      category: "design",
      links: {
        live: "https://example.com"
      }
    },
    {
      id: 5,
      title: "Note Taking App",
      description: "A minimalist note taking application with Markdown support, tags, and search functionality.",
      tags: ["React", "TypeScript", "Firebase"],
      category: "web",
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "A dashboard that displays current weather conditions and forecasts for multiple locations.",
      tags: ["React", "TypeScript", "API Integration"],
      category: "web",
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    }
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
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="aspect-video bg-muted"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-4">
          <Button asChild size="sm" variant="default">
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <ExternalLink className="mr-1 h-4 w-4" /> View Project
            </a>
          </Button>
          
          {project.links.github && (
            <Button asChild size="sm" variant="outline">
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
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
