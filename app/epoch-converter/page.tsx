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