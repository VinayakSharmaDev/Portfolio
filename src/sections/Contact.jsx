import { useState } from "react";

function Contact() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const response = await fetch(
            "https://formsubmit.co/ajax/vinayaksharma.dev@gmail.com",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();

        if (data.success) {
            setStatus("Message sent!");
            e.target.reset();
        }
    };

    return (
        <section id="contact" className="mt-6 scroll-mt-10">
            <h2 className="px-2 font-semibold text-2xl rounded-md">Contact</h2>

            <div className="w-full p-6 rounded-md shadow-md bg-white">
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_captcha" value="false" />

                    <h3 className="p-1 font-bold text-[16px] sm:text-[18px]">Name</h3>
                    <input
                        className="w-full px-2 border-2 rounded-sm sm:w-1/4"
                        name="name"
                        type="text"
                        placeholder="Rohan"
                        required
                    />

                    <h3 className="p-1 font-bold text-[16px] sm:text-[18px]">Email Address</h3>
                    <input
                        className="w-full px-2 border-2 rounded-sm sm:w-1/4"
                        name="email"
                        type="email"
                        placeholder="dev@mail.com"
                        required
                    />

                    <h3 className="p-1 font-bold text-[16px] sm:text-[18px]">Message</h3>
                    <textarea
                        className="w-full p-2 border-2 rounded-sm block"
                        name="message"
                        placeholder="Your Message"
                        required
                    />

                    <button
                        className="mt-5 mb-4 px-4 py-1 border-2 rounded-2xl bg-[#c75b12] hover:bg-amber-700"
                        type="submit"
                    >
                        Submit
                    </button>

                    <p>{status}</p>
                </form>
            </div>
        </section>
    );
}

export default Contact;