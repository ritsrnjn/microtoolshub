

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
    const [comparisonResult, setComparisonResult] = useState<JSX.Element | null>(null)
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
            setComparisonResult(null)
            return
        }

        setError('')

        const lines1 = text1.split('\n')
        const lines2 = text2.split('\n')
        const maxLines = Math.max(lines1.length, lines2.length)

        const result = (
            <div className="space-y-2">
                {Array.from({ length: maxLines }).map((_, index) => (
                    <div key={index} className="flex">
                        <div className="w-6 flex-shrink-0 text-gray-500">{index + 1}</div>
                        <div className="flex-1 flex">
                            <div className={`flex-1 ${lines1[index] !== lines2[index] ? 'bg-red-100 dark:bg-red-900' : ''}`}>
                                {lines1[index] || <span className="text-gray-400">{'(empty)'}</span>}
                            </div>
                            <div className="w-4"></div>
                            <div className={`flex-1 ${lines1[index] !== lines2[index] ? 'bg-red-100 dark:bg-red-900' : ''}`}>
                                {lines2[index] || <span className="text-gray-400">{'(empty)'}</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )

        setComparisonResult(result)

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

            {comparisonResult && (
                <div className="col-span-1 md:col-span-2 mt-8">
                    <ToolCard title="Comparison Result" icon={FileText}>
                        <div className="overflow-x-auto">
                            {comparisonResult}
                        </div>
                    </ToolCard>
                </div>
            )}

            <div className="col-span-1 md:col-span-2 absolute bottom-4 right-4 rounded-full px-3 py-1 text-sm font-semibold shadow bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                Total Comparisons: {conversionCount}
            </div>
        </ToolLayout>
    )
}