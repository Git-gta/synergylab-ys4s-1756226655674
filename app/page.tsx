import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ArrowRight, Star, Users, Zap } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-rLrcvDcvisW6Io0FOgsRuTl6/user-HUvCoz1lRT8paqE04sR0GEIe/img-s9zxq1fYVaAMENhb3f1XYsaH.png?st=2025-08-26T15%3A43%3A53Z&se=2025-08-26T17%3A43%3A53Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=6e4237ed-4a31-4e1d-a677-4df21834ece0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-26T03%3A26%3A17Z&ske=2025-08-27T03%3A26%3A17Z&sks=b&skv=2024-08-04&sig=zCPSW6BA0M3r8L6FIpB/F7GdKi4uYn1ZSNd4SvYQnMI%3D" alt="SynergyLab_ys4s" width={40} height={40} className="rounded-lg" />
            <h1 className="text-2xl font-bold text-gray-900">SynergyLab_ys4s</h1>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            SynergyLab_ys4s is an innovative SaaS B2C application that aims to revolutionize workflow automation. It leverages intelligent automation and real-time analytics to help businesses streamline their operations and increase productivity. The application provides a user-friendly interface, seamless integration with existing systems, and advanced data visualization tools to give users a comprehensive overview of their workflows.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The ultimate workflow automation solution for modern businesses, designed for small to medium-sized businesses, startups, enterprises.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">10k+</div>
              <div className="text-gray-600">Active Users</div>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-gray-600">User Rating</div>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Intelligent Automation</h3>
            <p className="text-gray-600">
              Powerful intelligent automation functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
            <p className="text-gray-600">
              Powerful real-time analytics functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customizable Workflows</h3>
            <p className="text-gray-600">
              Powerful customizable workflows functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Seamless Integration</h3>
            <p className="text-gray-600">
              Powerful seamless integration functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Intuitive Dashboard</h3>
            <p className="text-gray-600">
              Powerful intuitive dashboard functionality designed for modern businesses.
            </p>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2024 SynergyLab_ys4s. Generated by Go To Factory.</p>
        </div>
      </footer>
    </div>
  )
}