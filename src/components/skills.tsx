import { useEffect, useState } from "react"
import { SkillsCard } from "./skillsCard"

interface Skill {
    id: number;
    item: string;
    icon: string;
    alt: string;
    barr: string;
}

export const Skills = () => {

    const [items, setItems] = useState<Skill[]>([])

    useEffect(() => {
        fetch("/json/skills.json")
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((error) => console.error("Error: ", error))
    }, [])

    return (
        <div id="skills" className="py-[28px] mt-20">
            <h2 className="text-[var(--card-text)] font-lekton text-xl relative mb-12 transition-colors duration-500">My skills <span className="w-24 h-[1px] bg-[var(--card-text)] absolute top-1/2 left-24"></span></h2>
            <h3 className="font-lekton text-[var(--text-color-primary)] font-bold text-4xl mb-8 transition-colors duration-500">My Skills <span className="text-[var(--text-color-second)]">Overview</span></h3>
            <p className="text-[var(--text-color-primary)] font-lekton text-xl text-justify mb-14 transition-colors duration-500">I'm a Full Stack Developer with a passion for A glimpse into my full-stack proficiency and technical prowess.</p>
            {items.map((skill) => (

                <SkillsCard
                    key={skill.id}
                    item={skill.item}
                    icon={skill.icon}
                    alt={skill.alt}
                    barr={skill.barr}
                />

            ))}
        </div>
    )
}