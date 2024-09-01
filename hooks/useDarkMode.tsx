import { useState, useEffect } from 'react'

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true'
        setDarkMode(isDarkMode)
        document.documentElement.classList.toggle('dark', isDarkMode)
    }, [])

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode
        setDarkMode(newDarkMode)
        localStorage.setItem('darkMode', String(newDarkMode))
        document.documentElement.classList.toggle('dark', newDarkMode)
    }

    const changeDarkModeAndReload = (newDarkMode: boolean) => {
        localStorage.setItem('darkMode', String(newDarkMode))
        window.location.reload()
    }

    return { darkMode, toggleDarkMode, changeDarkModeAndReload }
}