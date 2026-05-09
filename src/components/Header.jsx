import Logo from '../assets/img/Logo-nbg.png';

function Header() {
    return (
        <>
            <header className="w-full pr-1 mx-auto my-4 flex items-center bg-[#ffffff] tracking-wide font-medium shadow-md rounded-sm sm:text-lg sm:px-4 sm:h-8 md:h-12">
                <nav className="w-full" >
                    <ul className=" flex flex-wrap gap-2 items-center justify-around text-[16px] sm:gap-4">

                        <li className="flex-1 sm:block">
                            <a className="pointer-events-none" href="/"><img src={Logo} alt="Vinayak Sharma Portfolio Logo" className='size-7 sm:size-12' /></a>
                        </li>

                        <li><a className="cursor-pointer" href="#about">About</a></li>
                        <li><a className="cursor-pointer" href="#skills">Skills</a></li>
                        <li><a className="cursor-pointer" href="#projects">Projects</a></li>
                        <li><a className="cursor-pointer" href="#contact">Contact</a></li>
                        <li><a className="cursor-pointer" href="#resume">Resume</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;