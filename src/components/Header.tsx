import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuIcon, XIcon, GlobeIcon } from 'lucide-react';
interface HeaderProps {
  language: string;
  changeLanguage: (lng: string) => void;
  currentPage: string;
  navigateTo: (page: string) => void;
}
export const Header: React.FC<HeaderProps> = ({
  language,
  changeLanguage,
  currentPage,
  navigateTo
}) => {
  const {
    t,
    i18n
  } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleNavigation = (page: string) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };
  // Handle language change with proper direction setting
  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    // Set RTL direction for Arabic, LTR for English
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    // Force refresh all translated content
    i18n.reloadResources();
  };
  // Set correct direction on component mount
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);
  return <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigation('home')}>
              <img src="/Logo.png" alt="Ceylon Tour Bird" className="h-12" />
            </div>
          </div>
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-6 rtl:space-x-reverse mr-6">
              <a href="#home" onClick={e => {
              e.preventDefault();
              handleNavigation('home');
            }} className={`${currentPage === 'home' ? 'text-green-500 font-medium' : 'text-gray-700'} hover:text-green-500 transition-colors text-sm`}>
                {t('home')}
              </a>
              <a href="#about" onClick={e => {
              e.preventDefault();
              handleNavigation('about');
            }} className={`${currentPage === 'about' ? 'text-green-500 font-medium' : 'text-gray-700'} hover:text-green-500 transition-colors text-sm`}>
                {t('about')}
              </a>
              <a href="#destinations" onClick={e => {
              e.preventDefault();
              handleNavigation('destinations');
            }} className={`${currentPage === 'destinations' ? 'text-green-500 font-medium' : 'text-gray-700'} hover:text-green-500 transition-colors text-sm`}>
                {t('destinations')}
              </a>
              <a href="#packages" onClick={e => {
              e.preventDefault();
              handleNavigation('packages');
            }} className={`${currentPage === 'packages' ? 'text-green-500 font-medium' : 'text-gray-700'} hover:text-green-500 transition-colors text-sm`}>
                {t('packages')}
              </a>
              <a href="#inquiry" onClick={e => {
              e.preventDefault();
              handleNavigation('inquiry');
            }} className={`${currentPage === 'inquiry' ? 'text-green-500 font-medium' : 'text-gray-700'} hover:text-green-500 transition-colors text-sm`}>
                {t('inquiry')}
              </a>
              <a href="#contact" onClick={e => {
              e.preventDefault();
              handleNavigation('contact');
            }} className={`${currentPage === 'contact' ? 'text-green-500 font-medium' : 'text-gray-700'} hover:text-green-500 transition-colors text-sm`}>
                {t('contact')}
              </a>
            </nav>
            <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
              <div className="relative">
                <button className="flex items-center text-gray-700 hover:text-green-500" onClick={() => handleLanguageChange(language === 'en' ? 'ar' : 'en')}>
                  <GlobeIcon className="h-5 w-5 mr-1 rtl:ml-1 rtl:mr-0" />
                  <span>{language === 'en' ? 'العربية' : 'English'}</span>
                </button>
              </div>
              <a href="https://wa.me/94783655655" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 whitespace-nowrap shadow-lg shadow-green-200/50 text-sm">
                {t('book_now')}
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-500 focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={e => {
          e.preventDefault();
          handleNavigation('home');
        }} className={`block px-3 py-2 rounded-md ${currentPage === 'home' ? 'bg-green-50 text-green-500 font-medium' : 'text-gray-700'} hover:text-green-500 hover:bg-green-50`}>
              {t('home')}
            </a>
            <a href="#about" onClick={e => {
          e.preventDefault();
          handleNavigation('about');
        }} className={`block px-3 py-2 rounded-md ${currentPage === 'about' ? 'bg-green-50 text-green-500 font-medium' : 'text-gray-700'} hover:text-green-500 hover:bg-green-50`}>
              {t('about')}
            </a>
            <a href="#destinations" onClick={e => {
          e.preventDefault();
          handleNavigation('destinations');
        }} className={`block px-3 py-2 rounded-md ${currentPage === 'destinations' ? 'bg-green-50 text-green-500 font-medium' : 'text-gray-700'} hover:text-green-500 hover:bg-green-50`}>
              {t('destinations')}
            </a>
            <a href="#packages" onClick={e => {
          e.preventDefault();
          handleNavigation('packages');
        }} className={`block px-3 py-2 rounded-md ${currentPage === 'packages' ? 'bg-green-50 text-green-500 font-medium' : 'text-gray-700'} hover:text-green-500 hover:bg-green-50`}>
              {t('packages')}
            </a>
            <a href="#inquiry" onClick={e => {
          e.preventDefault();
          handleNavigation('inquiry');
        }} className={`block px-3 py-2 rounded-md ${currentPage === 'inquiry' ? 'bg-green-50 text-green-500 font-medium' : 'text-gray-700'} hover:text-green-500 hover:bg-green-50`}>
              {t('inquiry')}
            </a>
            <a href="#contact" onClick={e => {
          e.preventDefault();
          handleNavigation('contact');
        }} className={`block px-3 py-2 rounded-md ${currentPage === 'contact' ? 'bg-green-50 text-green-500 font-medium' : 'text-gray-700'} hover:text-green-500 hover:bg-green-50`}>
              {t('contact')}
            </a>
            <div className="flex items-center justify-between px-3 py-2">
              <button className="flex items-center text-gray-700 hover:text-green-500" onClick={() => handleLanguageChange(language === 'en' ? 'ar' : 'en')}>
                <GlobeIcon className="h-5 w-5 mr-1 rtl:ml-1 rtl:mr-0" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
              <a href="https://wa.me/94783655655" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-lg shadow-green-200/50 text-sm">
                {t('book_now')}
              </a>
            </div>
          </div>
        </div>}
    </header>;
};