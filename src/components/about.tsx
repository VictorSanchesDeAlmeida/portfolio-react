export const About = () => {
    return (
        <div id="about" className="py-[28px]">
            <h2 className="text-[var(--card-text)] font-lekton text-xl relative mb-12 transition-colors duration-500">About me <span className="w-24 h-[1px] bg-[var(--card-text)] absolute top-1/2 left-24"></span></h2>
            <h3 className="font-lekton text-[var(--text-color-primary)] font-bold text-4xl mb-8 transition-colors duration-500">I am <span className="text-[var(--text-color-second)]">Victor Sanches</span></h3>
            <p className="text-[var(--text-color-primary)] font-lekton text-xl text-justify mb-14 transition-colors duration-500">I'm a Full Stack Developer with a passion for creating dynamic web solutions. I specialize in both front-end and back-end development, crafting user-friendly interfaces and building robust server-side systems. With a strong foundation in languages and frameworks, I thrive on turning ideas into functional, efficient code. I'm dedicated to continuous learning, staying current with industry trends, and collaborating with teams to deliver exceptional results. Let's work together to bring your digital projects to life!</p>
            <div className="flex justify-between items-center gap-8">
                <div className="w-full py-4 bg-card/10 rounded-xl flex items-center gap-4 justify-center">
                    <span className="text-[var(--text-color-primary)] font-lekton text-4xl font-bold max-lg:text-2xl transition-colors duration-500">4+</span>
                    <p className="font-lekton text-2xl text-[var(--text-color-second)] max-lg:text-xl">Years of <br /> Experience</p>
                </div>
                <div className="w-full py-4 bg-card/10 rounded-xl flex items-center gap-4 justify-center">
                    <span className="text-[var(--text-color-primary)] font-lekton text-4xl font-bold max-lg:text-2xl transition-colors duration-500">23</span>
                    <p className="font-lekton text-2xl text-[var(--text-color-second)] max-lg:text-xl">Projects <br /> Completed</p>
                </div>
            </div>
        </div>
    )
}