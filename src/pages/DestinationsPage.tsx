import React, { useEffect, useState, lazy } from 'react';
import { ArrowRightIcon, XIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export const DestinationsPage: React.FC = () => {
  const {
    t
  } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const destinations = [{
    id: 1,
    name: t('sigiriya_rock'),
    location: t('dambulla'),
    category: 'historical',
    description: t('sigiriya_desc'),
    image: 'sigiriya.png',
    longDescription: 'Sigiriya, or Lion Rock, is an ancient rock fortress located in the northern Matale District. This UNESCO World Heritage site dates back to the 5th century AD and features remarkable frescoes, landscaped gardens, and the remains of a royal palace. Visitors can climb to the top for panoramic views of the surrounding jungle and countryside.',
    activities: ['Climbing the rock fortress', 'Visiting the museum', 'Exploring the water gardens', 'Viewing ancient frescoes'],
    bestTimeToVisit: 'January to March (dry season)'
  }, {
    id: 2,
    name: t('yala_national_park'),
    location: t('southeast_srilanka'),
    category: 'wildlife',
    description: t('yala_desc'),
    image: 'yala.png',
    longDescription: "Yala National Park is Sri Lanka's most visited wildlife sanctuary, famous for having one of the highest leopard densities in the world. The park covers 979 square kilometers and is home to elephants, sloth bears, crocodiles, and over 200 bird species. Safari tours offer an exciting opportunity to observe these animals in their natural habitat.",
    activities: ['Jeep safaris', 'Bird watching', 'Photography tours', 'Camping near the park'],
    bestTimeToVisit: 'February to July'
  }, {
    id: 3,
    name: t('nuwara_eliya'),
    location: t('central_highlands'),
    category: 'nature',
    description: t('nuwara_eliya_desc'),
    image: 'nuwaraeliya.png',
    longDescription: "Nuwara Eliya, known as 'Little England,' is a charming hill station with a cool climate and colonial architecture. The city is surrounded by tea plantations, creating a picturesque landscape. Visitors can enjoy the beautiful gardens, golf courses, and the serene Gregory Lake. The area is perfect for those seeking a peaceful retreat in the mountains.",
    activities: ['Tea plantation tours', 'Visiting Victoria Park', 'Boating on Gregory Lake', 'Hiking in the surrounding hills'],
    bestTimeToVisit: 'March to May'
  }, {
    id: 4,
    name: t('galle_fort'),
    location: t('galle'),
    category: 'historical',
    description: t('galle_fort_desc'),
    image: 'galle.png',
    longDescription: 'Galle Fort, built by the Portuguese in the 16th century and later fortified by the Dutch, is a UNESCO World Heritage site. This well-preserved colonial-era fortress features narrow streets lined with Dutch-colonial buildings, churches, mosques, and many boutique shops and cafes. Walking along the ramparts offers spectacular views of the Indian Ocean.',
    activities: ['Walking tour of the fort', 'Visiting the Maritime Museum', 'Shopping for local crafts', 'Watching the sunset from the ramparts'],
    bestTimeToVisit: 'December to April'
  }, {
    id: 5,
    name: t('mirissa_beach'),
    location: t('southern_coast'),
    category: 'beach',
    description: t('mirissa_beach_desc'),
    image: 'mirissa.png',
    longDescription: "Mirissa Beach is a stunning crescent-shaped beach known for its golden sands and clear blue waters. It's one of the best places in Sri Lanka for whale watching, with blue whales and dolphins frequently spotted offshore between November and April. The beach offers a relaxed atmosphere with plenty of seafood restaurants and beach bars.",
    activities: ['Whale watching tours', 'Surfing', 'Snorkeling', 'Beach relaxation'],
    bestTimeToVisit: 'November to April'
  }, {
    id: 6,
    name: t('horton_plains'),
    location: t('nuwara_eliya'),
    category: 'nature',
    description: t('horton_plains_desc'),
    image: 'horton.png',
    longDescription: "Horton Plains National Park is a protected area in the central highlands, featuring cloud forests, grasslands, and unique wildlife. The park's most famous attraction is World's End, a stunning escarpment with a 880-meter drop. Baker's Falls, a beautiful waterfall within the park, is another highlight. The area is home to sambar deer, leopards, and many endemic bird species.",
    activities: ["Hiking to World's End", "Visiting Baker's Falls", 'Bird watching', 'Wildlife photography'],
    bestTimeToVisit: 'January to March'
  }, {
    id: 7,
    name: t('anuradhapura'),
    location: t('north_central_province'),
    category: 'historical',
    description: t('anuradhapura_desc'),
    image: 'anuradhapura.png',
    longDescription: "Anuradhapura, Sri Lanka's ancient capital, is a sacred city and UNESCO World Heritage site. Founded in the 4th century BC, it contains numerous dagobas (stupas), ancient pools, and the sacred Sri Maha Bodhi tree, believed to be grown from a cutting of the tree under which Buddha attained enlightenment. The city's ruins provide fascinating insights into ancient Sri Lankan civilization.",
    activities: ['Visiting the sacred Bodhi Tree', 'Exploring the ancient ruins', 'Cycling tour around the city', 'Visiting Isurumuniya Temple'],
    bestTimeToVisit: 'May to September'
  }, {
    id: 8,
    name: t('thalpe beach'),
    location: t('south coast'),
    category: 'beach',
    description: t('Thalpe Beach is a peaceful southern coast spot known for its coral rock pools and relaxed vibe.'),
    image: 'thalpe.png',
    longDescription: "Thalpe Beach, located along Sri Lanka's southern coast near Galle, is known for its unique natural rock pools carved into coral reefs. It's a serene and picturesque beach ideal for swimming, sunbathing, and relaxation. The area also offers boutique villas and cafes that make it perfect for a quiet coastal retreat.",
    activities: ['Swimming', 'Relaxing in natural rock pools', 'Beach walks', 'Photography', 'Dining at beachfront cafes'],
    bestTimeToVisit: 'December to April (dry season)'
  }, {
    id: 9,
    name: t('ella'),
    location: t('uva_province'),
    category: 'nature',
    description: t('ella_desc'),
    image: 'ella.png',
    longDescription: "Ella is a picturesque mountain village surrounded by tea plantations and lush forests. The area is known for its hiking trails, including the climb to Ella Rock and Little Adam's Peak, which offer panoramic views of the valley. The iconic Nine Arch Bridge, a colonial-era railway bridge, is another must-visit attraction. Ella offers a perfect blend of adventure and relaxation.",
    activities: ['Hiking to Ella Rock', 'Visiting Nine Arch Bridge', "Little Adam's Peak trek", 'Tea factory tours'],
    bestTimeToVisit: 'January to March'
  }, {
    id: 10,
    name: t('adams_peak'),
    location: t('sabaragamuwa_province'),
    category: 'spiritual',
    description: t('Adam’s Peak is a revered mountain pilgrimage offering breathtaking sunrise views and spiritual significance.'),
    image: 'adams.png',
    longDescription: "Adam’s Peak, also known as Sri Pada, is a sacred mountain revered by Buddhists, Hindus, Christians, and Muslims alike. Pilgrims climb its 5,200 steps to reach the summit where a footprint-shaped mark is believed to be of spiritual origin. The sunrise view from the top is breathtaking and deeply symbolic for devotees and trekkers.",
    activities: ['Pilgrimage climb', 'Sunrise hike', 'Photography', 'Spiritual reflection'],
    bestTimeToVisit: 'December to May (pilgrimage season)'
  }, {
    id: 11,
    name: t('bundala_national_park'),
    location: t('southern_province'),
    category: 'wildlife',
    description: t('bundala_desc'),
    image: 'bundala.png',
    longDescription: 'Bundala National Park is an internationally important wetland sanctuary for migratory birds. This UNESCO Biosphere Reserve spans 6,216 hectares and is home to flamingos, storks, pelicans, and over 200 other bird species. The park also shelters crocodiles, elephants, and various reptiles. Its diverse ecosystems include lagoons, sand dunes, and scrub jungle.',
    activities: ['Bird watching', 'Jeep safaris', 'Nature photography', 'Guided wildlife tours'],
    bestTimeToVisit: 'November to March'
  }, {
    id: 12,
    name: t('unawatuna'),
    location: t('southern_coast'),
    category: 'beach',
    description: t('unawatuna_desc'),
    image: 'unawatuna.png',
    longDescription: 'Unawatuna is a charming beach town near Galle, known for its horseshoe-shaped bay with calm, clear waters ideal for swimming and snorkeling. The beach is fringed with palm trees and offers a variety of restaurants and accommodations. Nearby attractions include the Japanese Peace Pagoda and Jungle Beach, a secluded cove accessible by a short hike through the jungle.',
    activities: ['Swimming and snorkeling', 'Diving at coral reefs', 'Visiting the Japanese Peace Pagoda', 'Exploring nearby Jungle Beach'],
    bestTimeToVisit: 'December to April'
  },
  {
    id: 13,
    name: t('ramboda falls'),
    location: t('central province'),
    category: 'waterfall',
    description: t('Ramboda Falls is a scenic waterfall near Nuwara Eliya, admired for its lush surroundings and misty mountain views.'),
    image: 'ramboda.png',
    longDescription: 'Ramboda Falls, nestled in the central highlands near Nuwara Eliya, is a picturesque 109-meter waterfall surrounded by lush greenery and tea estates. It offers a tranquil setting with stunning viewpoints and cool mountain air, making it a popular stop for nature lovers and photographers.',
    activities: ['Sightseeing', 'Nature photography', 'Tea estate visits', 'Relaxing by the waterfall'],
    bestTimeToVisit: 'April to June and August to December'
  },
  {
    id: 14,
    name: t('diyaluma falls'),
    location: t('uva province'),
    category: 'waterfall',
    description: t('Diyaluma Falls is a dramatic 220-meter waterfall with natural rock pools and stunning cliffside views.'),
    image: 'diyaluma.png',
    longDescription: 'Diyaluma Falls, Sri Lanka’s second-highest waterfall, cascades down 220 meters near the town of Koslanda. Its upper falls offer natural infinity pools with panoramic views, making it a favorite for adventurous hikers and wild swimmers.',
    activities: ['Hiking', 'Swimming in rock pools', 'Cliffside views', 'Adventure photography'],
    bestTimeToVisit: 'March to September'
  },
  {
    id: 15,
    name: t('ravana falls'),
    location: t('uva province'),
    category: 'waterfall',
    description: t('Ravana Falls is a legendary waterfall near Ella, known for its easy access and mythological roots.'),
    image: 'ravana.png',
    longDescription: 'Ravana Falls is a famous waterfall near Ella, flowing from a height of about 25 meters over rugged rocks. Steeped in legend, it’s linked to the epic Ramayana and offers a beautiful roadside stop with easy access for a quick scenic break.',
    activities: ['Scenic stop', 'Photography', 'Exploring nearby Ravana Cave'],
    bestTimeToVisit: 'May to September'
  },
  {
    id: 16,
    name: t('bambarakanda falls'),
    location: t('badulla district'),
    category: 'waterfall',
    description: t('Bambarakanda Falls is Sri Lanka’s tallest waterfall, tucked away in pine-covered hills'),
    image: 'bambarakanda.png',
    longDescription: 'Bambarakanda Falls is the tallest waterfall in Sri Lanka, plunging 263 meters through pine forests in the Badulla District. It’s a hidden gem for hikers and nature lovers seeking solitude and dramatic mountain scenery.',
    activities: ['Hiking', 'Photography', 'Trekking through pine forests'],
    bestTimeToVisit: 'March to May'
  }



  ];
  const filteredDestinations = activeCategory === 'all' ? destinations : destinations.filter(d => d.category === activeCategory);
  const toggleDestinationDetails = (id: number) => {
    setSelectedDestination(selectedDestination === id ? null : id);
  };
  return <div className="w-full">
    {/* Hero Section */}
    <div className="relative w-full h-[400px] overflow-hidden" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('hero1.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInDown">
            {t('explore_srilanka')}
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto animate-fadeInUp">
            {t('discover_island')}
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
      </div>
    </div>
    {/* Destinations Section */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {['all', 'historical', 'wildlife', 'nature', 'waterfall', 'beach'].map(category => <button key={category} className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${activeCategory === category ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => setActiveCategory(category)}>
            {category === 'all' ? t('all') : category === 'historical' ? t('historical') : category === 'waterfall' ? t('waterfall') : category === 'wildlife' ? t('wildlife') : category === 'nature' ? t('nature') : t('beach')}
          </button>)}
        </div>
        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 card-3d animate-fadeIn" style={{
            animationDelay: `${index * 0.1}s`
          }}>
            <div className="relative h-60 overflow-hidden">
              <img src={destination.image} alt={destination.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              <div className="absolute top-4 right-4 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                {activeCategory === 'all' ? destination.category === 'historical' ? t('historical')
                 : destination.category === 'wildlife' ? t('wildlife') : 
                 destination.category === 'nature' ? t('nature') :destination.category === 'waterfall' ? t('waterfall'): t('beach') : 
                 activeCategory === 'historical' ? t('historical') : 
                 activeCategory === 'wildlife' ? t('wildlife') : 
                 activeCategory === 'nature' ? t('nature') :activeCategory === 'waterfall' ? t('waterfall') : t('beach')}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{destination.name}</h3>
              <p className="text-gray-500 mb-3">{destination.location}</p>
              <p className="text-gray-600 mb-4">
                {destination.description}
              </p>
              <button onClick={() => toggleDestinationDetails(destination.id)} className="flex items-center text-green-600 hover:text-green-700 font-medium transition-all duration-300 hover:translate-x-1">
                {selectedDestination === destination.id ? 'Hide Details' : t('explore_destination')}
                <ArrowRightIcon className="h-4 w-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:transform-flip-x transition-transform duration-300" />
              </button>
              {/* Expanded Details Section */}
              {selectedDestination === destination.id && <div className="mt-4 bg-gray-50 p-4 rounded-lg animate-fadeIn">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-lg text-green-700">
                    Detailed Information
                  </h4>
                  <button onClick={() => setSelectedDestination(null)} className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-200">
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-gray-700 mb-4">
                  {destination.longDescription}
                </p>
                <div className="mb-3">
                  <h5 className="font-semibold text-gray-800 mb-2">
                    Top Activities:
                  </h5>
                  <ul className="list-disc list-inside text-gray-600 pl-2">
                    {destination.activities.map((activity, idx) => <li key={idx} className="mb-1 animate-fadeIn" style={{
                      animationDelay: `${idx * 0.1}s`
                    }}>
                      {activity}
                    </li>)}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-1">
                    Best Time to Visit:
                  </h5>
                  <p className="text-gray-600">
                    {destination.bestTimeToVisit}
                  </p>
                </div>
                <div className="mt-4">
                  <button onClick={() => toggleDestinationDetails(destination.id)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors duration-300 flex items-center justify-center w-full">
                    Hide Details
                    <XIcon className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>}
            </div>
          </div>)}
        </div>
      </div>
    </section>
    {/* Map Section */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fadeInDown">
            {t('srilanka_travel_map')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp">
            {t('explore_geographical')}
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg card-3d transform hover:scale-[1.01] transition-all duration-500">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047271.2999762953!2d78.46169484522676!3d7.851731513542368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1652886886058!5m2!1sen!2sus" width="100%" height="500" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sri Lanka Map" className="rounded-lg"></iframe>
          </div>
        </div>
      </div>
    </section>
    {/* CTA Section */}
    <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 animate-fadeInDown">
          {t('ready_to_explore')}
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto animate-fadeInUp">
          {t('contact_plan_adventure')}
        </p>
        <a href="https://wa.me/94743438182" target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium uppercase tracking-wider transition-all duration-300 transform hover:scale-105 inline-block w-[200px] animate-bounce">
          {t('contact_us')}
        </a>
      </div>
    </section>
  </div>;
};