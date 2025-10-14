import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Marketing Director',
    company: 'Techflow Inc.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
    content: 'Email Verifier has been a game-changer for our marketing campaigns. We reduced our bounce rate from 15% to less than 2% and significantly improved our deliverability.',
  },
  {
    name: 'Michael Chen',
    title: 'Founder',
    company: 'StartupXYZ',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
    content: 'The API integration was seamless, and the accuracy is outstanding. Their customer support team is incredibly responsive and helpful.',
  },

  {
    name: 'Emily Rodriguez',
    title: 'Email Marketing Manager',
    company: 'GrowthCorp',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
    content: 'We process thousands of emails daily, and Email Verifier handles it all with incredible speed and precision. Highly recommended!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            Trusted by Thousands of Businesses
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            See what our customers have to say about their experience with Email Verifier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg shadow-blue-900/10 pt-6">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex-shrink-0 mb-6">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-blue-100 scale-x-[-1]" />
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
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