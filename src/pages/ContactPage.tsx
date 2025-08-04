import React, { useEffect, useState, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { PhoneIcon, MailIcon, MapPinIcon, MessageCircleIcon } from 'lucide-react';
export const ContactPage: React.FC = () => {
  const {
    t
  } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      // Simulate form submission
      setTimeout(() => {
        setSubmitSuccess(true);
        setIsSubmitting(false);
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };
  return <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('newadams.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInDown">
              {t('contact_us_heading')}
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto animate-fadeInUp">
              {t('here_to_help')}
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg card-3d">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('send_message')}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      {t('your_name')}
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      {t('email_address')}
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      {t('phone_number')}
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      {t('subject')}
                    </label>
                    <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" required>
                      <option value="">{t('select_subject')}</option>
                      <option value="Tour Inquiry">{t('tour_inquiry')}</option>
                      <option value="Booking">{t('booking')}</option>
                      <option value="Custom Tour">{t('custom_tour')}</option>
                      <option value="Feedback">{t('feedback')}</option>
                      <option value="Other">{t('other')}</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    {t('your_message')}
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" required></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className={`bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? t('sending_msg') : submitSuccess ? t('message_sent') : t('send_message_btn')}
                </button>
                {submitSuccess && <p className="text-green-600 mt-4 text-center animate-fadeIn">
                    {t('thank_you_message')}
                  </p>}
              </form>
            </div>
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact_information')}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MapPinIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('office_address')}
                    </h3>
                    <p className="text-gray-600">{t('address')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <PhoneIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('phone_number_label')}
                    </h3>
                    <a href="https://wa.me/94743438182" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                      +94 74 343 8182
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MailIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('email_address_label')}
                    </h3>
                    <a href="mailto:info@ceylontourbird.com" className="text-gray-600 hover:text-green-600 transition-colors">
                      info@ceylontourbird.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MessageCircleIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('whatsapp_label')}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {t('whatsapp_description')}
                    </p>
                    <a href="https://wa.me/94743438182" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-all duration-300">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                      </svg>
                      {t('chat_whatsapp')}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {t('business_hours')}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>{t('monday_friday')}</span>
                    <span>{t('hours_weekday')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('saturday')}</span>
                    <span>{t('hours_saturday')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('sunday')}</span>
                    <span>{t('hours_sunday')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('find_us')}
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg card-3d">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3246554072236!2d79.9827837!3d6.6030232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24b43a1099b21%3A0x89afabdbbf3b8f6c!2sBeruwala%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1652886886058!5m2!1sen!2sus" width="100%" height="450" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ceylon Tour Bird Location" className="rounded-lg"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>;
};