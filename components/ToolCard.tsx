import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from 'lucide-react'

interface ToolCardProps {
    children: React.ReactNode
    title: string
    icon: LucideIcon
}

export function ToolCard({ children, title, icon: Icon }: ToolCardProps) {
    return (
        <Card className="rounded-xl shadow-xl overflow-hidden bg-white dark:bg-gray-800">
            <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700 dark:text-gray-200">
                    <Icon className="mr-2 text-indigo-500" /> {title}
                </h2>
                {children}
            </CardContent>
        </Card>
    )
}