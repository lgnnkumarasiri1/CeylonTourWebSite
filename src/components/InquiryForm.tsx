import React, { useEffect, useState, useRef, Component } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader2Icon, CheckCircleIcon } from 'lucide-react';
import { translateToEnglish } from '../utils/translateService';
export const InquiryForm: React.FC = () => {
  const {
    t,
    i18n
  } = useTranslation();
  const currentLanguage = i18n.language;
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
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Construct WhatsApp message with form data
      const message = `
*New Inquiry from Website*
---------------------------
*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Travel Date:* ${formData.travelDate}
*Language:* English
*Message:* ${formData.message}
      `.trim();
      // Encode message for WhatsApp URL
      const encodedMessage = encodeURIComponent(message);
      // Set success state for UI feedback
      setSubmitSuccess(true);
      // Delay to show success message before redirecting to WhatsApp
      setTimeout(() => {
        // Redirect to WhatsApp with the form data
        window.open(`https://wa.me/94743438182?text=${encodedMessage}`, '_blank');
        // Reset form after redirect
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          travelDate: '',
          message: ''
        });
        setIsSubmitting(false);
        setSubmitSuccess(false);
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };
  return <section id="inquiry-form" className="py-16 w-full bg-gray-50" style={{
    backgroundImage: "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1540202404-1b927e27fa8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {t('inquire_now')}
          </h2>
          <p className="text-xl text-gray-600">{t('plan_journey')}</p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto transform transition-all duration-500 hover:shadow-2xl card-3d">
          <form onSubmit={handleSubmit} className="p-8">
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                {t('select_language')}
              </label>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <button type="button" className={`px-4 py-2 rounded-md transition-all duration-300 ${currentLanguage === 'en' ? 'bg-green-500 text-white shadow-lg shadow-green-200/50' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => i18n.changeLanguage('en')}>
                  English
                </button>
                <button type="button" className={`px-4 py-2 rounded-md transition-all duration-300 ${currentLanguage === 'ar' ? 'bg-green-500 text-white shadow-lg shadow-green-200/50' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => i18n.changeLanguage('ar')}>
                  العربية
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                  {t('full_name')}
                </label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" required />
              </div>
              <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  {t('email')}
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" required />
              </div>
              <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  {t('phone')}
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" required />
              </div>
              <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
                <label htmlFor="travelDate" className="block text-gray-700 font-medium mb-2">
                  {t('travel_date')}
                </label>
                <input type="date" id="travelDate" name="travelDate" value={formData.travelDate} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" required />
              </div>
            </div>
            <div className="mt-6 transform transition-all duration-500 hover:translate-y-[-5px]">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                {t('message')}
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" required></textarea>
            </div>
            <div className="mt-8 text-center">
              <button type="submit" disabled={isSubmitting || submitSuccess} className={`bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium uppercase tracking-wider transition-all duration-300 transform hover:scale-105 w-[200px] shadow-lg shadow-green-200/50 ${isSubmitting || submitSuccess ? 'opacity-90 cursor-not-allowed' : ''} flex justify-center items-center`}>
                {isSubmitting ? <>
                    <Loader2Icon className="w-5 h-5 mr-2 animate-spin" />
                    {t('sending')}
                  </> : submitSuccess ? <>
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    {t('success_message')}
                  </> : t('submit_now')}
              </button>
              {submitSuccess && <p className="text-green-500 mt-2 animate-fadeIn">
                  {t('form_success')}
                </p>}
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600">{t('whatsapp_contact')}</p>
              <a href="https://wa.me/94743438182" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-500 hover:text-green-600 mt-2 font-medium">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                </svg>
                +94 74 343 8182
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>;
};