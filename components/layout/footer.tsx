// import Link from 'next/link'
// import { Github } from 'lucide-react'

// interface ToolInfo {
//     name: string;
//     creator: string;
// }

// interface FooterProps {
//     toolInfo: ToolInfo;
// }

// export default function Footer({ toolInfo }: FooterProps) {
//     return (
//         <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-10">
//             <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto">
//                 <p className="text-sm text-gray-600 mb-2 sm:mb-0">
//                     {toolInfo.name} was created by {toolInfo.creator}
//                 </p>
//                 <Link
//                     href="https://github.com/ritsrnjn/svg-to-image/issues"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center px-3 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-700 transition-colors duration-200"
//                 >
//                     <Github className="mr-2 h-4 w-4" />
//                     Found an issue? Report here
//                 </Link>
//             </div>
//         </footer>
//     )
// }


// import Link from 'next/link'
// import { Github } from 'lucide-react'

// interface ToolInfo {
//     name: string;
//     creator: string;
//     creatorProfile: string;
// }

// interface FooterProps {
//     toolInfo: ToolInfo;
// }

// export default function Footer({ toolInfo }: FooterProps) {
//     return (
//         <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-10">
//             <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto">
//                 <p className="text-sm text-gray-600 mb-2 sm:mb-0">
//                     {toolInfo.name} was created by{' '}
//                     <Link
//                         href={toolInfo.creatorProfile}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
//                     >
//                         {toolInfo.creator}
//                     </Link>
//                 </p>
//                 <Link
//                     href="https://github.com/ritsrnjn/microtoolshub/issues"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center px-3 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-700 transition-colors duration-200"
//                 >
//                     <Github className="mr-2 h-4 w-4" />
//                     Found an issue? Report here
//                 </Link>
//             </div>
//         </footer>
//     )
// }

"use client"

import Link from 'next/link'
import { Github, Sun, Moon } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { useDarkMode } from '@/hooks/useDarkMode'

interface ToolInfo {
    name: string;
    creator: string;
    creatorProfile: string;
}

interface FooterProps {
    toolInfo: ToolInfo;
}

export default function Footer({ toolInfo }: FooterProps) {
    const { darkMode, changeDarkModeAndReload } = useDarkMode()

    const handleToggle = () => {
        changeDarkModeAndReload(!darkMode)
    }

    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-2 px-4 z-10 transition-colors duration-200">
            <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto">
                <p className="text-sm mb-2 sm:mb-0 dark:text-gray-300">
                    {toolInfo.name} was created by{' '}
                    <Link
                        href={toolInfo.creatorProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200"
                    >
                        {toolInfo.creator}
                    </Link>
                </p>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        <Switch
                            checked={darkMode}
                            onCheckedChange={handleToggle}
                            className={`${darkMode ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only">Toggle dark mode</span>
                            <span
                                className={`${darkMode ? 'translate-x-6' : 'translate-x-1'
                                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                        <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </div>
                    <Link
                        href="https://github.com/ritsrnjn/microtoolshub/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-sm rounded-md transition-colors duration-200"
                    >
                        <Github className="mr-2 h-4 w-4" />
                        Found an issue? Report here
                    </Link>
                </div>
            </div>
        </footer>
    )
}