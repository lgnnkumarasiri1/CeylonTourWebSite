import React, { useEffect, useState, createElement } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { PopularDestinations } from './components/PopularDestinations'
import { TopRatedTours } from './components/TopRatedTours'
import { PackageDetails } from './components/PackageDetails'
import { InquiryForm } from './components/InquiryForm'
import { PremiumServices } from './components/PremiumServices'
import { Testimonials } from './components/Testimonials'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Footer } from './components/Footer'
import { AboutPage } from './pages/AboutPage'
import { DestinationsPage } from './pages/DestinationsPage'
import { PackagesPage } from './pages/PackagesPage'
import { ContactPage } from './pages/ContactPage'
import { InquiryPage } from './pages/InquiryPage'
import { I18nextProvider } from 'react-i18next'
import i18n from './utils/i18n'
export function App() {
  const [language, setLanguage] = useState('en') // Default language is English
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Simulate loading for a smoother entrance
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    // Check for hash in URL for navigation
    const hash = window.location.hash.replace('#', '')
    if (
      hash &&
      ['about', 'destinations', 'packages', 'contact', 'inquiry'].includes(hash)
    ) {
      setCurrentPage(hash)
    } else if (hash.startsWith('package-')) {
      // If hash is for a package, stay on home page but scroll to package details
      setCurrentPage('home')
      setTimeout(() => {
        const packageDetails = document.getElementById('package-details')
        if (packageDetails) {
          packageDetails.scrollIntoView({
            behavior: 'smooth',
          })
        }
      }, 100)
    }
    // Add animation classes to CSS
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translate3d(0, -20px, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translate3d(0, 30px, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translate3d(-30px, 0, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0px);
        }
      }
      @keyframes pulse {
        0% {
          transform: scale(1);
          opacity: 0.8;
        }
        50% {
          transform: scale(1.05);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 0.8;
        }
      }
      @keyframes ripple {
        0% {
          transform: scale(0.8);
          opacity: 1;
        }
        100% {
          transform: scale(2);
          opacity: 0;
        }
      }
      @keyframes bounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      @keyframes spin-slow {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      @keyframes sway {
        0%, 100% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(5deg);
        }
      }
      @keyframes draw-path {
        0% {
          stroke-dashoffset: 100;
        }
        100% {
          stroke-dashoffset: 0;
        }
      }
      @keyframes scale-up {
        0% {
          transform: scale(0.8);
        }
        100% {
          transform: scale(1);
        }
      }
      @keyframes shimmer {
        0% {
          background-position: -1000px 0;
        }
        100% {
          background-position: 1000px 0;
        }
      }
      @keyframes gradient-shift {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      @keyframes reveal {
        0% {
          clip-path: inset(0 100% 0 0);
        }
        100% {
          clip-path: inset(0 0 0 0);
        }
      }
      @keyframes rotate-3d {
        0% {
          transform: perspective(1000px) rotateY(0deg);
        }
        100% {
          transform: perspective(1000px) rotateY(360deg);
        }
      }
      @keyframes blur-in {
        0% {
          filter: blur(12px);
          opacity: 0;
        }
        100% {
          filter: blur(0px);
          opacity: 1;
        }
      }
      .animate-fadeIn {
        animation: fadeIn 1s ease-out;
      }
      .animate-fadeInDown {
        animation: fadeInDown 1s ease-out;
      }
      .animate-fadeInUp {
        animation: fadeInUp 1s ease-out;
      }
      .animate-slideUp {
        animation: slideUp 0.8s ease-out;
      }
      .animate-slideIn {
        animation: slideIn 0.8s ease-out;
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .animate-pulse {
        animation: pulse 3s ease-in-out infinite;
      }
      .animate-ripple {
        animation: ripple 3s linear infinite;
      }
      .animate-bounce {
        animation: bounce 2s ease-in-out infinite;
      }
      .animate-spin-slow {
        animation: spin-slow 15s linear infinite;
      }
      .animate-sway {
        animation: sway 3s ease-in-out infinite;
      }
      .animate-draw-path {
        animation: draw-path 10s linear infinite;
      }
      .animate-scale-up {
        animation: scale-up 0.5s ease-out forwards;
      }
      .animate-shimmer {
        background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.2), rgba(255,255,255,0));
        background-size: 1000px 100%;
        animation: shimmer 2s infinite linear;
      }
      .animate-gradient-shift {
        background-size: 200% 200%;
        animation: gradient-shift 5s ease infinite;
      }
      .animate-reveal {
        animation: reveal 1s ease-out forwards;
      }
      .animate-rotate-3d {
        animation: rotate-3d 15s linear infinite;
      }
      .animate-blur-in {
        animation: blur-in 0.8s ease-out forwards;
      }
      /* Parallax effect */
      .parallax {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      /* Glass morphism */
      .glass {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      /* Custom card hover effects */
      .card-hover {
        transition: all 0.3s ease;
      }
      .card-hover:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      /* 3D card effect */
      .card-3d {
        transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .card-3d:hover {
        transform: rotateY(5deg) rotateX(5deg) scale(1.02);
      }
      /* Loading animation */
      .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #FFF;
        border-bottom-color: #22c55e;
        border-radius: 50%;
        animation: spin-slow 1s linear infinite;
      }
      /* Custom button hover effect */
      .btn-hover {
        transition: all 0.3s ease;
        background-size: 200% auto;
      }
      .btn-hover:hover {
        background-position: right center;
        transform: translateY(-3px);
      }
      /* RTL specific styles */
      [dir="rtl"] {
        overflow-x: hidden;
      }
      /* Ensure RTL text alignment */
      [dir="rtl"] .text-left {
        text-align: right;
      }
      [dir="rtl"] .text-right {
        text-align: left;
      }
      /* Fix icon directions in RTL */
      [dir="rtl"] .transform-flip-x {
        transform: scaleX(-1);
      }
      /* Smooth scroll for the entire page */
      html {
        scroll-behavior: smooth;
      }
      /* Page transition effect */
      .page-transition-enter {
        opacity: 0;
        transform: translateY(20px);
      }
      .page-transition-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 500ms, transform 500ms;
      }
      .page-transition-exit {
        opacity: 1;
        transform: translateY(0);
      }
      .page-transition-exit-active {
        opacity: 0;
        transform: translateY(-20px);
        transition: opacity 500ms, transform 500ms;
      }
      /* Font family classes */
      .font-merriweather {
        font-family: 'Merriweather', serif;
      }
      .font-poppins {
        font-family: 'Poppins', sans-serif;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
      clearTimeout(timer)
    }
  }, [])
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lng
    // Add RTL-specific class to body for additional styling
    if (lng === 'ar') {
      document.body.classList.add('rtl-layout')
    } else {
      document.body.classList.remove('rtl-layout')
    }
    // Force a reload of all translations
    i18n.reloadResources().then(() => {
      // This will trigger a re-render with the new translations
      console.log('Language resources reloaded:', lng)
    })
  }
  const navigateTo = (page: string) => {
    setCurrentPage(page)
    window.location.hash = page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  // Render the appropriate page based on currentPage
  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />
      case 'destinations':
        return <DestinationsPage />
      case 'packages':
        return <PackagesPage />
      case 'contact':
        return <ContactPage />
      case 'inquiry':
        return <InquiryPage />
      default:
        return (
          <>
            <Hero />
            <AboutUs />
            <PopularDestinations />
            <TopRatedTours />
            <WhyChooseUs />
            <PackageDetails />
            <Testimonials />
            <InquiryForm />
            <PremiumServices />
          </>
        )
    }
  }
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-green-500 to-green-700 animate-gradient-shift">
        <div className="text-center">
          <div className="loader mx-auto mb-4"></div>
          <h2 className="text-white text-2xl font-bold animate-pulse">
            Ceylon Tour Bird
          </h2>
          <p className="text-white text-lg mt-2 animate-fadeIn">
            Discover Sri Lanka with us...
          </p>
        </div>
      </div>
    )
  }
  return (
    <I18nextProvider i18n={i18n}>
      <div
        className={`flex flex-col min-h-screen w-full ${language === 'ar' ? 'font-arabic' : 'font-sans'} animate-fadeIn`}
      >
        <Header
          language={language}
          changeLanguage={changeLanguage}
          currentPage={currentPage}
          navigateTo={navigateTo}
        />
        <main className="flex-grow">{renderPage()}</main>
        <Footer />
      </div>
    </I18nextProvider>
  )
}
