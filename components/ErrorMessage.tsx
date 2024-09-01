import React from 'react'
import { AlertCircle } from 'lucide-react'

interface ErrorMessageProps {
    message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <div className="flex items-center text-red-500 mt-2">
            <AlertCircle className="mr-2" size={16} />
            <span>{message}</span>
        </div>
    )
}