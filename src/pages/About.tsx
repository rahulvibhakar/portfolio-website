import { PageLayout } from "@/components/PageLayout";

const About = () => {
  // Skills now include color for each item and level (for bar width)
  const skills = [
    {
      category: "Web Development",
      items: [
        {
          name: "React.js",
          level: 80,
          color: "bg-blue-600",
          img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
          name: "Tailwind CSS",
          level: 75,
          color: "bg-teal-500",
        },
        {
          name: "Node.js with Express.js",
          level: 70,
          color: "bg-green-600",
          img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
        },
      ],
    },
    {
      category: "Database",
      items: [
        {
          name: "MongoDB",
          level: 75,
          color: "bg-green-700",
          img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        },
        {
          name: "MySQL",
          level: 70,
          color: "bg-blue-700",
        },
      ],
    },
    {
      category: "Backend and DevOps",
      items: [
        {
          name: "Docker",
          level: 75,
          color: "bg-blue-500",
          img: "https://cdn.worldvectorlogo.com/logos/docker.svg",
        },
        {
          name: "Kubernetes",
          level: 70,
          color: "bg-blue-600",
        },
      ],
    },
    {
      category: "Programming Languages",
      items: [
        {
          name: "Python",
          level: 80,
          color: "bg-yellow-400",
          img: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        },
        {
          name: "Java",
          level: 75,
          color: "bg-red-600",
          img: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
        },
        {
          name: "JavaScript",
          level: 80,
          color: "bg-yellow-300",
          img: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
        },
      ],
    },
    {
      category: "Data Science and AI",
      items: [
        {
          name: "Machine Learning",
          level: 70,
          color: "bg-purple-600",
        },
        {
          name: "Data Analysis",
          level: 75,
          color: "bg-indigo-600",
          img: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
        },
        {
          name: "Generative AI",
          level: 65,
          color: "bg-pink-600",
        },
      ],
    },
  ];

  const experiences = [
    {
      title: "Intern",
      company: "Prodevans Technology",
      period: "2024(August) - 2024(September)",
      description: [
        "Learnt to use various development tools and technologies.",
        "Collaborated with experienced professionals on real-world projects.",
        "Gained practical exposure to software development lifecycle.",
      ],
    },
    {
      title: "Data Science Intern",
      company: "Shadowfox",
      period: "2025(April) - 2025(May)",
      description: [
        "Developed responsive web applications using React and TypeScript.",
        "Designed the User-Interface using Streamlit to enhance features.",
        "Acquired knowledge of various data science concepts and tools.",
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-heading font-bold mb-6">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="aspect-square rounded-full w-48 h-48 mx-auto md:mx-0 overflow-hidden">
              <img
                src="/rahul.jpg"
                alt="My photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-lg mb-4">
                Currently an undergraduate pursuing a Bachelor of Technology (B.Tech) in
                Computer Science and Engineering at BNMIT, Bangalore. I am a passionate
                designer and developer driven by a curiosity to understand how things
                work and a desire to create beautiful, functional digital products. I
                would love to combine technical skills with creative thinking to build
                solutions that solve real-world problems while staying at the forefront
                of emerging technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-heading font-bold mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.category} className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">{skill.category}</h3>
                <ul className="space-y-4">
                  {skill.items.map((item) => (
                    <li key={item.name} className="flex items-center gap-3">
                      {item.img && (
                        <img
                          src={item.img}
                          alt={`${item.name} logo`}
                          className="w-6 h-6 object-contain"
                        />
                      )}
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-muted-foreground">{item.name}</span>
                          <span className="text-muted-foreground">{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded h-4">
                          <div
                            className={`${item.color} h-4 rounded`}
                            style={{ width: `${item.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-heading font-bold mb-6">Languages</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground max-w-md mx-auto">
            <li>Kannada</li>
            <li>English</li>
            <li>Telugu</li>
            <li>Hindi</li>
          </ul>
        </section>

        {/* Work Experience Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-heading font-bold mb-6">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="border-l-2 border-border pl-6 relative"
              >
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <div className="flex items-center text-muted-foreground mb-2">
                  <span className="mr-2">{exp.company}</span>
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold mb-6">Education</h2>

          {/* Bachelor of Engineering */}
          <div className="border-l-2 border-border pl-6 relative mb-8">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
            <h3 className="text-xl font-bold">Bachelor of Engineering</h3>
            <div className="flex items-center text-muted-foreground mb-2">
              <span className="mr-2">B.N.M Institute of Technology</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                2022 - 2026
              </span>
            </div>
            <p>Pursuing Bachelor of Engineering in Computer Science with CGPA of 8.66.</p>
          </div>

          {/* Pre University Board */}
          <div className="border-l-2 border-border pl-6 relative mb-8">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
            <h3 className="text-xl font-bold">Pre University Board</h3>
            <div className="flex items-center text-muted-foreground mb-2">
              <span className="mr-2">SGPTA PU COLLEGE</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                2020 - 2022
              </span>
            </div>
            <p>Completed PCMC with 86%.</p>
          </div>

          {/* ICSE Board */}
          <div className="border-l-2 border-border pl-6 relative">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
            <h3 className="text-xl font-bold">ICSE Board</h3>
            <div className="flex items-center text-muted-foreground mb-2">
              <span className="mr-2">Auden Public School</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                2010 - 2020
              </span>
            </div>
            <p>Completed ICSE Board with 89%.</p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;
