import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (mainVideoRef.current) {
      const video = mainVideoRef.current;

      const handleLoaded = () => setIsVideoLoaded(true);
      const handleError = () => {
        console.error('Video failed to load');
        setVideoError(true);
        setIsVideoLoaded(true);
      };

      video.addEventListener('loadeddata', handleLoaded);
      video.addEventListener('error', handleError);

      video.play().catch(error => {
        console.error('Video autoplay failed:', error);
        setIsVideoLoaded(true);
      });

      return () => {
        video.removeEventListener('loadeddata', handleLoaded);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Video with Image Fallback */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 z-10 bg-black opacity-60"></div>
        <video
          ref={mainVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1586624235026-1585ea70b1f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
          <source src="Homehero.mp4" type="video/mp4" />
          <source src="https://player.vimeo.com/external/368763065.hd.mp4?s=73a9b3c0c4b29e752732c0e9bb63ae7a9a951f7d&profile_id=175" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1586624235026-1585ea70b1f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt={t('sri_lanka_waterfall')}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>

        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="loader"></div>
          </div>
        )}
      </div>

      <div
        className={`relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-20 transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="glass py-3 px-8 rounded-full inline-block self-center mb-8 animate-fadeIn">
          <p className="text-white font-medium text-lg">{t('wander_far_stress_never')}</p>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center animate-fadeInDown">
          {t('discover_srilanka')}
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-12 text-center animate-fadeInUp leading-relaxed">
          {t('hero_description_extended')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse animate-fadeInUp">
          <a
            href="#about-section"
            onClick={(e) => {
              e.preventDefault();
              scrollToAbout();
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-md font-medium transition-all duration-300 hover:scale-105 text-center shadow-lg shadow-green-600/30"
          >
            {t('explore_more')}
          </a>
          <a
            href="#inquiry"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'inquiry';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-md font-medium transition-all duration-300 hover:scale-105 text-center shadow-lg shadow-black/30"
          >
            {t('inquire_now')}
          </a>
        </div>
      </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse animate-fadeInUp">
          <a
            href="#about-section"
            onClick={(e) => {
              e.preventDefault()
              scrollToAbout()
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-md font-medium transition-all duration-300 hover:scale-105 text-center shadow-lg shadow-green-600/30"
          >
            {t('explore_more')}
          </a>
          <a
            href="#inquiry"
            onClick={(e) => {
              e.preventDefault()
              window.location.hash = 'inquiry'
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }}
            className="bg-white text-green-600 px-10 py-4 rounded-md font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-green-600/30"
          >
            {t('inquire_now')}
          </a>
        </div>
      
      
      {/* Scroll Down Button with adjusted bottom margin */}
      <div className="absolute bottom-4
       left-1/2 transform -translate-x-1/2 z-20 text-center">
        <button
          onClick={scrollToAbout}
          className="text-white flex flex-col items-center animate-bounce cursor-pointer"
        >
          <span className="mb-2">{t('scroll_down')}</span>
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};
