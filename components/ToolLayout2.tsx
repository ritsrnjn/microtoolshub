import React from 'react'
import { LucideIcon } from 'lucide-react'

interface ToolLayout2Props {
    children: React.ReactNode
    title: string
    description: string
    icon: LucideIcon
}

export function ToolLayout2({ children, title, description, icon: Icon }: ToolLayout2Props) {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative pb-16">
                <header className="text-center py-12 sm:py-16 md:py-20">
                    <div className="inline-block p-2 rounded-lg shadow-lg mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700">
                        <Icon size={40} className="text-white" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{title}</h1>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">{description}</p>
                </header>
                {/* Note: Temporarily duplicating the class */}
                {/* // TODO: find a better way to handle the number of col */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    {children}
                </div>
            </div>
        </div>
    )
}

