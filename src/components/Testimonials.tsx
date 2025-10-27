import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Marketing Director',
    company: 'SaaS Yogi',
    image: '/assets/sarah.webp',
    rating: 5,
    content: 'EmailVerifier.io helped us cut our bounce rate from 15% to under 2%. Total game changer.',
  },
  {
    name: 'Michael Chen',
    title: 'Founder',
    company: 'Paperbot AI',
    image: '/assets/michael.webp',
    rating: 5,
    content: 'The API was super easy to set up, and the accuracy blew us away.',
  },

  {
    name: 'Emily Rodriguez',
    title: 'Email Marketing Manager',
    company: 'Redserp',
    image: '/assets/emily.webp',
    rating: 5,
    content: 'We clean thousands of emails daily. It\'s fast, reliable, and just works.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            Trusted by Thousands of Businesses
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            See what our customers have to say about their experience with Email Verifier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,100,255,0.2)]">
              <CardContent className="p-5 pt-5 flex flex-col h-full">
                <div className="flex-shrink-0 mb-4">
                  <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 text-blue-100 scale-x-[-1]" />
                  </div>
                </div>
                
                <p className="text-gray-900 font-[500] leading-relaxed mb-3 flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div className='leading-tight'>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                      <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}