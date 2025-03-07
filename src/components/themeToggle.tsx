import { useEffect, useState } from "react"

export const ThemeToggle = () => {

    const [theme, setTheme] = useState("dark");

    useEffect(() => {

        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) {
            setTheme(savedTheme)
            document.documentElement.setAttribute("data-theme", savedTheme)
        }

    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme)
        document.documentElement.setAttribute("data-theme", newTheme)
        localStorage.setItem("theme", newTheme)
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-20 p-8">
            <label className="group relative inline-flex cursor-pointer flex-col items-center">
                <input
                    className="peer sr-only"
                    type="checkbox"
                    checked={theme === "light"}  // Vincula o estado ao checkbox
                    onChange={toggleTheme}        // Quando o estado mudar, alterna o tema
                />
                <div
                    className="relative h-6 w-14 rounded-full bg-gradient-to-r bg-[var(--text-color-primary)] shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] transition-all duration-500 after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-gradient-to-br after:shadow-[2px_2px_8px_rgba(0,0,0,0.3)] after:transition-all after:duration-500 peer-checked:after:translate-x-8 hover:after:scale-95 active:after:scale-90 after:bg-[var(--bg-color)]"
                >
                    <span className="absolute inset-1 rounded-full bg-gradient-to-tr via-transparent to-transparent"></span>
                    <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 peer-checked:animate-glow peer-checked:opacity-100"></span>
                </div>
            </label>
        </div>
    )
}