"use client"

import { useState, useRef, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { FileImage, Code, ArrowRight } from 'lucide-react'

export function SvgToImageConverter() {
  const [svgInput, setSvgInput] = useState('')
  const [imageOutput, setImageOutput] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const convertSvgToPng = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = new Image()
    const svgBlob = new Blob([svgInput], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)

    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      const pngUrl = canvas.toDataURL('image/png')
      setImageOutput(pngUrl)
      URL.revokeObjectURL(url)
    }

    img.src = url
  }, [svgInput])

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-teal-400 to-cyan-500 p-2 rounded-lg shadow-lg mb-4">
            <FileImage size={40} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">SVG to Image Converter</h1>
          <p className="text-gray-600">Transform your SVG code into beautiful PNG images</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white rounded-xl shadow-xl overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
                <Code className="mr-2 text-teal-500" /> Input SVG
              </h2>
              <Textarea
                placeholder="Paste your SVG code here..."
                value={svgInput}
                onChange={(e) => setSvgInput(e.target.value)}
                className="min-h-[300px] mb-4 border-2 border-teal-100 focus:border-teal-300 rounded-lg"
              />
              <Button onClick={convertSvgToPng} className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Convert to PNG <ArrowRight className="ml-2" size={18} />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-xl shadow-xl overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
                <FileImage className="mr-2 text-cyan-500" /> Output Image
              </h2>
              <div className="border-2 border-dashed border-cyan-200 rounded-lg p-4 min-h-[300px] flex items-center justify-center bg-gradient-to-br from-cyan-50 to-teal-50">
                {imageOutput ? (
                  <img src={imageOutput} alt="Converted PNG" className="max-w-full max-h-[300px] rounded shadow-lg" />
                ) : (
                  <p className="text-gray-400 text-center">
                    <FileImage size={48} className="mx-auto mb-2 text-cyan-300" />
                    Converted image will appear here
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  )
}