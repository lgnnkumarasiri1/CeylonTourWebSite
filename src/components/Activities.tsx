import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
export const Activities: React.FC = () => {
  const {
    
  } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const activities = [{
    id: 1,
    name: 'Cultural Sites',
    image: 'nullur.png'
  }, {
    id: 2,
    name: 'Tea Plantations',
    image: 'teaplantation.png'
  }, {
    id: 3,
    name: 'Surfing',
    image: 'surfing.png'
  }, {
    id: 4,
    name: 'Snorkeling',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 5,
    name: 'Wildlife Safari',
    image: "safari2.jpg"
  }, {
    id: 6,
    name: 'Train Journeys',
    image: 'trainride.png'
  }, {
    id: 7,
    name: 'Waterfall Hiking',
    image: 'waterfallclimb.png'
  }, {
    id: 8,
    name: 'Beach Relaxation',
    image: "Matarabeach.jpg"
  }];
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    let animationFrameId: number;
    let startTime: number | null = null;
    const scrollDuration = 20000; // 20 seconds for a complete scroll
    const totalHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const scrollStep = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      if (isPaused) {
        startTime = timestamp - scrollContainer.scrollTop / totalHeight * scrollDuration;
        animationFrameId = requestAnimationFrame(scrollStep);
        return;
      }
      const elapsed = timestamp - startTime;
      const scrollPosition = elapsed % scrollDuration / scrollDuration * totalHeight;
      scrollContainer.scrollTop = scrollPosition;
      animationFrameId = requestAnimationFrame(scrollStep);
    };
    animationFrameId = requestAnimationFrame(scrollStep);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);
  return <div className="mb-16">
      <h2 className="text-center text-3xl font-bold mb-10">
        <span className="text-gray-900">Top </span>
        <span className="text-gray-800">Activities </span>
        <span className="text-gray-700">for </span>
        <span className="text-gray-600">you</span>
      </h2>
      <div ref={scrollContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-[500px] overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        {activities.map(activity => <div key={activity.id} className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 card-3d group">
            <div className="h-full">
              <img src={activity.image} alt={activity.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-xl font-semibold p-6">
                  {activity.name}
                </h3>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};