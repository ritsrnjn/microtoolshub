import { useTheme } from '../contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'
import { Switch } from "@/components/ui/switch"

export function DarkModeToggle() {
    const { darkMode, toggleDarkMode } = useTheme()

    return (
        <div className="flex items-center space-x-2">
            <Sun className="h-5 w-5" />
            <Switch
                checked={darkMode}
                onCheckedChange={toggleDarkMode}
                className={`${darkMode ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                <span className="sr-only">Toggle dark mode</span>
                <span
                    className={`${darkMode ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
            </Switch>
            <Moon className="h-5 w-5" />
        </div>
    )
}