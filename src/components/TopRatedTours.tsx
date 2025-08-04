import React from 'react';
import { useTranslation } from 'react-i18next';
export const TopRatedTours: React.FC = () => {
  const {
    t
  } = useTranslation();
  const tours = [{
    id: 1,
    name: t('Serendib Discovery'),
    days: 5,
    image: "/HortonPlace.jpg"
  }, {
    id: 2,
    name: t('Tropical Escape'),
    days: 4,
    image: "/safari2.jpg"
  }, {
    id: 3,
    name: t('Mystic Island Trails'),
    days: 6,
    image: "/Matarabeach.jpg"
  }, {
    id: 4,
    name: t('cultural_heritage'),
    days: 7,
    image: '/nullur.png'
  }];
  const handleTourClick = (tourId: number) => {
    // Navigate to inquiry page
    window.location.hash = 'inquiry';
    window.scrollTo(0, 0);
  };
  return <section className="py-16 w-full relative" style={{
    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://uploadthingy.s3.us-west-1.amazonaws.com/qt66dZWWjpnexbqnQfLKBK/sunsetBg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('top_rated_tours')}
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {tours.map(tour => <div key={tour.id} className="relative group cursor-pointer animate-slideUp mb-8" onClick={() => handleTourClick(tour.id)}>
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-green-400">
                <img src={tour.image} alt={tour.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 group-hover:bg-green-400 shadow-lg shadow-green-500/30">
                <span className="font-bold">{tour.name}</span>
                <span className="mx-1">•</span>
                <span>
                  {tour.days} {t('days')}
                </span>
              </div>
              {/* 3D Ripple Effect */}
              <div className="absolute inset-0 rounded-full pointer-events-none">
                <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:animate-ripple"></div>
                <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:animate-ripple" style={{
              animationDelay: '0.5s'
            }}></div>
                <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:animate-ripple" style={{
              animationDelay: '1s'
            }}></div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-16 animate-fadeIn">
          <a href="#tours" onClick={e => {
          e.preventDefault();
          window.location.hash = 'tours';
          window.scrollTo(0, 0);
        }} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block w-[200px] shadow-lg shadow-green-500/30">
            {t('view_all_tours')}
          </a>
        </div>
      </div>
      {/* 3D Travel-Themed Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Compass */}
        <div className="absolute bottom-1/4 left-[10%] animate-spin-slow">
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 rounded-full border-2 border-white opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-1 bg-red-500 opacity-70 rounded-full origin-center"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 w-8 h-1 bg-white opacity-70 rounded-full origin-center"></div>
          </div>
        </div>
        {/* Floating Camera */}
        <div className="absolute top-1/4 right-[15%] animate-float" style={{
        animationDuration: '4s'
      }}>
          <div className="w-10 h-8 bg-white opacity-40 rounded-md relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-gray-500 opacity-80"></div>
            <div className="absolute -top-1 right-1 w-6 h-2 bg-white opacity-40 rounded-md"></div>
          </div>
        </div>
        {/* Floating Suitcase */}
        <div className="absolute top-3/4 right-[25%] animate-float" style={{
        animationDuration: '5s'
      }}>
          <div className="w-10 h-8 bg-white opacity-40 rounded-sm relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-white opacity-40 rounded-sm"></div>
          </div>
        </div>
        {/* Travel Path Animation */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M20,80 Q40,40 60,70 T90,50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="1,2" className="animate-draw-path" />
            <circle cx="20" cy="80" r="1" fill="white" className="opacity-60 animate-pulse" />
            <circle cx="90" cy="50" r="1" fill="white" className="opacity-60 animate-pulse" style={{
            animationDelay: '1s'
          }} />
          </svg>
        </div>
      </div>
    </section>;
};