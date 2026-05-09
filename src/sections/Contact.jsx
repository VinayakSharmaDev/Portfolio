function Contact() {
    return (
        <>
            <section id="contact" className="mt-6 scroll-mt-10">
                <h2 className="px-2 font-semibold text-2xl rounded-md">Contact</h2>

                <div id="contact" className="w-full p-6 rounded-md shadow-md bg-[#ffffff]">

                    <form action="https://formsubmit.co/vinayaksharma.dev@gmail.com" method="POST">

                        <input type="hidden" name="_next" value="http://localhost:5173/"></input>

                        <h3 className="p-1 font-bold text-[16px] sm:text-[18px] ">Name</h3>
                        <input className="w-full px-2 border-2 rounded-sm sm:w-1/4" name="name" type="text" placeholder="Rohan" required />

                        <h3 className="p-1 font-bold text-[16px] sm:text-[18px] ">Email Adress</h3>
                        <input className="w-full px-2 border-2 rounded-sm sm:w-1/4" name="email" type="email" placeholder="dev@mail.com" required />

                        <h3 className="p-1 font-bold text-[16px] sm:text-[18px] ">Message</h3>
                        <textarea className="w-full p-2 border-2 rounded-sm block" name="message" placeholder="Your Message" required></textarea>

                        <button className="mt-5 mb-8 px-4 py-1 border-2 rounded-2xl bg-[#c75b12] hover:bg-amber-700 transition-colors duration-200 text-gray-800 text-[18px] font-semibold sm:px-5" type="submit">Submit</button>
                    </form>

                    <div className="text-[18px] mt-4">Or email me directly at:</div>
                    <span className="text-[16px] sm:text-[20px] font-extrabold ">
                        <a className="break-all" href="mailto:vinayaksharma.dev@gmail.com">vinayaksharma.dev@gmail.com</a></span>

                    <div className="my-3 flex flex-wrap gap-3 [&>*]:cursor-pointer [&>*]:px-2 [&>*]:py-1 rounded-sm">
                        <button className="btn"><a href="https://github.com/VinayakSharmaDev" target="_blank">GitHub</a></button>
                        <button className="btn"><a href="x.com/vinayaksharmadv" target="_blank">X.com</a></button>
                        <button className="btn"><a href="https://www.linkedin.com/in/vinayaksharmadev" target="_blank">LinkedIn</a></button>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Contact;