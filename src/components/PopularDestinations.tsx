import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRightIcon } from 'lucide-react';

export const PopularDestinations: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  const destinations = [
    {
      id: 1,
      name: 'Red Mosque · Colombo',
      description: 'A masterpiece of faith and color in the heart of Colombo.',
      image: 'redmosque.png',
      style: 'col-span-1 aspect-[4/3]', // square-ish
    },
    {
      id: 2,
      name: 'Ramboda Waterfall',
      description: 'A stunning fall hidden in misty hills.',
      image: 'ravana.png',
      style: 'col-span-2 aspect-[8/3]', // rectangle but similar height
    },
    {
      id: 3,
      name: "Adam’s Peak",
      description: 'A sacred climb to a magical sunrise.',
      image: 'adams.png',
      style: 'col-span-2 aspect-[8/3]',
    },
    {
      id: 4,
      name: 'Nine Arches Bridge, Ella',
      description: 'Where time stands still and trains glide through clouds.',
      image: 'ella.png',
      style: 'col-span-1 aspect-[4/3]',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 w-full relative bg-[#f9fafb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 animate-fadeIn text-left">
          {t('popular_destinations') || 'Popular Destinations'}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className={`rounded-xl overflow-hidden shadow-xl bg-white transition-transform hover:scale-105 ${destination.style}`}
            >
              <div className="relative w-full h-full">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-green-600/90 backdrop-blur-sm px-4 py-3 flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-semibold text-md md:text-lg">
                      {destination.name}
                    </h3>
                    <p className="text-xs text-green-100 mt-1 line-clamp-2">
                      {destination.description}
                    </p>
                  </div>
                  <button className="bg-white hover:bg-gray-100 text-green-600 p-2 rounded-full transition-transform transform hover:scale-110 shadow-md">
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#destinations"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'destinations';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {t('view_all_destinations') || 'Explore More Destinations'}
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
