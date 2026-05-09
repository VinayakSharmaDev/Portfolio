import FormSubmitImg from '../assets/img/formsubmit.png';
import Vinayak from '../assets/img/Profile.jpeg';

function Footer() {
    return (
        <section className='mt-16 p-4 pb-8 shadow-md bg-[#ffffff] '>
            <div className='mb-6 pb-2 border-b-2'>
                <h3 className="text-[20px] font-bold">Credits</h3>
                <div className='flex gap-3 items-center mt-2'>
                    <img className='w-20 h-5' src={FormSubmitImg} alt="FormSubmit.com logo" />
                    <div>
                        <h3 className='font-bold mb-1'>FormSubmit</h3>
                        <p>Used FormSubmit to send messages directly to my mailbox.</p>
                    </div>
                </div>
            </div>

            <div className='w-full mx-auto [&>*]:text-center'>
                <p>© 2026 Vinayak Sharma. All rights reserved.</p>
                <p className='my-2 flex items-center justify-center'>Made with 💙 by <span><img className='size-8 mx-3 rounded-full' src={Vinayak} alt="" /></span> Vinayak Sharma</p>
            </div>
        </section>
    );
};

export default Footer;