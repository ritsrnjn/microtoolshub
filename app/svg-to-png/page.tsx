"use client"

import { useState, useRef, useEffect } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { FileImage, Code, Download, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ToolLayout } from '@/components/ToolLayout'
import { ToolCard } from '@/components/ToolCard'
import { ErrorMessage } from '@/components/ErrorMessage'

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
        <ToolLayout
            title="SVG to Image Converter"
            description="Transform your SVG code into beautiful PNG images instantly"
            icon={FileImage}
        >
            <ToolCard title="Input SVG" icon={Code}>
                <Textarea
                    placeholder="Paste your SVG code here..."
                    value={svgInput}
                    onChange={(e) => setSvgInput(e.target.value)}
                    className="min-h-[200px] sm:min-h-[300px] mb-4 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-indigo-400"
                />
                {error && <ErrorMessage message={error} />}
            </ToolCard>

            <ToolCard title="Output Image" icon={FileImage}>
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
            </ToolCard>

            <canvas ref={canvasRef} style={{ display: 'none' }} />
            <div className="absolute bottom-4 right-4 rounded-full px-3 py-1 text-sm font-semibold shadow bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                Total Conversions: {conversionCount !== null ? conversionCount : '  Loading...'}
            </div>
        </ToolLayout>
    )
}