"use client"

import { useState, useRef, useEffect } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Code, Download, AlertCircle, Sun, Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"
// import { Switch } from "@/components/ui/switch"
import { Switch } from "../components/ui/switch"

export default function Page() {
  // TODO: implement a total counter across all tools
  // const [conversionCount, setConversionCount] = useState<number | null>(null)
  const [darkMode, setDarkMode] = useState(false)

  // useEffect(() => {
  //   fetch('/api/counter')
  //     .then(res => res.json())
  //     .then(data => setConversionCount(data.count))
  //     .catch(err => console.error('Error fetching conversion count:', err))
  // }, [])



  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative pb-16">
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <Sun className="h-5 w-5" />
          <Switch
            checked={darkMode}
            onCheckedChange={setDarkMode}
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
        <header className="text-center py-12 sm:py-16 md:py-20">
          <div className={`inline-block p-2 rounded-lg shadow-lg mb-4 ${darkMode ? 'bg-indigo-600' : 'bg-gradient-to-r from-indigo-500 to-purple-600'}`}>
            <Wrench size={40} className="text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Micro Tools Hub</h1>
          <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>A hub for all useful tools!</p>
        </header>

        {/* <div className={`absolute bottom-4 right-4 rounded-full px-3 py-1 text-sm font-semibold shadow ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700'
          }`}>
          Total Conversions: {conversionCount !== null ? conversionCount : '  Loading...'}
        </div> */}


      </div>
    </div>
  )
}

