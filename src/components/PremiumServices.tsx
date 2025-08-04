import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { UserIcon, MapIcon, HotelIcon, CameraIcon } from 'lucide-react';
export const PremiumServices: React.FC = () => {
  const {
    t
  } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const services = [{
    id: 1,
    title: t('expert_guides'),
    icon: <UserIcon className="h-8 w-8 text-green-500" />
  }, {
    id: 2,
    title: t('custom_itineraries'),
    icon: <MapIcon className="h-8 w-8 text-green-500" />
  }, {
    id: 3,
    title: t('luxury_accommodations'),
    icon: <HotelIcon className="h-8 w-8 text-green-500" />
  }, {
    id: 4,
    title: t('photography_assistance'),
    icon: <CameraIcon className="h-8 w-8 text-green-500" />
  }];
  return <section ref={sectionRef} className="py-16 bg-white w-full opacity-0" style={{
    backgroundImage: "linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('premium_services')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('premium_description')}
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <div key={service.id} className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:border-green-200 animate-slideUp bg-white bg-opacity-80" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="mb-4 transform transition-all duration-500 hover:scale-110 animate-pulse" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
            </div>)}
        </div>
      </div>
      <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6 animate-fadeInDown">
            {t('ready_to_start')}
          </h3>
          <a href="https://wa.me/94743438182" target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium uppercase tracking-wider transition-all duration-300 transform hover:scale-105 animate-fadeInUp inline-block w-[200px] shadow-lg shadow-green-600/20">
            {t('contact_us')}
          </a>
        </div>
      </div>
    </section>;
};