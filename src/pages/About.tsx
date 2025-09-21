import React from 'react';
import { Users, Target, Award, Globe, CheckCircle, Mail } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10M+', label: 'Emails Verified Daily' },
    { number: '50K+', label: 'Active Customers' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '150+', label: 'Countries Supported' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former VP of Engineering at major email service provider with 15+ years in email infrastructure.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      bio: 'Expert in distributed systems and email protocols. Previously led engineering teams at top tech companies.',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emma Wilson',
      role: 'Head of Product',
      bio: 'Product strategist with deep expertise in email marketing and customer success.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Rodriguez',
      role: 'Lead Engineer',
      bio: 'Full-stack developer specializing in high-performance APIs and real-time verification systems.',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Accuracy First',
      description: 'We prioritize precision in every verification, ensuring the highest quality results for our customers.'
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Our customers\' success drives everything we do. We provide exceptional support and continuously improve our service.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We constantly push the boundaries of email verification technology to stay ahead of industry challenges.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our infrastructure spans the globe, providing fast and reliable service to customers worldwide.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-8">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">About Email Verifier</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Building the Future of
              <span className="text-blue-600"> Email Verification</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to help businesses maintain clean email lists, 
              improve deliverability, and build stronger customer relationships through 
              accurate email verification.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Email Verifier was founded in 2020 when our team experienced firsthand 
                  the challenges of maintaining clean email lists at scale. Traditional 
                  verification services were either too slow, inaccurate, or expensive.
                </p>
                <p>
                  We set out to build a better solution - one that combines cutting-edge 
                  technology with deep expertise in email protocols and deliverability. 
                  Our goal was simple: provide the most accurate, fast, and reliable 
                  email verification service in the market.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 customers worldwide, from 
                  startups to Fortune 500 companies, helping them improve their email 
                  deliverability and protect their sender reputation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team working together"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              The experts behind our email verification technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            To empower businesses with the most accurate and reliable email verification 
            technology, helping them build stronger customer relationships and achieve 
            better email marketing results.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Reliability</h3>
              <p className="text-gray-300 text-sm">99.9% uptime with enterprise-grade infrastructure</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Accuracy</h3>
              <p className="text-gray-300 text-sm">Industry-leading precision in email verification</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <p className="text-gray-300 text-sm">Dedicated customer success team</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;