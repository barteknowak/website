import React from 'react'
import { Smartphone, Globe, Bot, Award } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const Services = () => {
  const services = [
    {
      icon: Award,
      title: "Loyalty Systems",
      description: "Engage and retain your customers with our cutting-edge loyalty programs."
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Create powerful, user-friendly mobile apps for iOS and Android platforms."
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Develop responsive and scalable web applications tailored to your needs."
    },
    {
      icon: Bot,
      title: "AI & Chatbots",
      description: "Implement intelligent AI assistants and chatbots to enhance customer experience."
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services