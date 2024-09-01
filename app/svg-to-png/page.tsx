"use client"

import { useState, useRef, useEffect } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { FileImage, Code, Download, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

// Note: This is using differnt approach for setting the dark

export default function SvgToImageConverter() {
    const [svgInput, setSvgInput] = useState('')
    const [imageOutput, setImageOutput] = useState('')
    const [error, setError] = useState('')
    const [conversionCount, setConversionCount] = useState<number | null>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        fetch('/api/counter')
            .then(res => res.json())
            .then(data => setConversionCount(data.count))
            .catch(err => console.error('Error fetching conversion count:', err))
    }, [])

    useEffect(() => {
        const convertSvgToPng = async () => {
            if (!svgInput.trim()) {
                setImageOutput('')
                setError('')
                return
            }

            const canvas = canvasRef.current
            if (!canvas) return

            const ctx = canvas.getContext('2d')
            if (!ctx) return

            const img = new Image()
            const svgBlob = new Blob([svgInput], { type: 'image/svg+xml;charset=utf-8' })
            const url = URL.createObjectURL(svgBlob)

            img.onload = async () => {
                canvas.width = img.width || 300
                canvas.height = img.height || 150
                ctx.drawImage(img, 0, 0)
                const pngUrl = canvas.toDataURL('image/png')
                setImageOutput(pngUrl)
                setError('')
                URL.revokeObjectURL(url)

                fetch('/api/counter', { method: 'POST' })
                    .then(res => res.json())
                    .then(data => setConversionCount(data.count))
                    .catch(error => console.error('Error fetching conversion count:', error))
            }

            img.onerror = () => {
                setError('Invalid SVG code. Please check your input.')
                setImageOutput('')
            }

            img.src = url
        }

        const debounce = setTimeout(() => {
            convertSvgToPng()
        }, 500)

        return () => clearTimeout(debounce)
    }, [svgInput])

    const handleDownload = () => {
        if (imageOutput) {
            const link = document.createElement('a')
            link.href = imageOutput
            link.download = 'converted-image.png'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative pb-16">
                <header className="text-center py-12 sm:py-16 md:py-20">
                    <div className="inline-block p-2 rounded-lg shadow-lg mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700">
                        <FileImage size={40} className="text-white" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">SVG to Image Converter</h1>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Transform your SVG code into beautiful PNG images instantly</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="rounded-xl shadow-xl overflow-hidden bg-white dark:bg-gray-800">
                        <CardContent className="p-4 sm:p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700 dark:text-gray-200">
                                <Code className="mr-2 text-indigo-500" /> Input SVG
                            </h2>
                            <Textarea
                                placeholder="Paste your SVG code here..."
                                value={svgInput}
                                onChange={(e) => setSvgInput(e.target.value)}
                                className="min-h-[200px] sm:min-h-[300px] mb-4 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-indigo-400"
                            />
                            {error && (
                                <div className="flex items-center text-red-500 mt-2">
                                    <AlertCircle className="mr-2" size={16} />
                                    <span>{error}</span>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="rounded-xl shadow-xl overflow-hidden bg-white dark:bg-gray-800">
                        <CardContent className="p-4 sm:p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700 dark:text-gray-200">
                                <FileImage className="mr-2 text-indigo-500" /> Output Image
                            </h2>
                            <div className="border-2 border-dashed rounded-lg p-4 min-h-[200px] sm:min-h-[300px] flex items-center justify-center bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                                {imageOutput ? (
                                    <img src={imageOutput} alt="Converted PNG" className="max-w-full max-h-[200px] sm:max-h-[300px] rounded shadow-lg" />
                                ) : (
                                    <p className="text-center text-gray-500 dark:text-gray-400">
                                        <FileImage size={48} className="mx-auto mb-2 text-indigo-400" />
                                        Converted image will appear here
                                    </p>
                                )}
                            </div>
                            {imageOutput && (
                                <Button onClick={handleDownload} className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                                    <Download className="mr-2" size={18} />
                                    Download PNG
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                </div>
                <canvas ref={canvasRef} style={{ display: 'none' }} />
                <div className="absolute bottom-4 right-4 rounded-full px-3 py-1 text-sm font-semibold shadow bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                    Total Conversions: {conversionCount !== null ? conversionCount : '  Loading...'}
                </div>
            </div>
        </div>
    )
}