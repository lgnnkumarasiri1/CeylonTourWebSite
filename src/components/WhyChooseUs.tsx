import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Clock, Heart, Shield, Users, Compass } from 'lucide-react';
export const WhyChooseUs: React.FC = () => {
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
  const reasons = [{
    icon: <Award className="h-10 w-10 text-green-500" />,
    title: t('expert_guides_title'),
    description: t('expert_guides_desc')
  }, {
    icon: <Clock className="h-10 w-10 text-green-500" />,
    title: t('support_title'),
    description: t('support_desc')
  }, {
    icon: <Shield className="h-10 w-10 text-green-500" />,
    title: t('safety_title'),
    description: t('safety_desc')
  }, {
    icon: <Heart className="h-10 w-10 text-green-500" />,
    title: t('personalized_title'),
    description: t('personalized_desc')
  }, {
    icon: <Users className="h-10 w-10 text-green-500" />,
    title: t('small_groups_title'),
    description: t('small_groups_desc')
  }, {
    icon: <Compass className="h-10 w-10 text-green-500" />,
    title: t('sustainable_title'),
    description: t('sustainable_desc')
  }];
  return <section ref={sectionRef} className="py-16 bg-gray-50 w-full opacity-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('why_choose_us')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('dedicated_to_excellence')}
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeIn" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-50 rounded-full mr-4 animate-pulse" style={{
              animationDuration: '3s'
            }}>
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-600">{reason.description}</p>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="https://wa.me/94743438182" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 inline-block shadow-lg shadow-green-200/50 animate-pulse" style={{
          animationDuration: '2s'
        }}>
            {t('start_planning')}
          </a>
        </div>
      </div>
    </section>;
};