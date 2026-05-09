import projectsData from "../data/projects";
import ProjectCard from "../components/ProjectCart";

function Projects() {
    return (
        <section id="projects" className="mt-6 scroll-mt-10">
            <h1 className="px-2 font-semibold text-2xl rounded-md">Projects</h1>

            <div className="w-full p-6 rounded-md shadow-md bg-[#ffffff] flex gap-2  flex-col sm:flex-row">
                {projectsData.map((data) => {
                    return (
                        <ProjectCard key={data.id} data={data} />
                    );
                })}
            </div>

        </section>
    );
};

export default Projects;