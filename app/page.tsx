import Image from 'next/image'
import Link from 'next/link'
import { Github, Code, Users, Wrench } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-gray-100  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          Welcome to Micro Tools Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          An open-source collection of powerful, easy-to-use web tools to enhance your productivity.
        </p>
      </header>

      <section className="mb-16">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Micro Tools Hub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Wrench className="h-8 w-8 text-indigo-500" />}
              title="Diverse Tools"
              description="Access a growing collection of useful micro tools for various tasks."
            />
            <FeatureCard
              icon={<Code className="h-8 w-8 text-indigo-500" />}
              title="Open Source"
              description="Contribute to the project and help improve tools for everyone."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-indigo-500" />}
              title="Community Driven"
              description="Join a community of developers and users sharing helpful tools."
            />
          </div>
        </div>
      </section>

      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Open Source Project</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Micro Tools Hub is an open-source project. We welcome contributions from developers of all skill levels. Help us grow our collection of useful tools!
        </p>
        <Link
          href="https://github.com/ritsrnjn/microtoolshub"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out"
        >
          <Github className="mr-2 h-5 w-5" />
          Contribute on GitHub
        </Link>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to explore?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Check out our collection of micro tools and simplify your workflow today!
        </p>
        <Link
          href="/svg-to-png"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out"
        >
          Explore Tools
          <Wrench className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  )
}


interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2 text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}