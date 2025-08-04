import React, { useEffect, useState, Component } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircleIcon } from 'lucide-react';
interface PackageDetailsProps {
  id?: string;
}
export const PackageDetails: React.FC<PackageDetailsProps> = ({
  id
}) => {
  const {
    t,
    i18n
  } = useTranslation();
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  useEffect(() => {
    // Get package ID from URL hash if provided
    const hash = window.location.hash;
    if (hash.startsWith('#package-')) {
      const packageId = parseInt(hash.replace('#package-', ''), 10);
      if (!isNaN(packageId)) {
        setSelectedPackage(packageId);
      }
    }
    // Listen for hash changes to update selected package
    const handleHashChange = () => {
      const newHash = window.location.hash;
      if (newHash.startsWith('#package-')) {
        const packageId = parseInt(newHash.replace('#package-', ''), 10);
        if (!isNaN(packageId)) {
          setSelectedPackage(packageId);
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  // Package data
  const packages = [{
    id: 1,
    name: t('wildlife_safari'),
    days: 5,
    description: t('wildlife_safari_desc'),
    highlights: [t('wildlife_highlight_1'), t('wildlife_highlight_2'), t('wildlife_highlight_3'), t('wildlife_highlight_4'), t('wildlife_highlight_5')],
    image: "/HortonPlace.jpg"
  }, {
    id: 2,
    name: t('hill_country'),
    days: 4,
    description: t('hill_country_desc'),
    highlights: [t('hill_highlight_1'), t('hill_highlight_2'), t('hill_highlight_3'), t('hill_highlight_4'), t('hill_highlight_5')],
    image: "/rafting.jpg"
  }, {
    id: 3,
    name: t('beach_adventure'),
    days: 6,
    description: t('beach_adventure_desc'),
    highlights: [t('beach_highlight_1'), t('beach_highlight_2'), t('beach_highlight_3'), t('beach_highlight_4'), t('beach_highlight_5')],
    image: "/Matarabeach.jpg"
  }, {
    id: 4,
    name: t('cultural_heritage'),
    days: 7,
    description: t('cultural_heritage_desc'),
    highlights: [t('cultural_highlight_1'), t('cultural_highlight_2'), t('cultural_highlight_3'), t('cultural_highlight_4'), t('cultural_highlight_5')],
    image: 'https://images.unsplash.com/photo-1562059635-b6bea0c4a56f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  }];
  // Find the selected package
  const packageData = selectedPackage ? packages.find(pkg => pkg.id === selectedPackage) : packages[0];
  return <section id="package-details" className="py-16 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('tour_details')}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        <div className="flex flex-wrap mb-8 justify-center">
          {packages.map(pkg => <button key={pkg.id} data-package-id={pkg.id} className={`px-4 py-2 mr-2 mb-2 rounded-md transition-all duration-300 ${!selectedPackage && pkg.id === 1 || selectedPackage === pkg.id ? 'bg-green-500 shadow-lg shadow-green-200/50 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} w-[160px]`} onClick={() => {
          setSelectedPackage(pkg.id);
          window.location.hash = `package-${pkg.id}`;
        }}>
              {pkg.name}
            </button>)}
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl animate-fadeIn card-3d">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img src={packageData?.image} alt={packageData?.name} className="w-full h-64 md:h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {packageData?.name}
                </h3>
              </div>
              <div className="mb-4 flex items-center text-gray-600">
                <span className="font-semibold mr-2">
                  {packageData?.days} {t('days')}
                </span>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                  {t('available')}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{packageData?.description}</p>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t('highlights')}
                </h4>
                <ul className="space-y-1">
                  {packageData?.highlights.map((highlight, index) => <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>)}
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={`https://wa.me/94783655655?text=${encodeURIComponent(t('interested_in_package', {
                packageName: packageData?.name
              }))}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 w-[160px] text-center shadow-lg shadow-green-200/50">
                  {t('book_now')}
                </a>
                <a href="#tours" onClick={e => {
                e.preventDefault();
                window.location.hash = 'tours';
                window.scrollTo(0, 0);
              }} className="border border-green-500 text-green-500 hover:bg-green-50 px-6 py-3 rounded-md font-medium transition-all duration-300 w-[160px] text-center">
                  {t('view_all_tours_btn')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};