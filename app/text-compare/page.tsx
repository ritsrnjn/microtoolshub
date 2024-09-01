// "use client"

// import { useState, useEffect } from 'react'
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent } from "@/components/ui/card"
// import { FileText, AlertCircle, Sun, Moon } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Switch } from "@/components/ui/switch"
// import { useDarkMode } from '@/hooks/useDarkMode'

// export default function TextComparePage() {
//     const [text1, setText1] = useState('')
//     const [text2, setText2] = useState('')
//     const [result, setResult] = useState('')
//     const [error, setError] = useState('')
//     const [conversionCount, setConversionCount] = useState(0)
//     let { darkMode } = useDarkMode()

//     useEffect(() => {
//         fetch('/api/counter')
//             .then(res => res.json())
//             .then(data => setConversionCount(data.count))
//     }, [])

//     const compareTexts = async () => {
//         if (!text1.trim() || !text2.trim()) {
//             setError('Please enter text in both fields.')
//             setResult('')
//             return
//         }

//         setError('')
//         if (text1 === text2) {
//             setResult('The texts are identical.')
//         } else {
//             const words1 = text1.split(/\s+/)
//             const words2 = text2.split(/\s+/)
//             const diffWords = words1.filter((word, index) => word !== words2[index])
//             setResult(`The texts are different. Different words: ${diffWords.join(', ')}`)
//         }

//         const response = await fetch('/api/counter', { method: 'POST' })
//         const data = await response.json()
//         setConversionCount(data.count)
//     }

//     return (
//         <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative pb-16">
//                 <header className="text-center py-12 sm:py-16 md:py-20">
//                     <div className={`inline-block p-2 rounded-lg shadow-lg mb-4 ${darkMode ? 'bg-indigo-600' : 'bg-gradient-to-r from-indigo-500 to-purple-600'}`}>
//                         <FileText size={40} className="text-white" />
//                     </div>
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Text Compare Tool</h1>
//                     <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Compare two texts and find the differences instantly</p>
//                 </header>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <Card className={`rounded-xl shadow-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//                         <CardContent className="p-4 sm:p-6">
//                             <h2 className={`text-xl font-semibold mb-4 flex items-center ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>
//                                 <FileText className="mr-2 text-indigo-500" /> First Text
//                             </h2>
//                             <Textarea
//                                 placeholder="Enter first text here..."
//                                 value={text1}
//                                 onChange={(e) => setText1(e.target.value)}
//                                 className={`min-h-[200px] sm:min-h-[300px] mb-4 rounded-lg ${darkMode
//                                     ? 'bg-gray-700 text-gray-100 border-gray-600 focus:border-indigo-500'
//                                     : 'bg-white text-gray-900 border-gray-300 focus:border-indigo-500'
//                                     }`}
//                             />
//                         </CardContent>
//                     </Card>

//                     <Card className={`rounded-xl shadow-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//                         <CardContent className="p-4 sm:p-6">
//                             <h2 className={`text-xl font-semibold mb-4 flex items-center ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>
//                                 <FileText className="mr-2 text-indigo-500" /> Second Text
//                             </h2>
//                             <Textarea
//                                 placeholder="Enter second text here..."
//                                 value={text2}
//                                 onChange={(e) => setText2(e.target.value)}
//                                 className={`min-h-[200px] sm:min-h-[300px] mb-4 rounded-lg ${darkMode
//                                     ? 'bg-gray-700 text-gray-100 border-gray-600 focus:border-indigo-500'
//                                     : 'bg-white text-gray-900 border-gray-300 focus:border-indigo-500'
//                                     }`}
//                             />
//                         </CardContent>
//                     </Card>
//                 </div>

//                 <div className="mt-8">
//                     <Button onClick={compareTexts} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
//                         Compare Texts
//                     </Button>
//                 </div>

//                 {error && (
//                     <div className="mt-4 flex items-center text-red-500">
//                         <AlertCircle className="mr-2" size={16} />
//                         <span>{error}</span>
//                     </div>
//                 )}

//                 {result && (
//                     <Card className={`mt-8 rounded-xl shadow-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//                         <CardContent className="p-4 sm:p-6">
//                             <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>Result:</h2>
//                             <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{result}</p>
//                         </CardContent>
//                     </Card>
//                 )}

//                 <div className={`absolute bottom-4 right-4 rounded-full px-3 py-1 text-sm font-semibold shadow ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700'
//                     }`}>
//                     Total Comparisons: {conversionCount}
//                 </div>
//             </div>
//         </div>
//     )
// }


"use client"

import { useState, useEffect } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ToolLayout } from '@/components/ToolLayout'
import { ToolCard } from '@/components/ToolCard'
import { ErrorMessage } from '@/components/ErrorMessage'

export default function TextComparePage() {
    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const [result, setResult] = useState('')
    const [error, setError] = useState('')
    const [conversionCount, setConversionCount] = useState(0)

    useEffect(() => {
        fetch('/api/counter')
            .then(res => res.json())
            .then(data => setConversionCount(data.count))
    }, [])

    const compareTexts = async () => {
        if (!text1.trim() || !text2.trim()) {
            setError('Please enter text in both fields.')
            setResult('')
            return
        }

        setError('')
        if (text1 === text2) {
            setResult('The texts are identical.')
        } else {
            const words1 = text1.split(/\s+/)
            const words2 = text2.split(/\s+/)
            const diffWords = words1.filter((word, index) => word !== words2[index])
            setResult(`The texts are different. Different words: ${diffWords.join(', ')}`)
        }

        const response = await fetch('/api/counter', { method: 'POST' })
        const data = await response.json()
        setConversionCount(data.count)
    }

    return (
        <ToolLayout
            title="Text Compare Tool"
            description="Compare two texts and find the differences instantly"
            icon={FileText}
        >
            <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <ToolCard title="First Text" icon={FileText}>
                    <Textarea
                        placeholder="Enter first text here..."
                        value={text1}
                        onChange={(e) => setText1(e.target.value)}
                        className="min-h-[200px] sm:min-h-[300px] mb-4 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:border-indigo-500"
                    />
                </ToolCard>

                <ToolCard title="Second Text" icon={FileText}>
                    <Textarea
                        placeholder="Enter second text here..."
                        value={text2}
                        onChange={(e) => setText2(e.target.value)}
                        className="min-h-[200px] sm:min-h-[300px] mb-4 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:border-indigo-500"
                    />
                </ToolCard>
            </div>

            <div className="col-span-1 md:col-span-2 mt-8">
                <Button onClick={compareTexts} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Compare Texts
                </Button>
            </div>

            {error && <ErrorMessage message={error} />}

            {result && (
                <div className="col-span-1 md:col-span-2 mt-8">
                    <ToolCard title="Result" icon={FileText}>
                        <p className="text-gray-600 dark:text-gray-300">{result}</p>
                    </ToolCard>
                </div>
            )}

            <div className="col-span-1 md:col-span-2 absolute bottom-4 right-4 rounded-full px-3 py-1 text-sm font-semibold shadow bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                Total Comparisons: {conversionCount}
            </div>
        </ToolLayout>
    )
}