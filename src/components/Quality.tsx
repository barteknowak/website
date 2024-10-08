import React from 'react'
import { CheckCircle } from 'lucide-react'

const QualityPoint = ({ text }) => (
  <div className="flex items-center mb-4">
    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
    <span className="text-gray-700">{text}</span>
  </div>
)

const Quality = () => {
  const qualityPoints = [
    "Rigorous testing and quality assurance",
    "Adherence to industry best practices",
    "Continuous improvement and innovation",
    "Dedicated support and maintenance",
    "Timely delivery of projects"
  ]

  return (
    <section id="quality" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Commitment to Quality</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Team working on quality software"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-gray-600 mb-6">
              At Appro.dev, we pride ourselves on delivering the highest quality software solutions. Our commitment to excellence is reflected in every project we undertake.
            </p>
            {qualityPoints.map((point, index) => (
              <QualityPoint key={index} text={point} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quality