import React, { useEffect, useState, Children, Component } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader2Icon, CheckCircleIcon, PlusIcon, MinusIcon } from 'lucide-react';
export const InquiryPage: React.FC = () => {
  const {
    t,
    i18n
  } = useTranslation();
  const currentLanguage = i18n.language;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '',
    returnDate: '',
    adults: 2,
    children: 0,
    childrenAgeCategories: {
      infant: 0,
      child: 0,
      kid: 0,
      teen: 0 // 12-17 years
    },
    tourType: '',
    destination: '',
    budget: '',
    accommodation: '',
    message: ''
  });
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  // Filter options
  const tourTypes = [{
    value: 'wildlife',
    label: t('wildlife')
  }, {
    value: 'cultural',
    label: t('cultural_heritage')
  }, {
    value: 'beach',
    label: t('beach')
  }, {
    value: 'hill_country',
    label: t('hill_country')
  }, {
    value: 'adventure',
    label: t('adventure')
  }, {
    value: 'family',
    label: t('family')
  }, {
    value: 'custom',
    label: t('custom_tour')
  }];
  const destinations = [{
    value: 'colombo',
    label: t('colombo')
  }, {
    value: 'kandy',
    label: 'Kandy'
  }, {
    value: 'galle',
    label: 'Galle'
  }, {
    value: 'ella',
    label: t('ella')
  }, {
    value: 'nuwara_eliya',
    label: t('nuwara_eliya')
  }, {
    value: 'yala',
    label: 'Yala'
  }, {
    value: 'sigiriya',
    label: 'Sigiriya'
  }, {
    value: 'trincomalee',
    label: 'Trincomalee'
  }, {
    value: 'adams_peak',
    label: t('adams_peak')
  }, {
    value: 'babarakanda',
    label: t('babarakanda_waterfall')
  }, {
    value: 'ravana_falls',
    label: t('ravana_falls')
  }, {
    value: 'aberdeen_falls',
    label: t('aberdeen_falls')
  }, {
    value: 'multiple',
    label: t('multiple_destinations')
  }];
  const budgetOptions = [{
    value: 'economy',
    label: t('economy')
  }, {
    value: 'standard',
    label: t('standard')
  }, {
    value: 'luxury',
    label: t('luxury')
  }, {
    value: 'premium',
    label: t('premium')
  }];
  const accommodationTypes = [{
    value: 'hotel',
    label: t('hotel')
  }, {
    value: 'resort',
    label: t('resort')
  }, {
    value: 'villa',
    label: t('villa')
  }, {
    value: 'homestay',
    label: t('homestay')
  }, {
    value: 'mixed',
    label: t('mixed')
  }];
  // Children age categories
  const childrenAgeCategories = [{
    key: 'infant',
    label: t('infant'),
    description: t('infant_age_range')
  }, {
    key: 'child',
    label: t('child'),
    description: t('child_age_range')
  }, {
    key: 'kid',
    label: t('kid'),
    description: t('kid_age_range')
  }, {
    key: 'teen',
    label: t('teen'),
    description: t('teen_age_range')
  }];
  // Handle form input changes
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
  // Handle numeric input changes
  const handleNumericChange = (name: string, value: number) => {
    if (name === 'children') {
      // Update children count
      const newChildrenCount = Math.max(0, value);
      setFormData(prev => ({
        ...prev,
        children: newChildrenCount
      }));
    } else {
      // For other numeric fields like adults
      setFormData(prev => ({
        ...prev,
        [name]: Math.max(1, value) // Ensure at least 1 adult
      }));
    }
  };
  // Handle child age category changes
  const handleChildAgeCategoryChange = (category: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      childrenAgeCategories: {
        ...prev.childrenAgeCategories,
        [category]: Math.max(0, value)
      }
    }));
    // Update total children count
    const totalChildren = Object.values({
      ...formData.childrenAgeCategories,
      [category]: Math.max(0, value)
    }).reduce((sum, count) => sum + count, 0);
    setFormData(prev => ({
      ...prev,
      children: totalChildren
    }));
  };
  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Format child age categories for the message
      const childrenDetails = formData.children > 0 ? Object.entries(formData.childrenAgeCategories).map(([category, count]) => {
        if (count > 0) {
          const categoryLabel = childrenAgeCategories.find(cat => cat.key === category)?.label || category;
          return `${categoryLabel}: ${count}`;
        }
        return null;
      }).filter(Boolean).join(', ') : t('no_children');
      // Get text labels for selected options
      const tourTypeLabel = tourTypes.find(t => t.value === formData.tourType)?.label || formData.tourType;
      const destinationLabel = destinations.find(d => d.value === formData.destination)?.label || formData.destination;
      const budgetLabel = budgetOptions.find(b => b.value === formData.budget)?.label || formData.budget;
      const accommodationLabel = accommodationTypes.find(a => a.value === formData.accommodation)?.label || formData.accommodation;
      // Construct WhatsApp message with form data
      const message = `
*New Detailed Inquiry from Website*
---------------------------
*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Travel Date:* ${formData.travelDate}
*Return Date:* ${formData.returnDate}
*Adults:* ${formData.adults}
*Children:* ${formData.children}
*Children Details:* ${childrenDetails}
*Tour Type:* ${tourTypeLabel}
*Destination:* ${destinationLabel}
*Budget:* ${budgetLabel}
*Accommodation:* ${accommodationLabel}
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
        window.open(`https://wa.me/94783655655?text=${encodedMessage}`, '_blank');
        // Reset form after redirect
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          travelDate: '',
          returnDate: '',
          adults: 2,
          children: 0,
          childrenAgeCategories: {
            infant: 0,
            child: 0,
            kid: 0,
            teen: 0
          },
          tourType: '',
          destination: '',
          budget: '',
          accommodation: '',
          message: ''
        });
        setIsSubmitting(false);
        setSubmitSuccess(false);
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };
  return <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] overflow-hidden" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('unawatuna.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInDown">
              {t('plan_your_trip')}
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto animate-fadeInUp">
              {t('custom_inquiry_desc')}
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>
        </div>
      </div>
      {/* Inquiry Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden card-3d">
            <form onSubmit={handleSubmit} className="p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('personal_details')}
                </h2>
                <div className="w-16 h-1 bg-green-500 mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                      {t('full_name')} *
                    </label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      {t('email')} *
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      {t('phone')} *
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" required />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('travel_details')}
                </h2>
                <div className="w-16 h-1 bg-green-500 mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="travelDate" className="block text-gray-700 font-medium mb-2">
                      {t('travel_date')} *
                    </label>
                    <input type="date" id="travelDate" name="travelDate" value={formData.travelDate} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" required />
                  </div>
                  <div>
                    <label htmlFor="returnDate" className="block text-gray-700 font-medium mb-2">
                      {t('return_date')}
                    </label>
                    <input type="date" id="returnDate" name="returnDate" value={formData.returnDate} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('adults')} (18+) *
                    </label>
                    <div className="flex items-center">
                      <button type="button" onClick={() => handleNumericChange('adults', formData.adults - 1)} className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-l-md">
                        <MinusIcon className="h-5 w-5" />
                      </button>
                      <input type="number" value={formData.adults} onChange={e => handleNumericChange('adults', parseInt(e.target.value) || 1)} min="1" className="w-16 text-center py-2 border-t border-b border-gray-300" readOnly />
                      <button type="button" onClick={() => handleNumericChange('adults', formData.adults + 1)} className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-r-md">
                        <PlusIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('children')} (0-17)
                    </label>
                    <div className="flex items-center">
                      <span className="text-gray-600 px-2">
                        {formData.children}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({t('from_age_categories')})
                      </span>
                    </div>
                  </div>
                </div>
                {/* Child age categories section */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    {t('children_age_categories')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {childrenAgeCategories.map(category => <div key={category.key} className="border border-gray-200 rounded-md p-4">
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-gray-700 font-medium">
                            {category.label}
                          </label>
                          <span className="text-xs text-gray-500">
                            {category.description}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <button type="button" onClick={() => handleChildAgeCategoryChange(category.key, (formData.childrenAgeCategories as any)[category.key] - 1)} className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-l-md">
                            <MinusIcon className="h-4 w-4" />
                          </button>
                          <input type="number" value={(formData.childrenAgeCategories as any)[category.key]} onChange={e => handleChildAgeCategoryChange(category.key, parseInt(e.target.value) || 0)} min="0" className="w-12 text-center py-2 border-t border-b border-gray-300" readOnly />
                          <button type="button" onClick={() => handleChildAgeCategoryChange(category.key, (formData.childrenAgeCategories as any)[category.key] + 1)} className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-r-md">
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('preferences')}
                </h2>
                <div className="w-16 h-1 bg-green-500 mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="tourType" className="block text-gray-700 font-medium mb-2">
                      {t('tour_type')}
                    </label>
                    <select id="tourType" name="tourType" value={formData.tourType} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300">
                      <option value="">{t('select_tour_type')}</option>
                      {tourTypes.map(type => <option key={type.value} value={type.value}>
                          {type.label}
                        </option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">
                      {t('primary_destination')}
                    </label>
                    <select id="destination" name="destination" value={formData.destination} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300">
                      <option value="">{t('select_destination')}</option>
                      {destinations.map(dest => <option key={dest.value} value={dest.value}>
                          {dest.label}
                        </option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">
                      {t('budget_category')}
                    </label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300">
                      <option value="">{t('select_budget')}</option>
                      {budgetOptions.map(budget => <option key={budget.value} value={budget.value}>
                          {budget.label}
                        </option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="accommodation" className="block text-gray-700 font-medium mb-2">
                      {t('accommodation_type')}
                    </label>
                    <select id="accommodation" name="accommodation" value={formData.accommodation} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300">
                      <option value="">{t('select_accommodation')}</option>
                      {accommodationTypes.map(accom => <option key={accom.value} value={accom.value}>
                          {accom.label}
                        </option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    {t('additional_requests')}
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-300" placeholder={t('message_placeholder')}></textarea>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" disabled={isSubmitting || submitSuccess} className={`bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 w-[200px] shadow-lg shadow-green-200/50 ${isSubmitting || submitSuccess ? 'opacity-90 cursor-not-allowed' : ''} flex justify-center items-center mx-auto`}>
                  {isSubmitting ? <>
                      <Loader2Icon className="w-5 h-5 mr-2 animate-spin" />
                      {t('sending')}
                    </> : submitSuccess ? <>
                      <CheckCircleIcon className="w-5 h-5 mr-2" />
                      {t('success_message')}
                    </> : t('submit_inquiry')}
                </button>
                {submitSuccess && <p className="text-green-500 mt-4 animate-fadeIn">
                    {t('form_success')}
                  </p>}
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Help Section */}
      
    </div>;
};