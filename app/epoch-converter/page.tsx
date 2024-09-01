// "use client"

// import { useState, useEffect } from 'react'
// import { Input } from "@/components/ui/input"
// import { Card, CardContent } from "@/components/ui/card"
// import { Clock, AlertCircle, Sun, Moon } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Switch } from "@/components/ui/switch"
// import { useDarkMode } from '@/hooks/useDarkMode'

// export default function EpochConverterPage() {
//     const [epoch, setEpoch] = useState('')
//     const [date, setDate] = useState('')
//     const [epochToDateResult, setEpochToDateResult] = useState('')
//     const [dateToEpochResult, setDateToEpochResult] = useState('')
//     const [error, setError] = useState('')
//     const [conversionCount, setConversionCount] = useState(0)
//     const { darkMode } = useDarkMode()

//     useEffect(() => {
//         fetch('/api/counter')
//             .then(res => res.json())
//             .then(data => setConversionCount(data.count))
//     }, [])

//     const convertEpochToDate = async () => {
//         const epochNumber = parseInt(epoch, 10)
//         if (isNaN(epochNumber)) {
//             setError('Invalid epoch time')
//             setEpochToDateResult('')
//         } else {
//             const dateObj = new Date(epochNumber * 1000)
//             setEpochToDateResult(dateObj.toUTCString())
//             setError('')

//             const response = await fetch('/api/counter', { method: 'POST' })
//             const data = await response.json()
//             setConversionCount(data.count)
//         }
//     }

//     const convertDateToEpoch = async () => {
//         const dateObj = new Date(date)
//         if (isNaN(dateObj.getTime())) {
//             setError('Invalid date')
//             setDateToEpochResult('')
//         } else {
//             setDateToEpochResult(Math.floor(dateObj.getTime() / 1000).toString())
//             setError('')

//             const response = await fetch('/api/counter', { method: 'POST' })
//             const data = await response.json()
//             setConversionCount(data.count)
//         }
//     }

//     return (
//         <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative pb-16">
//                 <header className="text-center py-12 sm:py-16 md:py-20">
//                     <div className={`inline-block p-2 rounded-lg shadow-lg mb-4 ${darkMode ? 'bg-indigo-600' : 'bg-gradient-to-r from-indigo-500 to-purple-600'}`}>
//                         <Clock size={40} className="text-white" />
//                     </div>
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Epoch Converter</h1>
//                     <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Convert between epoch timestamps and human-readable dates</p>
//                 </header>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <Card className={`rounded-xl shadow-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//                         <CardContent className="p-4 sm:p-6">
//                             <h2 className={`text-xl font-semibold mb-4 flex items-center ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>
//                                 <Clock className="mr-2 text-indigo-500" /> Epoch to Date
//                             </h2>
//                             <Input
//                                 type="number"
//                                 placeholder="Enter epoch time..."
//                                 value={epoch}
//                                 onChange={(e) => setEpoch(e.target.value)}
//                                 className={`mb-4 ${darkMode
//                                     ? 'bg-gray-700 text-gray-100 border-gray-600 focus:border-indigo-500'
//                                     : 'bg-white text-gray-900 border-gray-300 focus:border-indigo-500'
//                                     }`}
//                             />
//                             <Button onClick={convertEpochToDate} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
//                                 Convert to Date
//                             </Button>
//                             <div className={`mt-4 p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} min-h-[3rem] flex items-center`}>
//                                 {epochToDateResult ? (
//                                     <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{epochToDateResult}</p>
//                                 ) : (
//                                     <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Converted date will appear here</p>
//                                 )}
//                             </div>
//                         </CardContent>
//                     </Card>

//                     <Card className={`rounded-xl shadow-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//                         <CardContent className="p-4 sm:p-6">
//                             <h2 className={`text-xl font-semibold mb-4 flex items-center ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>
//                                 <Clock className="mr-2 text-indigo-500" /> Date to Epoch
//                             </h2>
//                             <Input
//                                 type="datetime-local"
//                                 value={date}
//                                 onChange={(e) => setDate(e.target.value)}
//                                 className={`mb-4 ${darkMode
//                                     ? 'bg-gray-700 text-gray-100 border-gray-600 focus:border-indigo-500'
//                                     : 'bg-white text-gray-900 border-gray-300 focus:border-indigo-500'
//                                     }`}
//                             />
//                             <Button onClick={convertDateToEpoch} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
//                                 Convert to Epoch
//                             </Button>
//                             <div className={`mt-4 p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} min-h-[3rem] flex items-center`}>
//                                 {dateToEpochResult ? (
//                                     <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{dateToEpochResult}</p>
//                                 ) : (
//                                     <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Converted epoch time will appear here</p>
//                                 )}
//                             </div>
//                         </CardContent>
//                     </Card>
//                 </div>

//                 {error && (
//                     <div className="mt-4 flex items-center text-red-500">
//                         <AlertCircle className="mr-2" size={16} />
//                         <span>{error}</span>
//                     </div>
//                 )}

//                 <div className={`absolute bottom-4 right-4 rounded-full px-3 py-1 text-sm font-semibold shadow ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700'
//                     }`}>
//                     Total Conversions: {conversionCount}
//                 </div>
//             </div>
//         </div>
//     )
// }


"use client"

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ToolLayout } from '@/components/ToolLayout'
import { ToolCard } from '@/components/ToolCard'
import { ErrorMessage } from '@/components/ErrorMessage'

export default function EpochConverterPage() {
    const [epoch, setEpoch] = useState('')
    const [date, setDate] = useState('')
    const [epochToDateResult, setEpochToDateResult] = useState('')
    const [dateToEpochResult, setDateToEpochResult] = useState('')
    const [error, setError] = useState('')
    const [conversionCount, setConversionCount] = useState(0)

    useEffect(() => {
        fetch('/api/counter')
            .then(res => res.json())
            .then(data => setConversionCount(data.count))
    }, [])

    const convertEpochToDate = async () => {
        const epochNumber = parseInt(epoch, 10)
        if (isNaN(epochNumber)) {
            setError('Invalid epoch time')
            setEpochToDateResult('')
        } else {
            const dateObj = new Date(epochNumber * 1000)
            setEpochToDateResult(dateObj.toUTCString())
            setError('')

            const response = await fetch('/api/counter', { method: 'POST' })
            const data = await response.json()
            setConversionCount(data.count)
        }
    }

    const convertDateToEpoch = async () => {
        const dateObj = new Date(date)
        if (isNaN(dateObj.getTime())) {
            setError('Invalid date')
            setDateToEpochResult('')
        } else {
            setDateToEpochResult(Math.floor(dateObj.getTime() / 1000).toString())
            setError('')

            const response = await fetch('/api/counter', { method: 'POST' })
            const data = await response.json()
            setConversionCount(data.count)
        }
    }

    return (
        <ToolLayout
            title="Epoch Converter"
            description="Convert between epoch timestamps and human-readable dates"
            icon={Clock}
        >
            <ToolCard title="Epoch to Date" icon={Clock}>
                <Input
                    type="number"
                    placeholder="Enter epoch time..."
                    value={epoch}
                    onChange={(e) => setEpoch(e.target.value)}
                    className="mb-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:border-indigo-500"
                />
                <Button onClick={convertEpochToDate} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Convert to Date
                </Button>
                <div className="mt-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 min-h-[3rem] flex items-center">
                    {epochToDateResult ? (
                        <p className="text-gray-600 dark:text-gray-300">{epochToDateResult}</p>
                    ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400">Converted date will appear here</p>
                    )}
                </div>
            </ToolCard>

            <ToolCard title="Date to Epoch" icon={Clock}>
                <Input
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mb-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:border-indigo-500"
                />
                <Button onClick={convertDateToEpoch} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Convert to Epoch
                </Button>
                <div className="mt-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 min-h-[3rem] flex items-center">
                    {dateToEpochResult ? (
                        <p className="text-gray-600 dark:text-gray-300">{dateToEpochResult}</p>
                    ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400">Converted epoch time will appear here</p>
                    )}
                </div>
            </ToolCard>

            {error && <ErrorMessage message={error} />}

            <div className="absolute bottom-4 right-4 rounded-full px-3 py-1 text-sm font-semibold shadow bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                Total Conversions: {conversionCount}
            </div>
        </ToolLayout>
    )
}