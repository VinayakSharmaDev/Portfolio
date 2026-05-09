import ResumeImg from '../assets/img/resume.png'

function Resume() {
    return (
        <section id='resume' className=" mt-6 scroll-mt-10">
            <h2 className="px-2 font-semibold text-2xl rounded-md">Resume</h2>

            <div className="w-full p-6 rounded-md shadow-md bg-[#ffffff]">

                <div className='flex flex-col items-center gap-6 sm:flex-row'>
                    <img className='block w-26' src={ResumeImg} alt="Vinayak Sharma Resume" />

                    <div>
                        <h3 className='font-semibold text-xl'>Resume</h3>
                        <p>One-page resume highlighting my projects, skills, and experience.</p>
                        <div className="my-3 flex flex-wrap gap-3 [&>*]:cursor-pointer [&>*]:px-2 [&>*]:py-1 rounded-sm">
                            <button className="btn"><a href="https://drive.google.com/file/d/12ADYp7BmnNoM2iGLDvGh1NYOPEqNCEXj/view?pli=1">Read</a></button>
                            <button className="btn"><a href="/src/assets/resume.pdf" download>Download</a></button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;