import HTML from '../assets/img/html.png';
import CSS from '../assets/img/css.png';
import JavaScript from '../assets/img/javascript.png';
import Tailwind from '../assets/img/tailwind.png';
import React from '../assets/img/react.png';
import Git from '../assets/img/git.png';
import GitHub from '../assets/img/github.png';
import Vite from '../assets/img/vite.png';
import Vitest from '../assets/img/vitest.png';

function Skills() {
    return (
        <section id="skills" className="mt-6 scroll-mt-10" >
            <h2 className="px-2 font-semibold text-2xl rounded-md">Skills</h2>

            <div className="w-full p-6 rounded-md shadow-md bg-[#ffffff]">

                <div>
                    <h3 className="font-bold text-lg">FrontEnd:</h3>
                    <p>Technologies I use to build the visible parts of websites:</p>
                    <ul className="flex gap-2 gap-y-0 flex-wrap [&>*]:text-[14px] [&>*]:font-bold  [&>*]:flex [&>*]:items-center ">
                        <li><img className='size-6' src={HTML} alt="" /> HTML5</li>
                        <li><img className='size-6' src={CSS} alt="" /> CSS3</li>
                        <li><img className='size-6' src={JavaScript} alt="" /> JavaScript</li>
                        <li><img className='size-6' src={Tailwind} alt="" /> TailWind CSS</li>
                        <li><img className='size-6' src={React} alt="" /> React</li>
                    </ul>
                </div>

                <div className='mt-3'>
                    <h3 className="font-bold text-lg">Tools</h3>
                    <p>Helpful tools and tech:</p>
                    <ul className="flex gap-2 gap-y-0 flex-wrap [&>*]:text-[14px] [&>*]:font-bold [&>*]:flex [&>*]:items-center">
                        <li><img className='size-6' src={Git} alt="" /> Git</li>
                        <li><img className='size-6' src={GitHub} alt="" /> GitHub</li>
                        <li><img className='size-6' src={Vite} alt="" /> Vite</li>
                        <li><img className='size-6' src={Vitest} alt="" /> Vitest(Basic Understanding)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;