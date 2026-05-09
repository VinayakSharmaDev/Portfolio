function ProjectCard({ data }) {
    return (
        <>

            <div className="max-w-72 mx-auto p-2 py-4 text-[12px] border-2 rounded-sm shadow-lg bg-[#faf7f3] sm:mx-0">
                <img src={data.image} alt="Vinayak Sharma Portfolio" className="rounded-md block" />
                <h3 className="text-[16px] font-semibold" >{data.title}</h3>
                <p className="max-h-8 mt-1 leading-4 text-[#555555] flex-1">{data.discription}</p>
                <h3 className="text-[#555555] mb-1">Tech: {data.techStack}</h3>
                <div>
                    <ul className="flex flex-row">
                        <li className="flex-1">{data.mode}</li>
                        <li><button className="bg-[#c75b12] mx-1 min-w-12 rounded-sm cursor-pointer hover:bg-amber-700 transition-colors duration-200"><a href={data.demoLink} target="_blank">Demo</a></button></li>
                        <li><button className="bg-[#c75b12] min-w-12 rounded-sm cursor-pointer hover:bg-amber-700 transition-colors duration-200 "><a href={data.github} target="_blank">Live</a></button></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;