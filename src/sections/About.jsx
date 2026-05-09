function About() {
    return (
        <>
            <section id="about" className=" w-full mt-6 scroll-mt-10">

                <h1 className="px-2 font-semibold text-2xl rounded-md">About me</h1>

                <div className="flex flex-col gap-2 md:flex-row">
                    <div className="w-full p-4 bg-[#ffffff] rounded-sm shadow-md md:w-1/4" >
                        <h2 className="mb-1 text-[18px] font-medium">Who is <span className="text-[#c75b12]">Vinayak Sharma</span>?</h2>
                        <p>
                            I am Vinayak Sharma a self-taught developer passionate about learning how to code and solve real-world problems. I enjoy writing clear and readable code. Currently, I am focused on web development.
                        </p>
                    </div>

                    <div className="w-full p-4 bg-[#ffffff] rounded-sm shadow-md md:w-3/4">
                        <h2 className="mb-1 text-[18px] font-medium">What Drives Me:</h2>
                        <p>When I was in 2nd or 3rd grade, my brother used to play a lot of video games. While watching him play, I became curious about how games actually work. He introduced me to the idea of coding. I tried learning coding back then, but at that age, I couldn’t continue. Years later, when my brother pursued a B.Tech degree, it inspired me to try coding again. This time, I stayed consistent and that’s when my real journey into coding began. </p>
                    </div>
                </div>

            </section>
        </>
    );
};

export default About;