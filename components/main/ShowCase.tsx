import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Showcase = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center pb-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white py-20">
        Proudly presenting
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};