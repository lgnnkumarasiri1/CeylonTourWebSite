import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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

    const handleScroll = () => {
      if (imageRef.current && textRef.current) {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * 0.1;
        imageRef.current.style.transform = `translateY(${offset * 0.5}px)`;
        textRef.current.style.transform = `translateY(${-offset * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="py-24 bg-white w-full opacity-0 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-50 px-4 py-2 rounded-full mb-4 animate-fadeInDown">
            <p className="text-green-600 font-medium">
              {t('a_journey_fueled_by_curiosity_and_wonder')}
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mt-2 mb-4 animate-fadeInDown animate-gradient-shift">
            {t('heart_behind')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div ref={textRef} className="space-y-6 animate-slideIn">
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('about_description_1')}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('about_description_2')}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('about_description_3')}
            </p>
            <a
              href="https://wa.me/94743438182"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-md font-medium transition-all duration-300 hover:scale-105 mt-6 text-center shadow-lg shadow-green-200/50 btn-hover"
            >
              {t('contact_us')}
            </a>
          </div>

          <div ref={imageRef} className="flex justify-center">
            <div className="relative w-[360px] h-[360px]">
              {/* Rotated and Enlarged Half Green Circle on the Right */}
              <div className="absolute right-[-115px] top-1/2 w-[420px] h-[220px] bg-green-600 rounded-t-full rotate-90 -translate-y-1/2 z-0" />

              {/* Main Image Circle */}
              <div className="w-full h-full rounded-full overflow-hidden relative z-10 border-8 border-green-600 shadow-2xl animate-fadeIn transform hover:scale-105 transition-all duration-700">
                <img
                  src="ramboda.png"
                  alt="Ramboda Waterfall"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[5%] animate-pulse">
          <div className="w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
        <div
          className="absolute bottom-1/4 left-[5%] animate-pulse"
          style={{ animationDuration: '6s' }}
        >
          <div className="w-72 h-72 bg-green-50 rounded-full opacity-20 blur-3xl"></div>
        </div>
        <div
          className="absolute top-1/3 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-float"
          style={{ animationDuration: '4s' }}
        ></div>
        <div
          className="absolute top-2/3 right-1/3 w-2 h-2 bg-green-300 rounded-full animate-float"
          style={{ animationDuration: '7s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-green-200 rounded-full animate-float"
          style={{ animationDuration: '5s' }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-5 h-5 bg-green-100 rounded-full animate-float"
          style={{ animationDuration: '6s' }}
        ></div>
      </div>
    </section>
  );
};
