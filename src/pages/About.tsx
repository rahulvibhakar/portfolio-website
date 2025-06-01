
import { PageLayout } from "@/components/PageLayout";

const About = () => {
  const skills = [
    { category: "Design", items: ["UI/UX Design", "Design Systems"] },
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express","Firebase"] },
  ];

  const experiences = [
    {
      title: "Intern",
      company: "Prodevans Technology",
      period: "2024(August) - 2024(September)",
      description: "Learnt to use various tools and created real world project with experienced professionals."
    },
    {
      title: "Intern",
      company: "Shadowfox",
      period: "2025(April) - 2025(May",
      description: "Developed responsive web applications using React and TypeScript, collaborating closely with design and backend teams and learnt mnay data science related concepts."
    },
    
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-heading font-bold mb-6">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="aspect-square bg-muted rounded-full w-48 h-48 mx-auto md:mx-0"></div>
            <div className="md:col-span-2">
              <p className="text-lg mb-4">
                Hello! I'm a passionate designer and developer with enthusiasm of creating digital products that are both beautiful and functional.
              </p>
              <p className="mb-4">
                My journey in the digital world began with a curiosity about how things work and a desire to create.I combined my technical skills with creative thinking to build solutions that solve real problems.
              </p>
              <p>
                When I'm not designing or coding, you can find me exploring new hiking trails, experimenting with photography.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-heading font-bold mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.category} className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-heading font-bold mb-6">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.title} className="border-l-2 border-border pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <div className="flex items-center text-muted-foreground mb-2">
                  <span className="mr-2">{exp.company}</span>
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold mb-6">Education</h2>
          <div className="border-l-2 border-border pl-6 relative">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
            <h3 className="text-xl font-bold">Bachelor of Design</h3>
            <div className="flex items-center text-muted-foreground mb-2">
              <span className="mr-2">University of Design Arts</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                2015 - 2019
              </span>
            </div>
            <p>Major in Interactive Design with a minor in Computer Science.</p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;
