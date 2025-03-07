

interface SkillsCard {
    item: string,
    icon: string,
    alt: string,
    barr: string
}

export const SkillsCard = ({ item, icon, alt, barr }: SkillsCard) => {
    return (
        <div className="flex items-center gap-8 mb-8">
            <img className="w-12" src={icon} alt={alt} />
            <div className="w-full relative">
                <span className="text-[var(--text-color-primary)] font-lekton text-xl">{item}</span>
                <span
                    style={{left: barr}}
                    className="text-[var(--text-color-second)] font-lekton text-xl font-bold absolute -translate-x-8">
                    {barr}
                </span>
                <div className="w-full h-1 bg-[var(--text-color-primary)] mt-2">
                    <div
                        style={{ width: barr }}
                        className="h-full bg-[var(--text-color-second)] transition-all duration-500 delay-1000"
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}