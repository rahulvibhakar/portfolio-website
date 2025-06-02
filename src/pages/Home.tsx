import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";

const Home = () => {
  const roles = [
    "Computer Science Student",
    "Developer",
    "Frontend Enthusiast",
    "Leader",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [fade, setFade] = useState(true); // true means visible (opacity 1), false means hidden (opacity 0)

  useEffect(() => {
    const displayDuration = 10000; // total time to show each role (10s)
    const fadeDuration = 1000; // fade out/in duration (1s)

    const interval = setInterval(() => {
      setFade(false); // start fade out

      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setFade(true); // fade in new role
      }, fadeDuration);
    }, displayDuration);

    return () => clearInterval(interval);
  }, [roles.length]);

  const projects = [
    {
      title: "Event Management",
      description: "A complete system to manage events, attendees, and registrations efficiently.",
      github: "https://github.com/rahulvibhakar/Event-management",
      image: "/event_management.png",
    },
    {
      title: "Emotion Based Music Recommendation",
      description: "An intelligent system for analyzing human emotion and recommending music based on content.",
      github: "https://github.com/rahulvibhakar/Human-Emotion-recognition-to-Recommend-Songs-main",
      image: "/emotion_detection.jpg",
    },
    {
      title: "Task Allocator",
      description: "Task Allocator is a smart task management system that automates the assignment of tasks based on team members skills, availability, and current workload.",
      github: "https://github.com/rahulvibhakar/Task-Allocator",
      image: "/task_allocator.jpg",
    },
  ];

  return (
    <PageLayout hideNav={true}>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="/rahul.jpg"
            alt="Rahul Vibhakar M R"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-primary shadow-lg object-cover"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Hello, I'm <span className="text-primary">Rahul Vibhakar M R</span>
          </h1>

          {/* Animated Role with Transition */}
          <div className="h-8 md:h-10 mb-8 overflow-hidden relative">
            <p
              key={currentRole}
              className={`text-xl md:text-2xl text-muted-foreground text-balance transition-opacity duration-1000 ease-in-out ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {roles[currentRole]}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a
                href="https://drive.google.com/file/d/1LmrWvZK9pI9L1YP8Ml-6Kmc50qxZUI7C/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
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
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="aspect-square bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
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
        </div>
      </section>

      {/* Quote Section with Scenic Background */}
      <section
        className="relative bg-cover bg-center py-24 text-white text-center"
        style={{ backgroundImage: "url('/scenery.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <blockquote className="text-2xl md:text-3xl italic font-semibold">
            "The best way to predict the future is to create it."
          </blockquote>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
