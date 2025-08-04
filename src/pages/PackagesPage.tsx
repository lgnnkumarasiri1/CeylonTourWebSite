import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CalendarIcon, MapPinIcon, CheckCircleIcon, XCircleIcon, MoonIcon, SunIcon } from 'lucide-react';
import { Activities } from '../components/Activities';
export const PackagesPage: React.FC = () => {
  const {
    t
  } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const packages = [{
    id: 1,
    title: t('ancient_wonders'),
    description: t('ancient_wonders_desc'),
    days: 7,
    nights: 6,
    image: 'anuradhapura.png'
  }, {
    id: 2,
    title: t('nature_heritage'),
    description: t('nature_heritage_desc'),
    days: 8,
    nights: 7,
    image: 'tiger.png'
  }, {
    id: 3,
    title: t('coastal_explorer'),
    description: t('coastal_explorer_desc'),
    days: 6,
    nights: 5,
    image: "mirissa.png"
  }, {
    id: 4,
    title: t('cultural_immersion'),
    description: t('cultural_immersion_desc'),
    days: 9,
    nights: 8,
    image: 'redmosque.png'
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('fish.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInDown">
              {t('srilanka_tour_packages')}
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto animate-fadeInUp">
              {t('expertly_crafted_packages')}
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>
        </div>
      </div>
      {/* Featured Packages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('featured_tour_packages')}
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {packages.map(pkg => <div key={pkg.id} className="relative h-[400px] rounded-xl overflow-hidden shadow-xl group card-3d">
                <img src={pkg.image} alt={pkg.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{pkg.title}</h3>
                  <div className="space-y-6">
                    <div className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 inline-flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex items-center">
                        <MoonIcon className="h-5 w-5 text-yellow-300 mr-2 rtl:ml-2 rtl:mr-0" />
                        <span>
                          {pkg.nights} {t('nights')}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <SunIcon className="h-5 w-5 text-yellow-400 mr-2 rtl:ml-2 rtl:mr-0" />
                        <span>
                          {pkg.days} {t('days')}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-100 text-lg leading-relaxed">
                      {pkg.description}
                    </p>
                    <a href="#inquiry" onClick={e => {
                  e.preventDefault();
                  window.location.hash = 'inquiry';
                  window.scrollTo(0, 0);
                }} className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-green-900/30">
                      {t('book_now')}
                    </a>
                  </div>
                </div>
              </div>)}
          </div>
          {/* Activities Section */}
          <Activities />
        </div>
      </section>
      {/* Inclusions/Exclusions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('package_details')}
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="bg-white p-8 rounded-lg shadow-lg card-3d">
              <h3 className="text-xl font-bold text-green-600 mb-6 flex items-center">
                <CheckCircleIcon className="h-6 w-6 mr-2 rtl:ml-2 rtl:mr-0" />
                {t('package_inclusions')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                  <span>{t('airport_pickup')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                  <span>{t('daily_breakfast')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                  <span>{t('private_vehicle')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                  <span>{t('hotel_accommodation')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                  <span>{t('all_sightseeing')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                  <span>{t('support_247')}</span>
                </li>
              </ul>
            </div>
            {/* Exclusions */}
            <div className="bg-white p-8 rounded-lg shadow-lg card-3d">
              <h3 className="text-xl font-bold text-red-500 mb-6 flex items-center">
                <XCircleIcon className="h-6 w-6 mr-2 rtl:ml-2 rtl:mr-0" />
                {t('exclusions')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                  <span>{t('airfare')}</span>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                  <span>{t('entrance_tickets')}</span>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                  <span>{t('visa_charges')}</span>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                  <span>{t('personal_expenses')}</span>
                </li>
              </ul>
              <div className="mt-8">
                <h4 className="font-bold text-gray-900 mb-3">
                  {t('popular_addons')}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 rtl:ml-2 rtl:mr-0">
                      •
                    </span>
                    <span>{t('ayurvedic_spa')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 rtl:ml-2 rtl:mr-0">
                      •
                    </span>
                    <span>{t('village_tours')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 rtl:ml-2 rtl:mr-0">
                      •
                    </span>
                    <span>{t('hiking_waterfall')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 rtl:ml-2 rtl:mr-0">
                      •
                    </span>
                    <span>{t('private_chauffeur')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 rtl:ml-2 rtl:mr-0">
                      •
                    </span>
                    <span>{t('luxury_train')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 rtl:ml-2 rtl:mr-0">
                      •
                    </span>
                    <span>{t('food_experiences')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('ready_to_explore')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('contact_custom_itinerary')}
          </p>
          <a href="#inquiry" onClick={e => {
          e.preventDefault();
          window.location.hash = 'inquiry';
          window.scrollTo(0, 0);
        }} className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium uppercase tracking-wider transition-all duration-300 transform hover:scale-105 inline-block w-[200px]">
            {t('book_now')}
          </a>
        </div>
      </section>
    </div>;
};