import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";

const Home = () => {
  const projects = [
    {
      title: "Event Management",
      description: "A complete system to manage events, attendees, and registrations efficiently.",
      github: "https://github.com/rahulvibhakar/Event-management",
      image: "/event_management.png", // Ensure this is in the public/ folder
    },
    {
      title: "Emotion Based Music Recommendation",
      description: "An intelligent system for analyzing human emotion and recommending music based on content.",
      github: "https://github.com/rahulvibhakar/Human-Emotion-Recognition",
      image: "/emotion_detection.jpg",
    },
    {
      title: "Portfolio Website",
      description: "This platform highlights my expertise in building responsive, user-friendly, and modern web applications using modern technologies.",
      github: "https://github.com/rahulvibhakar/portfolio-website",
      image: "/portfolio.png", // Optional if you have an image
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="/rahul.jpg"
            alt="Rahul Vibhakar M R"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-primary shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Hello, I'm <span className="text-primary">Rahul Vibhakar M R</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in text-balance">
            A designer and developer crafting thoughtful digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="animate-fade-in">
              <Link to="/projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="animate-fade-in">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work across design and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-square bg-muted overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium inline-flex items-center"
                  >
                    View on GitHub <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Latest Blog Posts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thoughts, insights and ideas about design and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map(index => (
              <div key={index} className="border border-border rounded-lg p-6 transition-all hover:shadow-md">
                <div className="text-sm text-muted-foreground mb-3">April {index + 1}, 2025</div>
                <h3 className="text-xl font-bold mb-3">Blog Post Title {index}</h3>
                <p className="text-muted-foreground mb-4">
                  A preview of the blog post content. This gives readers a brief idea of what the article is about.
                </p>
                <Link to={`/blog`} className="text-primary font-medium inline-flex items-center">
                  Read article <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/blog">Read All Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
