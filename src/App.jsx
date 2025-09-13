import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

// Data for the cards to make them dynamic
const recommendedCourses = [
  {
    image: 'profile.png',
    courseImage: 'image1.png',
    title_1: 'The Power',
    title_2: 'Start',
    level: 'Beginner',
    subtitle: 'Lower Body',
    instructor: 'Leah Stre'
  },
  {
    image: 'profile.png',
    courseImage: 'image2.png',
    title_1: 'The Power',
    title_2: 'Start',
    level: 'Beginner',
    subtitle: 'Lower Body',
    instructor: 'Leah Stre'
  },
  {
    image: 'profile.png',
    courseImage: 'image3.png',
    title_1: 'The Power',
    title_2: 'Start',
    level: 'Beginner',
    subtitle: 'Lower Body',
    instructor: 'Leah Stre'
  },
  {
    image: 'profile.png',
    courseImage: 'image4.png',
    title_1: 'The Power',
    title_2: 'Start',
    level: 'Beginner',
    subtitle: 'Lower Body',
    instructor: 'Leah Stre'
  }
];

const popularCourses = [
  {
    image: 'image9.jpg',
    title: 'Course 1',
    subtitle: 'Lower Body',
    level: 'Beginner'
  },
  {
    image: 'image10.jpg',
    title: 'Course 2',
    subtitle: 'Lower Body',
    level: 'Beginner'
  },
  {
    image: 'image11.webp',
    title: 'Course 3',
    subtitle: 'Lower Body',
    level: 'Beginner'
  },
  {
    image: 'image12.jpg',
    title: 'Course 4',
    subtitle: 'Lower Body',
    level: 'Beginner'
  }
];

// Reusable card component for recommended courses
const RecommendedCard = ({ course }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex flex-col justify-between shadow-lg ring-1 ring-white/20 transition-all duration-300 hover:ring-white/50 cursor-pointer aspect-square font-sans">
      <div className="flex items-start justify-between">
        <div className="flex-1 flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/50">
              <img
                src={course.image}
                alt="instructor"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <span className="text-white text-sm font-bold">
              {course.instructor}
            </span>
          </div>
          <div className="flex flex-col mt-4">
            <span className="text-white font-bold text-xl leading-snug">
              {course.title_1}
            </span>
            <span className="text-white font-bold text-2xl leading-tight">
              {course.title_2}
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 w-1/2 aspect-[2/3] ml-4 mt-1">
          <img
            src={course.courseImage}
            alt="course"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
      <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-2 flex items-center justify-center space-x-2 text-gray-300 text-xs mt-auto">
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 10.7c.6-1.3-.2-2.7-1.5-3.3-1.3-.6-2.7.2-3.3 1.5l-2 4-2-4c-.6-1.3-2-2.1-3.3-1.5-1.3.6-2.1 2-1.5 3.3l4 8c.6 1.3 2 2.1 3.3 1.5 1.3-.6 2.1-2 1.5-3.3l-2-4 2-4z"/>
          </svg>
          <span className="text-white font-bold text-base">
            {course.subtitle}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.32L22 9.27l-5 4.87 1.18 6.88L12 17.27l-6.18 3.25L7 14.14l-5-4.87 7.91-1.01L12 2z"/>
          </svg>
          <span className="text-white font-bold text-base">
            {course.level}
          </span>
        </div>
      </div>
    </div>
  );
};

// Reusable card component for popular courses
const PopularCard = ({ course }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex flex-col justify-between shadow-lg ring-1 ring-white/20 transition-all duration-300 hover:ring-white/50 cursor-pointer">
      <div className="rounded-xl overflow-hidden mb-4 h-48">
        <img src={course.image} alt="course" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-white text-base font-semibold">{course.title}</h3>
      <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-2 flex items-center justify-center space-x-2 text-gray-300 text-xs mt-2">
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 10.7c.6-1.3-.2-2.7-1.5-3.3-1.3-.6-2.7.2-3.3 1.5l-2 4-2-4c-.6-1.3-2-2.1-3.3-1.5-1.3.6-2.1 2-1.5 3.3l4 8c.6 1.3 2 2.1 3.3 1.5 1.3-.6 2.1-2 1.5-3.3l-2-4 2-4z"/>
          </svg>
          <span className="text-white font-bold text-base">
            {course.subtitle}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.32L22 9.27l-5 4.87 1.18 6.88L12 17.27l-6.18 3.25L7 14.14l-5-4.87 7.91-1.01L12 2z"/>
          </svg>
          <span className="text-white font-bold text-base">
            {course.level}
          </span>
        </div>
      </div>
    </div>
  );
};

// Main dashboard layout component
const Dashboard = ({ isNavExpanded }) => {
  // Fixed the widths to prevent overlap
  const mainContentProps = useSpring({
    marginLeft: isNavExpanded ? '380px' : '100px',
    width: isNavExpanded ? 'calc(100% - 390px)' : 'calc(100% - 110px)',
    config: { duration: 300 }
  });

  const [isDark, setIsDark] = useState(true);

  return (
    <animated.div style={mainContentProps} className="flex-1 flex flex-col p-8 transition-all duration-300">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl ring-1 ring-white/20 min-h-[90vh]">
        {/* Top Bar */}
        <div className="flex items-center justify-between space-x-4 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/50">
              <img src="profile.png" alt="Profile" className="object-cover w-full h-full" />
            </div>
            <span className="text-white text-xl font-semibold">Hello, Tharindu</span>
          </div>
          <div className="flex-1 max-w-sm relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-white/10 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm placeholder-gray-300"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* New Toggle Bar for Dark/Light Mode */}
            <div className="relative w-80 h-10 flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 ring-1 ring-white/20">
              <button
                className={`flex-1 flex items-center justify-center p-2 rounded-full transition-colors duration-300 z-10 focus:outline-none focus:ring-0
                ${isDark ? "bg-white/5 text-white" : "text-gray-400"}`}
                onClick={() => setIsDark(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
                <span className="font-semibold text-sm">Dark</span>
              </button>
              <button
                className={`flex-1 flex items-center justify-center p-2 rounded-full transition-colors duration-300 z-10 focus:outline-none focus:ring-0
                ${!isDark ? "bg-white/5 text-white" : "text-gray-400"}`}
                onClick={() => setIsDark(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                <span className="font-semibold text-sm">Light</span>
              </button>
            </div>
          </div>
        </div>
        {/* Recommended Courses Section */}
        <div className="mb-8">
          <h2 className="text-2xl text-white font-semibold mb-4">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedCourses.map((course, index) => (
              <RecommendedCard key={index} course={course} />
            ))}
          </div>
        </div>
        {/* Most Popular Section */}
        <div>
          <h2 className="text-2xl text-white font-semibold mb-4">Most Popular</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCourses.map((course, index) => (
              <PopularCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </animated.div>
  );
};

// Navigational items
const navItems = [
  { name: 'Home', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>) },
  { name: 'Explore Virtually', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>) },
  { name: 'Exercise', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M14.7 10.7c.6-1.3-.2-2.7-1.5-3.3-1.3-.6-2.7.2-3.3 1.5l-2 4-2-4c-.6-1.3-2-2.1-3.3-1.5-1.3.6-2.1 2-1.5 3.3l4 8c.6 1.3 2 2.1 3.3 1.5 1.3-.6 2.1-2 1.5-3.3l-2-4 2-4z"/></svg>) },
  { name: 'Relaxing Music', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-12h2v4h-2v-4zm-4 4h2v-4H7v4zm8 0h2v-4h-2v4zm-4 4h2v-2h-2v2zm0-8h2V7h-2v2z"/></svg>) },
  { name: 'Green Planting', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>) },
  { name: 'Community', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-2 4h4v2h-4V8zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2zm-2-8h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm8-8h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/></svg>) },
  { name: 'Search', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>) },
];


// Main application component
const App = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Animation for the pop-out nav menu
  const navMenuProps = useSpring({
    width: isNavExpanded ? '250px' : '0px', // increased from 180px to 250px
    opacity: isNavExpanded ? 1 : 0,
    config: { duration: 300 },
  });


  return (
    <div className="bg-gray-800 text-white min-h-screen flex">
      {/* Fixed, thin nav bar */}
      <div className="fixed z-20 top-4 left-4 bg-white/10 backdrop-blur-md rounded-full px-2 py-6 shadow-xl flex flex-col justify-between items-center transition-all duration-300">
        <div className="flex flex-col items-center space-y-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setIsNavExpanded(!isNavExpanded)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
      {/* Pop-out navigation menu */}
      {isNavExpanded && (
        <animated.div
          style={navMenuProps}
          className="fixed z-10 top-4 left-24 ml-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl overflow-hidden self-start
                   w-48 md:w-56 lg:w-64 transition-all duration-300"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-start space-x-4 p-3 rounded-xl hover:bg-white/20 transition-colors w-full"
              >
                <div className="text-white flex-shrink-0">
                  {item.icon}
                </div>
                <span className="font-semibold text-white text-sm whitespace-nowrap text-left">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </animated.div>
      )}
      {/* Dashboard content area */}
      <Dashboard isNavExpanded={isNavExpanded} />
    </div>
  );
};

export default App;
