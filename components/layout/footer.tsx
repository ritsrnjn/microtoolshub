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


import Link from 'next/link'
import { Github } from 'lucide-react'

interface ToolInfo {
    name: string;
    creator: string;
    creatorProfile: string;
}

interface FooterProps {
    toolInfo: ToolInfo;
}

export default function Footer({ toolInfo }: FooterProps) {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-10">
            <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto">
                <p className="text-sm text-gray-600 mb-2 sm:mb-0">
                    {toolInfo.name} was created by{' '}
                    <Link
                        href={toolInfo.creatorProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                    >
                        {toolInfo.creator}
                    </Link>
                </p>
                <Link
                    href="https://github.com/ritsrnjn/microtoolshub/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                    <Github className="mr-2 h-4 w-4" />
                    Found an issue? Report here
                </Link>
            </div>
        </footer>
    )
}