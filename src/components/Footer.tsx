import React from 'react';
import { useTranslation } from 'react-i18next';
import { FacebookIcon, InstagramIcon, TwitterIcon, PhoneIcon, MailIcon, MapPinIcon, HeartIcon, ArrowUpIcon } from 'lucide-react';
export const Footer: React.FC = () => {
  const {
    t
  } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-black text-white pt-32 pb-8 w-full relative">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{
      transform: 'translateY(-99%)'
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[150px]">
          <path fill="#000000" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,229.3C672,224,768,192,864,181.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      {/* Scroll to top button */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button onClick={scrollToTop} className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-green-500/30 group" aria-label="Scroll to top">
          <ArrowUpIcon className="h-6 w-6 group-hover:animate-bounce" />
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="animate-fadeIn">
            <div className="bg-white p-3 rounded-lg inline-block mb-6 shadow-lg transform hover:rotate-3 transition-transform duration-300">
              <img src="/Logo.png" alt="Ceylon Tour Bird" className="h-16" />
            </div>
            <p className="text-gray-400 mb-6 max-w-xs leading-relaxed">
              {t('footer_company_description')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="bg-gray-800 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-300 transform hover:scale-110" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-300 transform hover:scale-110" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-300 transform hover:scale-110" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="animate-fadeIn" style={{
          animationDelay: '0.2s'
        }}>
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-gray-800 pb-2">
              {t('quick_links')}
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" onClick={e => {
                e.preventDefault();
                window.location.hash = 'home';
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform hover:translate-x-2">
                  <span className="border-b border-transparent hover:border-green-500 pb-1">
                    {t('home')}
                  </span>
                </a>
              </li>
              <li>
                <a href="#about" onClick={e => {
                e.preventDefault();
                window.location.hash = 'about';
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform hover:translate-x-2">
                  <span className="border-b border-transparent hover:border-green-500 pb-1">
                    {t('about')}
                  </span>
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={e => {
                e.preventDefault();
                window.location.hash = 'destinations';
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform hover:translate-x-2">
                  <span className="border-b border-transparent hover:border-green-500 pb-1">
                    {t('destinations')}
                  </span>
                </a>
              </li>
              <li>
                <a href="#packages" onClick={e => {
                e.preventDefault();
                window.location.hash = 'packages';
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform hover:translate-x-2">
                  <span className="border-b border-transparent hover:border-green-500 pb-1">
                    {t('packages')}
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={e => {
                e.preventDefault();
                window.location.hash = 'contact';
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform hover:translate-x-2">
                  <span className="border-b border-transparent hover:border-green-500 pb-1">
                    {t('contact')}
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="animate-fadeIn" style={{
          animationDelay: '0.3s'
        }}>
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-gray-800 pb-2">
              {t('top_rated_tours')}
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block group">
                  <span className="border-b border-transparent group-hover:border-green-500 pb-1">
                    {t('cultural_heritage')}
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block group">
                  <span className="border-b border-transparent group-hover:border-green-500 pb-1">
                    {t('beach_adventure')}
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block group">
                  <span className="border-b border-transparent group-hover:border-green-500 pb-1">
                    {t('wildlife_safari')}
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block group">
                  <span className="border-b border-transparent group-hover:border-green-500 pb-1">
                    {t('hill_country')}
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block group">
                  <span className="border-b border-transparent group-hover:border-green-500 pb-1">
                    {t('wellness')}
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="animate-fadeIn" style={{
          animationDelay: '0.4s'
        }}>
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-gray-800 pb-2">
              {t('contact_info')}
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                <MapPinIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0 group-hover:animate-bounce" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  {t('address')}
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse group">
                <PhoneIcon className="h-5 w-5 text-green-500 flex-shrink-0 group-hover:animate-bounce" />
                <a href="tel:+94783655655" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +94 11 234 5678
                </a>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse group">
                <MailIcon className="h-5 w-5 text-green-500 flex-shrink-0 group-hover:animate-bounce" />
                <a href="mailto:info@tourbird.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  info@tourbird.com
                </a>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-800">
              <a href="https://wa.me/94783655655" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 inline-flex items-center shadow-lg shadow-green-900/20">
                <span>{t('whatsapp_label')}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-400 animate-fadeIn">{t('rights_reserved')}</p>
          <p className="text-gray-500 text-sm mt-3 animate-fadeIn flex items-center justify-center">
            {t('made_with')}{' '}
            <HeartIcon className="h-4 w-4 text-red-500 mx-1 animate-pulse" style={{
            animationDuration: '2s'
          }} />{' '}
            {t('in_sri_lanka')}
          </p>
        </div>
      </div>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-500 rounded-full animate-float" style={{
        animationDuration: '7s'
      }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500 rounded-full animate-float" style={{
        animationDuration: '5s'
      }}></div>
        <div className="absolute bottom-40 left-30 w-2 h-2 bg-yellow-500 rounded-full animate-float" style={{
        animationDuration: '8s'
      }}></div>
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-purple-500 rounded-full animate-float" style={{
        animationDuration: '6s'
      }}></div>
      </div>
      {/* Gradient line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-green-400 to-green-600 animate-gradient-shift"></div>
    </footer>;
};