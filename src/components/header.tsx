import { ThemeToggle } from './themeToggle'
import logo from '/logo.svg?url'

export const Header = () => {

    return (
        <div className="bg-[var(--bg-color)] w-full h-20 transition-colors duration-500 shadow-lg shadow-shadow-primary/10 fixed top-0 right-0 z-50">
            <div className="w-full max-w-[1072px] h-full mx-auto flex justify-between items-center">
                <div className='flex items-center gap-[54px]'>
                    <h1>
                        <a href="#"><img src={logo} alt="Logo do site" className='w-18' /></a>
                    </h1>
                    <ThemeToggle />
                </div>

                <nav>
                    <ul className='flex gap-[48px] text-[var(--text-color-primary)] font-lekton transition-colors duration-500'>
                        <li>
                            <a href="#about" className='font-bold'>About</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Experience</a>
                        </li>
                        <li>
                            <a href="#">Review</a>
                        </li>
                        <li>
                            <a href="#" className='bg-[var(--text-color-second)] px-[16px] py-[10px] rounded-lg font-bold text-white'>Contact Me</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}