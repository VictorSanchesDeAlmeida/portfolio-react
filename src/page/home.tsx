import { CardAbout } from "../components/cardAbout"
import { About } from "../components/about"
import { Skills } from "../components/skills"


export const Home = () => {

    return (
        <div className="bg-[var(--bg-color)] mt-20 w-full transition-colors duration-500">
            <div className="w-full max-w-[1072px] mx-auto py-8">

                <div className="flex gap-[51px] justify-center max-lg:px-4">
                    <CardAbout />
                    <div className="w-full max-w-[569px]">
                        <About/>
                        <Skills/>
                    </div>
                </div>

            </div>
        </div>
    )
}