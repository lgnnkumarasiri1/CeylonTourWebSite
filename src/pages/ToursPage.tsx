import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StarIcon, ArrowRightIcon } from 'lucide-react';
export const ToursPage: React.FC = () => {
  const {
    t
  } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const tours = [{
    id: 1,
    name: t('wildlife_safari'),
    duration: '5 ' + t('days'),
    category: 'wildlife',
    rating: 4.9,
    reviews: 42,
    description: 'Experience the incredible wildlife of Sri Lanka on this 5-day safari adventure. Visit Yala National Park, home to leopards, elephants, and hundreds of bird species.',
    image: "/HortonPlace.jpg",
    highlights: ['Jeep safari in Yala National Park', 'Bird watching in Bundala National Park', 'Visit to elephant orphanage', 'Camping under the stars', 'Expert wildlife guides']
  }, {
    id: 2,
    name: t('hill_country'),
    duration: '4 ' + t('days'),
    category: 'nature',
    rating: 4.8,
    reviews: 36,
    description: "Discover the breathtaking beauty of Sri Lanka's hill country with its tea plantations, waterfalls, and cool climate. Perfect for nature lovers and photographers.",
    image: 'https://images.unsplash.com/photo-1591017777639-86167d6f6ac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    highlights: ['Train ride through tea plantations', 'Visit to Nuwara Eliya - "Little England"', 'Hiking in Horton Plains National Park', 'Tea factory tour and tasting', 'Scenic viewpoints and photography spots']
  }, {
    id: 3,
    name: t('beach_adventure'),
    duration: '6 ' + t('days'),
    category: 'beach',
    rating: 4.7,
    reviews: 29,
    description: "Relax and adventure along Sri Lanka's stunning coastline with this 6-day beach package. Enjoy water sports, beach relaxation, and coastal wildlife.",
    image: "/Matarabeach.jpg",
    highlights: ['Surfing lessons at Arugam Bay', 'Snorkeling at Pigeon Island', 'Turtle watching at Rekawa Beach', 'Fresh seafood dining experiences', 'Coastal bird watching tours']
  }, {
    id: 4,
    name: t('cultural_heritage'),
    duration: '7 ' + t('days'),
    category: 'historical',
    rating: 4.9,
    reviews: 51,
    description: "Immerse yourself in Sri Lanka's rich cultural heritage with visits to ancient cities, temples, and historical sites. Learn about the island's 2,500-year history.",
    image: 'https://images.unsplash.com/photo-1562059635-b6bea0c4a56f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    highlights: ['Explore the ancient city of Anuradhapura', 'Visit the rock fortress of Sigiriya', 'Tour the Temple of the Sacred Tooth Relic', 'Traditional dance performances', 'Authentic Sri Lankan cooking class']
  }, {
    id: 5,
    name: 'Bird Watching Expedition',
    duration: '4 ' + t('days'),
    category: 'wildlife',
    rating: 4.8,
    reviews: 23,
    description: 'A specialized tour for bird enthusiasts to spot and photograph some of the 400+ bird species found in Sri Lanka, including many endemic species.',
    image: 'https://images.unsplash.com/photo-1591423386563-e63c9a1db413?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    highlights: ['Bird watching in Sinharaja Rainforest', 'Visit to Kumana Bird Sanctuary', 'Photography workshops', 'Small groups with expert ornithologists', 'Comfortable accommodations near prime bird watching locations']
  }, {
    id: 6,
    name: 'Ayurveda & Wellness Retreat',
    duration: '8 ' + t('days'),
    category: 'wellness',
    rating: 4.9,
    reviews: 18,
    description: 'Rejuvenate your mind, body, and spirit with traditional Ayurvedic treatments, yoga, and meditation in serene settings across Sri Lanka.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    highlights: ['Personalized Ayurvedic consultations', 'Daily yoga and meditation sessions', 'Herbal steam baths and treatments', 'Healthy, organic cuisine', 'Stay at authentic Ayurveda resorts']
  }, {
    id: 7,
    name: 'Adventure Seeker Package',
    duration: '6 ' + t('days'),
    category: 'adventure',
    rating: 4.7,
    reviews: 24,
    description: "For thrill-seekers looking to experience Sri Lanka's diverse landscapes through exciting activities and challenges.",
    image: "/rafting.jpg",
    highlights: ['White water rafting in Kitulgala', 'Rock climbing at Knuckles Mountain Range', 'Mountain biking through tea plantations', 'Waterfall abseiling adventures', 'Camping in wilderness locations']
  }, {
    id: 8,
    name: 'Family Discovery Tour',
    duration: '9 ' + t('days'),
    category: 'family',
    rating: 4.8,
    reviews: 31,
    description: 'A perfectly balanced tour for families with children, combining education, adventure, wildlife, and relaxation in child-friendly environments.',
    image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    highlights: ['Elephant sanctuary visit', 'Interactive cultural activities', 'Gentle hikes suitable for children', 'Beach time with water sports', 'Educational wildlife experiences']
  }];
  const filteredTours = activeCategory === 'all' ? tours : tours.filter(tour => tour.category === activeCategory);
  // Testimonials data
  const testimonials = [{
    id: 1,
    name: 'Sarah Johnson',
    country: 'United States',
    text: 'The wildlife safari exceeded all our expectations. Our guide was incredibly knowledgeable and we saw leopards, elephants, and many birds. This was a truly unforgettable experience.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    rating: 5
  }, {
    id: 2,
    name: 'David Chen',
    country: 'Canada',
    text: 'The tea plantations were breathtaking and the train journey was like something from a movie. Ceylon Tour Bird arranged everything perfectly and our guide made the experience special.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    rating: 5
  }, {
    id: 3,
    name: 'Emma Wilson',
    country: 'Australia',
    text: "This tour was the perfect introduction to Sri Lanka's rich history. The ancient cities were fascinating and our guide brought the stories to life. Highly recommend!",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    rating: 5
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1586624235027-49e8a69ff3d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInDown">
              {t('our_srilanka_tours')}
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto animate-fadeInUp">
              {t('crafted_experiences')}
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>
        </div>
      </div>

      {/* Tours Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {['all', 'wildlife', 'nature', 'beach', 'historical', 'wellness', 'adventure', 'family'].map(category => <button key={category} className={`px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === category ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => setActiveCategory(category)}>
                {category === 'all' ? t('all') : category === 'wildlife' ? t('wildlife') : category === 'nature' ? t('nature') : category === 'beach' ? t('beach') : category === 'historical' ? t('historical') : category === 'wellness' ? t('wellness') : category === 'adventure' ? t('adventure') : t('family')}
              </button>)}
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour, index) => <div key={tour.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 card-3d animate-fadeIn" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="relative h-60 overflow-hidden">
                  <img src={tour.image} alt={tour.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    {tour.duration}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="font-bold text-xl text-white">
                      {tour.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-4 w-4 ${i < Math.floor(tour.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />)}
                      </div>
                      <span className="text-white text-sm ml-2">
                        {tour.rating} ({tour.reviews})
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {tour.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('highlights')}:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {tour.highlights.slice(0, 3).map((highlight, idx) => <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>{highlight}</span>
                        </li>)}
                    </ul>
                  </div>
                  <a href="https://wa.me/94743438182" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-all duration-300 w-full">
                    {t('book_now')}
                  </a>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        {t('what_travelers_say')}
      </h2>
      <div className="w-20 sm:w-24 h-1 bg-green-600 mx-auto"></div>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map(testimonial => (
        <div
          key={testimonial.id}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          {/* User Info */}
          <div className="flex items-center mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm">{testimonial.country}</p>
            </div>
          </div>

          {/* Star Ratings */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
                  i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-600 italic leading-relaxed">
            "{testimonial.text}"
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('ready_for_adventure')}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('contact_custom_itinerary')}
          </p>
          <a href="https://wa.me/94743438182" target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium uppercase tracking-wider transition-all duration-300 transform hover:scale-105 inline-block w-[200px]">
            {t('contact_us')}
          </a>
        </div>
      </section>
    </div>;
};