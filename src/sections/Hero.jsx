import Profile from '../assets/img/profile.jpeg';

function Hero() {
    return (
        <>
            <section className="flex flex-col gap-2 mt-7 sm:grid sm:grid-cols-2 md:flex md:flex-row">

                <div className="w-full px-4 rounded-sm bg-[#ffffff] flex items-center gap-4 shadow-md sm:flex-col sm:gap-2 md:w-1/3 md:order-2" >

                    <div className='py-2'>
                        <img src={Profile} alt="Vinayak Sharma profile Picture" className='mx-auto rounded-full size-42 sm:size-52 
                        ' />
                    </div>

                    <div className="mb-3 mx-auto flex flex-wrap gap-1 gap-y-2 justify-around [&>*]:cursor-pointer [&>*]:px-2 [&>*]:py-1 rounded-sm">
                        <button className="btn"><a href="https://github.com/VinayakSharmaDev" target='_blank'>GitHub</a></button>
                        <button className="btn"><a href="https://x.com/vinayaksharmadv" target='_blank'>X.com</a></button>
                        <button className="btn"><a href="https://www.linkedin.com/in/vinayaksharmadev" target='_blank'>LinkedIn</a></button>
                    </div>

                </div>

                <div className="w-full bg-[#ffffff] text-xl lg:text-[22px] shadow-md flex flex-col justify-around [&>*]:px-4 rounded-sm space-y-2">
                    <h2 className="mt-5">Hi, I'm</h2>
                    <h1 className="my-3 italic text-4xl font-bold text-[#c75b12]">Vinayak Sharma</h1>
                    <p className='max-w-220'>Frontend Developer building clean, responsive UI with React & Tailwind.
                        Focused on real-world projects, not tutorials.</p>
                    <h2 className="mb-4 sm:hidden md:block">Currently living in Pune, Maharashtra</h2>
                    <h2 className="mb-10 text-gray-600 sm:hidden md:block">Frontend Developer building clean UI with React & Tailwind</h2>
                </div>

                <span className='w-full sm:col-span-2 bg-[#ffffff] text-xl  lg:text-[22px] shadow-md flex flex-col justify-around rounded-sm space-y-2 [&>*]:px-4 md:hidden'>
                    <h2 className="mt-4 ">Currently living in Pune, Maharashtra</h2>
                    <h2 className="mb-2 text-gray-600">Frontend Developer building clean UI with React & Tailwind</h2>
                </span>

            </section>
        </>
    )
};

export default Hero;