import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircleIcon } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('pinnawala.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInDown">
              {t('about')}
            </h1>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('our_story')}
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">{t('our_story_1')}</p>
              <p className="text-gray-600 mb-4">{t('our_story_2')}</p>
              <p className="text-gray-600">{t('our_story_3')}</p>
            </div>
            <div className="card-3d rounded-lg overflow-hidden shadow-xl">
              <img
                src="birds.png"
                alt="Bird watching in Sri Lanka"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('our_mission')}
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 card-3d">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {t('conservation')}
                </h3>
              </div>
              <p className="text-gray-600">{t('conservation_desc')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 card-3d">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {t('education')}
                </h3>
              </div>
              <p className="text-gray-600">{t('education_desc')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 card-3d">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {t('community')}
                </h3>
              </div>
              <p className="text-gray-600">{t('community_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('experience_srilanka')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('contact_today')}</p>
          <a
            href="https://wa.me/94743438182"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium uppercase tracking-wider transition-all duration-300 transform hover:scale-105 inline-block w-[200px]"
          >
            {t('contact_us')}
          </a>
        </div>
      </section>
    </div>
  );
};
