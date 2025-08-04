import React, { useEffect, useState, useRef } from 'react'
import {
  StarIcon,
  Camera,
  Upload,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
// Define the testimonial type
interface Testimonial {
  id: string
  name: string
  tour: string
  rating: number
  text: string
  image: string
  date: string
  nameAr?: string
  tourAr?: string
  textAr?: string
}
export const Testimonials: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language
  const sectionRef = useRef<HTMLElement>(null)
  // State for testimonials
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      nameAr: 'سارة جونسون',
      tour: 'Wildlife Safari Adventure',
      tourAr: 'مغامرة سفاري الحياة البرية',
      rating: 5,
      text: 'The wildlife safari exceeded all our expectations. Our guide was incredibly knowledgeable and we saw leopards, elephants, and many birds. This was a truly unforgettable experience.',
      textAr:
        'تجاوزت رحلة سفاري الحياة البرية كل توقعاتنا. كان مرشدنا على دراية كبيرة وشاهدنا النمور والفيلة والعديد من الطيور. كانت هذه تجربة لا تُنسى حقًا.',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      date: '2023-06-15',
    },
    {
      id: '2',
      name: 'David Chen',
      nameAr: 'ديفيد تشن',
      tour: 'Hill Country Explorer',
      tourAr: 'مستكشف بلاد التلال',
      rating: 5,
      text: 'The tea plantations were breathtaking and the train journey was like something from a movie. Ceylon Tour Bird arranged everything perfectly and our guide made the experience special.',
      textAr:
        'كانت مزارع الشاي خلابة ورحلة القطار كانت مثل شيء من فيلم. قام سيلان تور بيرد بترتيب كل شيء بشكل مثالي وجعل مرشدنا التجربة مميزة.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      date: '2023-07-22',
    },
    {
      id: '3',
      name: 'Emma Wilson',
      nameAr: 'إيما ويلسون',
      tour: 'Cultural Heritage Tour',
      tourAr: 'جولة التراث الثقافي',
      rating: 5,
      text: "This tour was the perfect introduction to Sri Lanka's rich history. The ancient cities were fascinating and our guide brought the stories to life. Highly recommend!",
      textAr:
        'كانت هذه الجولة المقدمة المثالية للتاريخ الغني لسريلانكا. كانت المدن القديمة مذهلة وأحيا مرشدنا القصص. أوصي بشدة!',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      date: '2023-08-05',
    },
    {
      id: '4',
      name: 'Ahmed Hassan',
      nameAr: 'أحمد حسن',
      tour: 'Beach Adventures',
      tourAr: 'مغامرات الشاطئ',
      rating: 5,
      text: "The beaches in Sri Lanka are simply amazing! Our guide took us to some hidden spots that weren't crowded. The snorkeling experience was incredible, with many colorful fish.",
      textAr:
        'شواطئ سريلانكا رائعة ببساطة! أخذنا مرشدنا إلى بعض الأماكن المخفية التي لم تكن مزدحمة. كانت تجربة الغوص لا تصدق، مع العديد من الأسماك الملونة.',
      date: '2023-09-12',
    },
  ])
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    tour: '',
    rating: 5,
    text: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [autoplayEnabled, setAutoplayEnabled] = useState(true)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  // Load testimonials from localStorage on component mount
  useEffect(() => {
    const savedTestimonials = localStorage.getItem('testimonials')
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials))
    }
  }, [])
  // Save testimonials to localStorage when they change
  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials))
  }, [testimonials])
  // Autoplay for testimonial carousel
  useEffect(() => {
    if (!autoplayEnabled) return
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [autoplayEnabled, testimonials.length])
  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  // Handle rating selection
  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }))
  }
  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setPreviewImage(result)
      }
      reader.readAsDataURL(file)
    }
  }
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Create a new testimonial
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name: formData.name,
      tour: formData.tour,
      rating: formData.rating,
      text: formData.text,
      image:
        previewImage ||
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      date: new Date().toISOString().split('T')[0],
    }
    // Add the new testimonial to the list
    setTestimonials((prev) => [newTestimonial, ...prev])
    // Reset form
    setFormData({
      name: '',
      tour: '',
      rating: 5,
      text: '',
    })
    setPreviewImage(null)
    setIsSubmitting(false)
    setShowForm(false)
  }
  // Navigation functions for carousel
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    setAutoplayEnabled(false)
  }
  const prevSlide = () => {
    setActiveSlide(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 3)) %
        Math.ceil(testimonials.length / 3),
    )
    setAutoplayEnabled(false)
  }
  // Helper function to get the appropriate text based on language
  const getLocalizedValue = (
    testimonial: Testimonial,
    field: 'name' | 'tour' | 'text',
  ) => {
    if (currentLanguage === 'ar') {
      switch (field) {
        case 'name':
          return testimonial.nameAr || testimonial.name
        case 'tour':
          return testimonial.tourAr || testimonial.tour
        case 'text':
          return testimonial.textAr || testimonial.text
      }
    }
    return testimonial[field]
  }
  return (
    <section
      ref={sectionRef}
      className="py-24 w-full relative bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-50 px-4 py-2 rounded-full mb-4 animate-fadeInDown">
            <p className="text-green-600 font-medium">Our Happy Travelers</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeInDown">
            {t('customer_testimonials')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp">
            {t('hear_travelers')}
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
          <div
            className="mt-6 bg-white py-3 px-6 rounded-full inline-flex items-center shadow-md animate-pulse"
            style={{
              animationDuration: '3s',
            }}
          >
            <span className="font-bold text-green-500 text-xl mr-2">
              {testimonials.length}
            </span>
            <span className="text-gray-700 font-medium">
              {t('happy_customers')}
            </span>
          </div>
        </div>

        {/* Add Testimonial Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-hover bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-md font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-green-200/50 inline-flex items-center"
          >
            {showForm ? t('cancel') : t('share_experience')}
            {!showForm && <StarIcon className="ml-2 h-5 w-5" />}
          </button>
        </div>

        {/* Testimonial Form */}
        {showForm && (
          <div className="mb-16 bg-white p-8 rounded-xl shadow-xl max-w-3xl mx-auto animate-fadeIn card-3d">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('share_experience')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="transition-all duration-300 hover:transform hover:scale-105">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t('your_name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    required
                  />
                </div>
                <div className="transition-all duration-300 hover:transform hover:scale-105">
                  <label
                    htmlFor="tour"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t('tour_name')}
                  </label>
                  <select
                    id="tour"
                    name="tour"
                    value={formData.tour}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    required
                  >
                    <option value="">{t('select_tour')}</option>
                    <option value="Wildlife Safari Adventure">
                      {t('wildlife_safari')}
                    </option>
                    <option value="Hill Country Explorer">
                      {t('hill_country')}
                    </option>
                    <option value="Beach Adventures">
                      {t('beach_adventure')}
                    </option>
                    <option value="Cultural Heritage Tour">
                      {t('cultural_heritage')}
                    </option>
                    <option value="Bird Watching Expedition">
                      Bird Watching Expedition
                    </option>
                    <option value="Ayurveda & Wellness Retreat">
                      Ayurveda & Wellness Retreat
                    </option>
                    <option value="Adventure Seeker Package">
                      Adventure Seeker Package
                    </option>
                    <option value="Family Discovery Tour">
                      Family Discovery Tour
                    </option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  {t('your_rating')}
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className="focus:outline-none transition-transform duration-300 hover:scale-125"
                    >
                      <StarIcon
                        className={`h-8 w-8 ${formData.rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="transition-all duration-300 hover:transform hover:scale-105">
                <label
                  htmlFor="text"
                  className="block text-gray-700 font-medium mb-2"
                >
                  {t('your_experience')}
                </label>
                <textarea
                  id="text"
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  required
                ></textarea>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  {t('your_photo')}
                </label>
                <div className="flex items-center space-x-4">
                  <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-md flex items-center">
                    <Camera className="h-5 w-5 mr-2" />
                    {t('upload_photo')}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                  {previewImage && (
                    <div className="relative">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="h-16 w-16 object-cover rounded-full border-2 border-green-500 transition-transform duration-300 hover:scale-110"
                      />
                      <button
                        type="button"
                        onClick={() => setPreviewImage(null)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs shadow-md hover:bg-red-600 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hover bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-green-200/50 flex items-center"
                >
                  {isSubmitting ? t('submitting') : t('submit_testimonial')}
                  {!isSubmitting && <Upload className="ml-2 h-5 w-5" />}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${activeSlide * 100}%)`,
              }}
            >
              {Array.from({
                length: Math.ceil(testimonials.length / 3),
              }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials
                      .slice(slideIndex * 3, slideIndex * 3 + 3)
                      .map((testimonial) => (
                        <div
                          key={testimonial.id}
                          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-3d transform hover:scale-[1.02]"
                        >
                          <div className="p-8">
                            <div className="flex items-center mb-6">
                              <img
                                src={testimonial.image}
                                alt={getLocalizedValue(testimonial, 'name')}
                                className="w-16 h-16 rounded-full object-cover border-2 border-green-500 shadow-md"
                              />
                              <div className="ml-4">
                                <h3 className="font-bold text-gray-900 text-lg">
                                  {getLocalizedValue(testimonial, 'name')}
                                </h3>
                                <p className="text-green-600 text-sm font-medium">
                                  {getLocalizedValue(testimonial, 'tour')}
                                </p>
                                <div className="flex mt-1">
                                  {[...Array(5)].map((_, i) => (
                                    <StarIcon
                                      key={i}
                                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="relative">
                              <span className="absolute -top-2 -left-2 text-6xl text-green-200">
                                "
                              </span>
                              <p className="text-gray-700 italic mb-4 relative z-10 px-4">
                                {getLocalizedValue(testimonial, 'text')}
                              </p>
                              <span className="absolute -bottom-8 -right-2 text-6xl text-green-200">
                                "
                              </span>
                            </div>
                            <div className="text-right text-xs text-gray-500 mt-6">
                              {new Date(testimonial.date).toLocaleDateString(
                                currentLanguage === 'ar' ? 'ar-SA' : 'en-US',
                                {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                },
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          {testimonials.length > 3 && (
            <div className="flex justify-center mt-10 space-x-4">
              <button
                onClick={prevSlide}
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-green-50 text-gray-700"
                aria-label="Previous testimonials"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <div className="flex space-x-2 items-center">
                {Array.from({
                  length: Math.ceil(testimonials.length / 3),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveSlide(index)
                      setAutoplayEnabled(false)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === index ? 'bg-green-500 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-green-50 text-gray-700"
                aria-label="Next testimonials"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute top-40 left-10 w-40 h-40 bg-green-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
    </section>
  )
}
